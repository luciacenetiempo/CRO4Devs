# Le preview

Cosa succede ogni volta che testiamo una preview generata direttamente da Monetate?

### Team member A

*"Io non vedo la preview sul mio smartphone aziendale"*

### Team member B

*"Io la vedo  da incognito e mi sembra che funzioni tutto"*

### Team member C

*"Io lo vedo ma mi sembra che ci sia un sacco di flickering"*

## Cosa sta succedendo?

La preview di monetate è **un layer di terze parti sul sito web**, per poterla visualizzare è necessario abilitare il tracciamento dei cookie di terze parti.

Pur attivando le terze parti sarà visibile però non si sta visualizzando il test in una situazione reale:

- verranno ignorati tutti i target
- ci si esporrà ad un flickering maggiore
- non sarà possibile verificare il funzionamento delle metriche nè l'esecuzione con l'inspector.

## Come creare la preview

### Step 1

Duplica l'experience dell'esperiemento con il codice che hai già scritto in precedenza

![Monetate Preview 1](/images/monetate-preview-1.png)

### Step 2

Rinomina il duplicato rimuovendo la stringa "Copy" dal titolo e inserendo "PV |" lasciando tutto il resto

![Monetate Preview 2](/images/monetate-preview-2.png)

### Step 3

Rimuovi tutti i tag già presenti e inserisci il nuovo tag "preview"

![Monetate Preview 3](/images/monetate-preview-3.png)

### Step 4

Elimina la action di controllo per eseguire l'experience al 100% per evitare che il traffico venga splittato

![Monetate Preview 4](/images/monetate-preview-4.png)

### Step 5

Elimina dal WHO il  Device se il codice da eseguire è uguale per mobile e desktop

![Monetate Preview 5](/images/monetate-preview-5.png)

### Step 6

Crea dal WHO un target di tipologia Landing e seleziona tra le voci  Initial URL query string

![Monetate Preview 6](/images/monetate-preview-6.png)

### Step 7

Inserisci nel campo Query string name la stringa testid scritta in questo modo

![Monetate Preview 7](/images/monetate-preview-7.png)

### Step 8

Inserisci nel campo Matches value l'id dell’esperimento (lo trovi nel titolo e su clickup)

![Monetate Preview 8](/images/monetate-preview-8.png)

### Step 9

Salva il target, verifica che sia tutto impostato correttamente e attiva l'experience.

![Monetate Preview 9](/images/monetate-preview-9.png)

### Step 10

Inserisci su clickup il link diretto del sito seguito dal parametro testid=ID-DEL-TEST

![Monetate Preview 10](/images/monetate-preview-10.png)

## Perchè questo metodo è migliore:

Con questo nuovo metodo Monetate considererà l'esperienza come effettivamente attiva per gli utenti che atterrano su qualsiasi pagina del sito con il parametro scelto.

Verificherà quindi che l'utente abbia iniziato una nuova sessione su una qualsiasi pagina del sito contenente il parametro **testid=ID-DEL-TEST** per capire se appartiene al target di questa experience e la eseguirà proprio come farebbe con un esperimento.

### Importante:

**Non servirà più generare il link di preview dal bottone predisposto da Monetate.
Attivata l'experience avremo una situazione reale di esecuzione del codice direttamente sul sito web.**