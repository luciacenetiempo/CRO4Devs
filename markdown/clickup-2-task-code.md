# il sottotask CODE

## Il sottotask CODE

Il sottotask Code viene gereato automaticamente da Clickup quando il task principale dell’esperimento passa in uno stato attivo: DOING.

Questo è lo spazio riservato al developer. 

![il task code](/images/clickup-task-code.png)

Al suo interno è presente la **checklist delle attività che coinvolgono il DEV** prima del lancio dell'esperimento e che è fondamentare per essere certi di coprire tutte le aree di sua competenza. Questa lista **va spuntata una volta conclusa ogni singola attività.**
Quando tutte le attività della checklist saranno state chiuse e quindi spuntate al **task CODE passerà allo stato "COMPLETE" grazie ad un automatismo di clickup** e al coordinator verrà inviata la notifica.

### Feasibility check - Check di fattibilità

Il check di fattibilità deve essere una verifica rapida direttamente sul sito della fattibilità lato codice dell'esperimento rischiesto.
Questa verifica corrisponde all'accertarsi di avere le condizioni giuste per lavorare lato frontend sull'esperimento richiesto, ad esempio, la disponibilità di tutti i servizi o API necessarie, la possibilità di manipolare quell'area del DOM, la possibilità di lavorare all'esperimento in maniera inversa erogando il contenuto con il CMS semplificando il lavoro etc.

**Stima attività**

Dopo aver effettuato il check di fattibilità si potrà procedere con una valutazione della stima del lavoro da fare, e sulla base dell'effort richiesto si potrà procedere con l'inserirmento come stima in ore (es. 4h)
nel sottotask Code.
La stima dell'attività contribuisce ad assegnare al test la giusta priorità e ad evitare il sovraccarico di esperimenti onerosi nello stesso lasso di tempo.

**Data di consegna**

Se è possibile individuare una data di consegna prevista per dare la possiblità di gestire le attività anche basandosi su questa informazione.

### Creation of custom metrics - Creazione dei custom events

Nel task principale verifichiamo quali sono le metriche che si vogliono analizzare nell'esperimento.
In molti altri casi sarà necessario creare manualmente delle metriche CUSTOM come ad esempio il click su un bottone o il push ad un evento API.

Monetate ha già previsto alcune metriche che **vengono associate alle experiences di dafault** e che vengono sempre tracciate (non vanno quindi create come custom):

- Conversion rate
- New customer acquisition rate
- Add to cart rate
- Cart abandonment rate
- Bounce rate
- Revenue per session
- Average order value

In molti altri casi sarà necessario **creare manualmente delle metriche CUSTOM** come ad esempio il click su un bottone o il push ad un evento API.
Nel task principale al **Field: 04 KPI** è possibile comprendere quali sono le metriche che si vogliono analizzare con l'esperimento.
Le metriche e gli eventi custom sono creati direttamente dal DEV attraverso l'event builder di Monetate scegliendo accuratamente la tipologia. Dopo averle create è necessario associarle all’experience di master e a quella di preview.

### Creazione dei custom target - Creation of custom targets

Nel task principale, nel field **Field: 00 Target** verifichiamo se è necessario limitare la audience dell'esperimento ad un target specifico.

Ad esempio:
Serve un retrack dopo un'azione specifica dell'utente?
L'utente deve avere un cookie specifico? (Cookie EarlyAccess)
L'utente deve arrivare in pagina con un parametro?

Sulla base del target richiesto, se è necessario, **creare il target custom nel target builder di Monetate.**

 Dopo averlo creato è necessario associarle all’experience di master e a quella di preview.

### Il codice - Development

Dopo aver effettuato il check di fattibilità e aver creato custom target e custom events sarà possibile procedere con il codice vero e proprio dell’esperimento.

Questa fase arriva dopo la definizione di target e metriche perchè in entrambi i casi **potrebbe essere necessario utilizzare il codice per fare dei push agli eventi API di Monetate o per creare dei retrack** che andranno a identificare se l’utente appartiene ad uno specifico target.

### La preview - Creating preview link

La creazione delle preview è **il primissimo step di tutta la successiva fase di UAT del test.**

Serve per permettere agli altri team di visualizzare il test in maniera funzionante prima di procedere con l'attivazione.

L'atterraggio della preview, quando possibile, deve essere sulla pagina effettiva del test.
Ad esempio se il test va effettuato solo sulle PLP, la preview dovrà reindirizzare direttamente ad una PLP.

Dopo aver creato la preview dell'esperimento i link desktop e mobile (anche se lo stesso) dovranno essere inseriti nelle relative voci "Preview Link" presenti nel task principale.