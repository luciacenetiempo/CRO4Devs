# I retrack

## Cosa è un track?

Per Monetate, **un Track rappresenta il momento in cui il nostro sito web gli invia informazioni rilevanti** per le analisi attraverso una chiamata API.
Le informazioni inviate attraverso le API di Monetate **abilitano nella piattaforma l'utilizzo di target più granulari** e conditions legate strettamente all'esperienza dell'utente in quello specifico momento.

## Cosa sono i retrack?

Il retrack **è necessario per comunicare a Monetate che qualcosa in pagina è cambiato senza un refresh** ed è quindi il momento di tracciare nuovamente i dati e rilanciare alcune esperienze.

Il retrack può essere legato ad alcune azioni dell'utente, come un click sul pulsante "load more" in PLP, l'aggiunta di un prodotto al carrello o la modifica della sua quantità.
Per gran parte di queste azioni i nostri siti già lanciano dei retrack autonomamente.

## L'uso dei Retrack per il Targeting

Il retrack di Monetate può essere utilizzato anche manualmente al fine di **costruire dei custom target.**

### Perchè lanciare un retrack?

**AD ESEMPIO: Vogliamo lanciare un test solo per gli utenti che hanno aperto il mini-cart.**

Creiamo un "**Target Javascript Var**" basato sul valore true della variabile window.minicart. Uilizziamo il target variabile perchè sarà un target utile solo nel momento in cui l’utente compie l’azione e non dovrà persistere nel tempo.
**Il valore di questa variabile viene impostato come true solo quando l'utente completa l'azione** desiderata che in questo caso è l'apertura del minicart.

**Cosa sta succedendo?**

Il valore di questa variabile cambia durante la navigazione dell'utente, ed **è quindi necessario informare Monetate che qualcosa in pagina è cambiato e quell'utente è entrato nel target** desiderato. 

Dobbiamo eseguire un retrack.

### Come creare l'experience di retrack

Per generare il retrack, creiamo un'esperienza che eseguiremo al 100% dell'audience, quindi nessun elemento settato nel WHO, andremo a lavorare solo con le conditions se necessarie.

**Come viene settata?**

Il  titolo sarà composto così:

**Retrack | nome test - (CODICE-DEL-TEST)**

Il tag che andrà associato è **"retrack".**

**IMPORTANTE!** 

**Il link dell'experience di retrack v﻿a sempre inserito su clickup alla voce Related Experiences**

### Come è fatta la action?

La action di questa experience **sarà una action JavaScript con un listener sull'evento al click del bottone.**
Quando avviene l'evento settiamo il valore della variabile window.minicart in "true" ed eseguiamo il codice per il retrack.

Il codice dell'esperimento che deve essere eseguito dopo il retrack solo per il target selezionato deve avere le action JavaScript con **"Only run once" impostato su "NO".**

## Il codice per il retrack

Il metodo per comunicare a Monetate che qualcosa in pagina è cambiato e deve quindi eseguire nuovamente i nostri test è:

```jsx
window.monetateQ = window.monetateQ || []; 

let pageType = 'product';

window.monetateQ.push(
 ['setPageType', pageType]
);

window.monetateQ.push(
 ['trackData']
);
```

### Il nuovo codice per i retrack

```jsx
MonetateHelper.reTrack();
```

Questo nuovo metodo per fare i retrack permette con una sola chiamata JS di ripopolare automaticamente tutte le informazioni necessarie come ad esempio ProductIDs, PageType, CartRow etc.

Stiamo lavorando per ottenerlo su tutti i Brand, attualmente però è utilizzabile solo sui seguenti:

- Contacts Direct
- Costa Del Mar
- David Clulow
- Oakley
- OakleySI
- Salmoiraghi & Viganò

### Importante:

**Il retrack deve essere sempre legato ad un evento, azione o condizione specifica.
Va quindi inserito sempre in un .addEventListener o un if()**