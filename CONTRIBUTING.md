# Linee guida per lo sviluppo

## Indice

- [**Nomenclatura dei file**](#nomenclatura-dei-file)
- [**URL**](#url)
- [**Workflow di lavoro**](#workflow-di-lavoro)

## Workflow di lavoro

### Task

- Board per gestire i task (TODO)
- I task devono essere semplici e descrittivi in modo che sia chiaro il lavoro da svolgere

### GIT

- **Non** eseguire il push di commit direttamente verso il branch main
- Implementazioni monotematiche: creare un feature branch con nome possibilmente descrittivo (es: id dell’issue + brevissima descrizione, 123-feature-foo)
- Implementazioni articolate: creare un integration branch (es: integration/feature-foo) da cui poi forkare ulteriori feature branches specifici (es: 123-feature-foo-bar)
- Creare pull requests più semplici possibile per facilitare la review
- Prima di mergiare verso main (o integration branch) di seguito `destinazione`:
    - eseguire un pull del branch di destinazione `git checkout {destinazione} && git pull`, 
    - tornare al feature branch e ribasare `git checkout - && git rebase {destinazione}`
    - risolvere eventuali conflitti
    - pushare il feature branch `git push -f`. N.B.: `-f` (force è necessario ad evitare di eseguire un pull e risolvere una seconda volta eventuali conflitti).

## Nomenclatura dei file

**Requisiti:**

- Tutti i file con estensione `.js` / `.vue` / `.ts` dovranno essere nominati in `PascalCase`: parole con la prima lettera maiuscola senza spazi di delimitazione.
- I file `.vue` risiedenti nelle directory `layouts` e `pages` dovranno, invece, essere nominati in `kebab-case`: parole in minuscolo delimitate dal carattere "trattino" `-`.

## URL

**Requisiti:**

- Si richiede che siano sempre il lingua Italiana.
- Il *case* selezionato è il: `kebab-case`: parole in minuscolo delimitate dal carattere "trattino" `-`.

**Esempi validi:**
- `eventi`
- `chi-siamo`
- `dicono-di-noi`

**Esempi NON validi:**
- `events`
- `chi_siamo`
- `DiconoDiNoi`
