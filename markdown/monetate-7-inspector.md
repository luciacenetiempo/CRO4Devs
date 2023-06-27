# L’inspector

Uno strumento molto utile che monetate mette a disposizione per gli sviluppatori è l’Inspector. Si tratta di un plug-in per browser che consente di vedere quali informazioni il sito sta comunicando a Monetate in quel momento.

Per installare il plugin, accedi a questo link: [**https://marketer.monetate.net/site_media/static/inspector/install.html](https://marketer.monetate.net/site_media/static/inspector/install.html)** e trascina il bottone con scritto “Inspector” nella tua barra dei preferiti. *Per far funzionare l’inspector devi aver effettuato l’accesso all’account di Monetate.*

Le due features fondamentali da utilizzare sono: Track e Components.

## La tab Track:

Per monetate un **“Track”** corrisponde al momento in cui il nostro sito web fa una chiamata a monetate e gli passa alcune informazioni rilevanti per le nostre analisi.

La tab **Track** quindi contiene tutti i dettagli di informazioni che sono state passate a monetate in quel momento e che vengono utilizzate dal tool. Vengono riportati ad esempio gli eventi attivi, i target selezionati, le informazioni relative alla pagina come ad esempio il pageType, la lista dei prodotti visibili, i prodotti che l’utente ha attualmente in cart etc.

![La tab track](/images/monetate-inspector-1.png)

Ogni volta che queste informazioni in pagina cambiano bisogna ricomunicarle a monetate attraverso un **RETRACK**. 
In gran parte dei casi i **retrack** vengono effettuati quando parte una richiesta AJAX che aggiorna la pagina in maniera asincrona senza effettuare un refresh della stessa.

Abbiamo bisogno di scatenare un **retrack** quando ad esempio l’utente effettua un click al “load more” dei prodotti in una PLP, oppure quando aggiunge un prodotto al carrello o ne cambia la sua quantità, oppure quando in una SPA cambia la tipologia di pagina come ad esempio da cart a checkout.

Nell’inspector di monetate è possibile verificare i cambiamenti di informazioni tra un track e l’altro selezionandoli dal dropdown presente in alto.

![Dropdown track](/images/monetate-inspector-2.png)

## La tab Components:

Nella tab **Components** sono visualizzabili tutte le **actions**, gli **events** e le **maschere** che sono presenti in quel momento in pagina

### Le Actions

Cliccando su **Actions** viene mostrata una tabella che include tutte le actions (le esperienze di monetate) che sono in esecuzione sulla pagina in quel momento.
La tabella è composta dall’ID cliccabile della action che linka direttamente all’esperienza su monetate, dal Name che corrisponde alla tipologia della action (es. targetCokie, insertJS…) e dagli Arguments che solitamente mostrano una preview di quello che è compreso nell’esperienza.

![Tab components](/images/monetate-inspector-3.png)

### Gli Events

Cliccando su **Events** è possibile visualizzare la tabella di tutti gli eventi che monetate si aspetta di tracciare in quella specifica pagina.
In questa tabella troviamo l’ID dell’evento cliccabile che linka direttamente all’evento creato sulla piattaforma di monetate, il nome dell’evento stesso, gli argomenti, ovvero cosa traccia quell’evento. La colonna più importante è quella relativa allo Status che indica quale evento è stato già tracciato e quale invece è ancora in attesa.

![Tab events](/images/monetate-inspector-4.png)

### Le Maschere

Cliccando su Content Masks si accede alla tabella che mostra tutte le maschere di contenuto presenti su quella pagina.

La tabella è composta dall’ID cliccabile della maschera che linka alla pagina di modifica della maschera presente su monetate, il nome che corrisponde solitamente all’elemento che si sta mascherando, il timeout della maschera e il CSS che è stato inserito e viene eseguito.

![tab maschere](/images/monetate-inspector-5.png)

Monetate Inspector funziona solo dopo aver effettuato l’accesso all’account di Monetate.
Puoi utilizzarlo solo sui domini su cui sono attivi i permessi legati all’account con cui effettui il login