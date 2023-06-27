# Le Actions

Nella sezione WHAT di Monetate troviamo le actions che costituiscono il core dell’esperimento.

![Monetate Actions 1](/images/monetate-actions-1.png)

Esistono molte tipologie di actions. Nel dettaglio le più importanti sono:

### Data Collect

una action vuota, senza codici, utilizzata al solo scopo di collezionare dati per analisi.

### HTML

permette di modificare una porzione del codice HTML del sito utilizzando un editor visuale.

### CSS

permette di iniettare sul sito CSS puro, che viene wrappato in un tag <style> autogenerato.

### Javascript

permette l'esecuzione sul sito di codice Javascript utilizzato per manipolare il DOM.

## Il CSS in Monetate

![Monetate Actions 2](/images/monetate-actions-2.png)

l codice CSS deve essere scritto in maniera pura e verrà poi automaticamente racchiuso da Monetate in un tag <style> e inserito inline nel dom.
Non è possibile inserire il codice scritto in SCSS o Less, ma va inserita direttamente la versione compilata.

Per ogni esperimento, valutare sempre se è fattibile con l’utilizzo di solo CSS evitando l’utilizzo di JS.

## Javascript in Monetate

Per limitare gli errori di sovrascrittura del codice è importante racchiudere il codice in una IIFE (Immediately Invoked Function Expression) per renderlo anonimo.

```jsx
(
  () => {
    let firstVar = 1;
    let secondVar = 3;

    alert(firstVar + secondVar)
  }
)();
```

Per operazioni più complesse, è preferibile utilizzare una logica modulare con il Module Pattern JS, così da poter richiamare singolarmente ogni metodo della funzione stessa.

```jsx
let module = (
  function(){
    let privateMethod = () => {
      alert('triggered private method');
    }
    return {
      init: privateMethod
    }
  }
)();

module.init();
```

Fare sempre molta attenzione ai nomi di variabili e di funzioni scelti. Verificare sempre che non vadano in contrasto con codice pregresso per evitare errori.

**Nei layout HTML creati in JS in monetate, sugli elementi cliccabili VA SEMPRE messo il data-element-id per consentire al team di Analytics di tracciare i dati correttamente.**

### Only run once?

![Monetate Actions 3](/images/monetate-actions-3.png)

Su Monetate è possibile definire se il codice deve essere eseguito una sola volta, al primo track o per ogni retrack in pagina.
Se il codice non dipende da un retrack, è importante impostare il flag "Only run once" su YES per evitare esecuzioni continue che potrebbero causare errori.

Se il codice deve essere eseguito dopo un retrack, il flag "Only run once" deve essere su NO per consentire l'esecuzione ripetuta.