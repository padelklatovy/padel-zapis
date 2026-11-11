# Padel Zápis

Webová aplikace pro rozhodčí padelu – zápis zápasu podle pravidel FIP na tabletu nebo telefonu.
Adresa: https://padelklatovy.github.io/padel-zapis/

## Funkce
- Star point (FIP 2026), zlatý bod nebo výhody; tie-break při 6:6; 2 sety / 2 sety + super TB / 1 set
- Pořadí a strana podání, výměna stran, setbol a mečbol, krok zpět
- Rozehrávka 1 / 3 min, pauzy 90 s (výměna stran) a 120 s (mezi sety)
- „Jen výsledek“ pro zápasy bez rozhodčího
- Nápověda hlášení rozhodčího a tahák (vypínatelné)
- Tabule pro diváky (tlačítko Tabule nebo adresa s `#tabule`)
- Výsledek pořadateli: Google tabulka (automaticky), WhatsApp, sdílení, PDF report „Zápis o utkání“
- Zápis o utkání družstev – vyplnění oficiálního formuláře ČPF v PDF s podpisy
- Režim kapitána (`#hlaseni=…`) – kapitáni bez rozhodčího nahlásí výsledek přes QR kód
- Režim pořadatele (`#poradatel`) – vytvoření QR kódu a plakátu pro kapitány
- Export JSON (`padel-zapis/1`) pro budoucí napojení na turnajový systém ČPF

## Soubory
- `index.html` – celá aplikace (jeden soubor, bez serveru)
- `vysledky-apps-script.gs` – skript pro Google tabulku s výsledky (návod v hlavičce souboru); výchozí tabulka „Padel Zápis – výsledky“ je v aplikaci nastavená (`DEFAULT_SHEET`)

## Provoz
Hostováno na GitHub Pages. Data se ukládají v prohlížeči zařízení (localStorage), bez přihlášení.
Aktualizace: Add file → Upload files → nový `index.html` → Commit changes.
Na iPhonu / iPadu: Safari → Sdílet → Přidat na plochu.

## Poznámky
- Režim Americano je v kódu připravený, ale vypnutý (`FEATURE_AMER=false`).
