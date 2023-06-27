# I custom events

## WHY?

Nella sezione WHY oltre a poter definire il tipo di esperienza tra Split Test, Dynamic Test, Automated Personalization o experience al 100%, possiamo identificare e selezionare **le metriche da tracciare** per valutare se il test conferma l'ipotesi formulata dal team CRO.

## I custom events e le metriche custom.

Gli **Events** sono le azioni o gli eventi specifici che osserviamo in un esperimento e che ci indicheranno la sua efficacia. Vengono anche chiamati **Metriche Custom.**

Gli eventi vanno creati attraverso l'Event Builder di Monetate che si trova come voce secondaria nella sezione "**COMPONENTS**".
È possibile creare l'evento custom desiderato facendo clic sul pulsante "Create Event" in alto a destra.
Nella pagina dell'**Event Builder,** troviamo una tabella con il nome, la tipologia, la data di creazione e l'utilizzo attuale di ogni evento creato in passato.

![Event Builder](/images/monetate-events.png)

Le tipologie di evento che è possibile creare:

### Interaction

I custom event interaction sono gli eventi che vengono triggerati da una specifica interazione degli utenti.
**Esempio:** Click, Form Submit, Exit Link e Generico JS ad es:  onchange, onmouseover.
**Formato del nome per Monetate:** 
Interazione - Tipo Elemento - Nome dell'elemento (es. Click - CTA - Nome della cta)

### Page URL

I custom event Page URL sono utili a tracciare quando l’utente visita una specifica pagina o un set di pagine. Potrebbe esserere necessaria qualche azione nel codice dell’experience.
**Esempio:** Quando l'utente atterra su una URL che contiene la parola “product” .
**Formato del nome per Monetate:** 
Page View - Nome pagina (es. Page View - PDP Sunglasses)

### Impression

I custom event Impression sono tracciati quando l’utente viene “esposto” ad una condizione anche se non vi ha interagito. Potrebbe esserere necessaria qualche azione nel codice dell’experience.
**Esempio:** Quando è verificata l’esistenza di un cookie o una variabile.
**Formato del nome per Monetate:** 
Impression - Nome elemento (es. Page View - PDP Sunglasses)

### API

I custom event API sono eventi “liberi” utilizzati per tracciare azioni differenti da quelle viste fino ad ora. Questi eventi vengono scatenati attraverso un push con codice Javascript.
**Esempio:** Quando in fase di checkout un promo-code viene correttamente applicato.
**Formato del nome per Monetate:** 
Nome evento - Tipo di azione (es. Swipe  - Carousel - Nome carousel)

L’**evento API** è composto dalla Event Key che è la chiave univoca dell’evento, viene scelta in fase di creazione dell'evento e non è modificabile in seguito. 

Questa chiave servirà per effettuare il push all’evento in Javascript.

### Il push all'evento

Nella experience in cui vogliamo andare a tracciare l’evento API servirà questo codice per effettuare il push al compimento di una azione:

```jsx
window.monetateQ = window.monetateQ || [];
window.monetateQ.push(
       ["trackEvent",["EventKey"]]
);
```

**Se tracciamo un'interazione su elementi aggiunti da noi in pagina valutiamo sempre se l'evento API è più adatto alla nostra esigenza rispetto a quello di interaction.**