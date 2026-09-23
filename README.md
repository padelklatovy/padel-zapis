# Padel Zápis

Webová aplikace pro rozhodčí padelu – zápis zápasu podle pravidel FIP na tabletu nebo telefonu, tabule pro promítání skóre a export výsledku do JSON.

## Funkce
- Star point (FIP 2026), zlatý bod nebo výhody
- Tie-break při 6:6, formáty 2 vítězné sety / 2 sety + super tie-break / 1 set
- Pořadí a strana podání, výměna stran, setbol a mečbol
- Krok zpět, záznam každého bodu s časem
- Tabule pro diváky (tlačítko Tabule nebo adresa s `#tabule`)
- Export JSON (`padel-zapis/1`) pro budoucí napojení na systém ČPF

## Provoz
Jeden soubor `index.html`, bez serveru. Hostováno na GitHub Pages.
Data se ukládají v prohlížeči zařízení (localStorage).

Na iPhonu / iPadu: otevřít v Safari → Sdílet → Přidat na plochu.

## Poznámky
- Režim Americano je v kódu připravený, ale vypnutý (`FEATURE_AMER=false`) – patří do budoucí pořadatelské aplikace.
