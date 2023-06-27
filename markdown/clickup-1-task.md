# Il task su Clickup

## Struttura del task su Clickup

### Il titolo del task

Il titolo del task su ClickUp generalmente corrisponde anche al nome dell'experience su Monetate e viene composto in questo modo:
**SITE ZONE | Nome descrittivo del test - TESTID.**

### I link delle experiences su Clickup

Le experiences master di Monetate, quelle che poi verranno attivate come esperimenti veri e propri **vengono create e settate direttamente dal coordinator CRO** del brand.

![Task di clickup](/images/clickup-task-1.png)

Nella descrizione del task è presente una tabella nella quale sono inclusi i link alle Monetate experiences su cui lavorare divise per device Desktop e Mobile: campi **Monetate experience Desktop** e **Monetate experience Mobile**

La riga **Related experiences** è riservata al dev che andrà ad inserire i link alle esperienze Monetate correlate al test, come Data Collect e/o Retrack. **Questa operazione lato dev è fondamentale per far si che nel momento in cui viene spento, riacceso o promosso l’esperimento, le esperienze correlate subiscano lo stesso trattamento.**

Anche le righe **Preview link Desktop** e **Preview link Mobile** sono gestite dal dev che andrà ad inserire i link generati per la preview da utilizzare per le fasi di UAT.

### Le informazioni fondamentali per il test

Nei custom field del task di Clickup sono elencate tutte le informazioni necessarie alla costruzione dell’esperimento su cui si sta lavorando.

![Task di clickup](/images/clickup-task-2.png)

**La audience target - WHO - Field: 00 Target**
In questo campo è presente la descrizione dell'audience su cui il test dovrà lavorare. Es: utenti che hanno compiuto una specifica azione.

**Il device - WHO - Field: 05 Device**

In questo campo è presente la lista dei device impattati dal test.  Es: Mobile & Desktop oppure solo Mobile etc. Questo target viene assegnato all’experience su Monetate direttamente dal Coordinator CRO del brand.

**Le metriche e gli eventi custom - WHY - Field: 04 KPI**

In questo campo è presente la lista delle metriche che si andranno a tracciare ed analizzare nel test, vengono riportate sia quelle di default di Monetate che quelle da creare come custom event.
Questo è quindi un field fondamentale lato sviluppo per stabilire quali eventi custom è necessario creare in monetate.

**La definizione del problema - WHAT - Field 02 Problem definition**

In questo campo viene descritta il risultato di una analisi su una determinata zona del sito, si mette in evidenza quello che è il “problema” che si vuole andare a risolvere. Questo field è molto utile a capire il perchè si sta andando a fare quell’esperimento specifico.

**L’ipotesi da testare - WHAT - Field 03 Hypotesis to be tested**

In questo campo viene descritta l’ipotesi fatta per risolvere il problema e che andrà quindi testata per verificarne la sua efficacia. 
Lato sviluppo questo campo può servire a chiarire le idee su cosa deve essere sviluppato a prescindere dal design