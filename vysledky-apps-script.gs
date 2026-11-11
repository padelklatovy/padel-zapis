/**
 * Padel Zápis → Google tabulka
 * Každý dohraný zápas zapíše jeden řádek do listu „Výsledky“.
 * Když se stejný zápas odešle znovu (oprava po kroku zpět), řádek se přepíše, nevznikne duplicita.
 *
 * Nasazení:
 * 1. Vytvořte Google tabulku → Rozšíření → Apps Script.
 * 2. Smažte obsah a vložte tento kód → Uložit.
 * 3. Nasadit → Nové nasazení → typ „Webová aplikace“
 *    Spustit jako: Já · Kdo má přístup: Kdokoli → Nasadit → povolit přístup.
 * 4. Zkopírujte adresu webové aplikace (…/exec) a vložte ji v Padel Zápisu
 *    do Nový zápas → Odesílání výsledků → Adresa Google tabulky.
 */
const SHEET_NAME = 'Výsledky';
const HEADER = ['Přijato', 'Turnaj / kurt', 'Kategorie / kolo', 'Tým A', 'Tým B', 'Vítěz',
  'Vítězný pár', 'Skóre (A:B)', 'Sety A:B', 'Začátek', 'Konec', 'Délka (min)',
  'Body A', 'Body B', 'Pravidla', 'ID zápisu', 'Zdroj', 'Potvrdili'];
const KEY_COL = 16; // sloupec „ID zápisu“

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0 || sh.getRange(1, HEADER.length).getValue() === '') {
      sh.getRange(1, 1, 1, HEADER.length).setValues([HEADER]);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, HEADER.length).setFontWeight('bold');
    }
    const row = [new Date(), d.event, d.round, d.teamA, d.teamB, d.winner, d.winnerName,
      d.score, d.sets, d.start ? new Date(d.start) : '', d.end ? new Date(d.end) : '',
      d.minutes, d.pointsA, d.pointsB, d.rules, String(d.key),
      d.source || 'rozhodčí', d.confirmedBy || ''];

    const keyCol = KEY_COL;
    const last = sh.getLastRow();
    if (last > 1) {
      const keys = sh.getRange(2, keyCol, last - 1, 1).getValues().map(r => String(r[0]));
      const i = keys.indexOf(String(d.key));
      if (i >= 0) {
        sh.getRange(i + 2, 1, 1, row.length).setValues([row]);
        return ContentService.createTextOutput('updated');
      }
    }
    sh.appendRow(row);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}
