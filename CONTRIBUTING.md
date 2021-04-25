### Linee guida per lo sviluppo

 - Board per gestire i task (TODO)
 - I task devono essere semplici e descrittivi in modo che sia chiaro il lavoro da svolgere
 - **Non** eseguire il push di commit direttamente verso il branch main
 - Implementazioni monotematiche: creare un feature branch con nome possibilmente descrittivo (es: id dell’issue + brevissima descrizione, 123-feature-foo)
 - Implementazioni articolate: creare un integration branch (es: integration/feature-foo) da cui poi forkare ulteriori feature branches specifici (es: 123-feature-foo-bar)
 - Creare pull requests più semplici possibile per facilitare la review
 - Prima di mergiare verso main (o integration branch) di seguito `destinazione`:
    - eseguire un pull del branch di destinazione `git checkout {destinazione} && git pull`, 
    - tornare al feature branch e ribasare `git checkout - && git rebase {destinazione}`
    - risolvere eventuali conflitti
    - pushare il feature branch `git push -f`. N.B.: `-f` (force è necessario ad evitare di eseguire un pull e risolvere una seconda volta eventuali conflitti).
 - Eventuali url di pagine:
    - dovranno essere in lingua italiana.
    - parole multiple dovranno essere divise da `-`.
    - es. `eventi` / `chi-siamo` / `dicono-di-noi` / *ecc...*
