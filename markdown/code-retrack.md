# Code - Retrack

## Metodo fornito da Monetate 

```jsx
window.monetateQ = window.monetateQ || []; 

let pageType = 'product'; // inserisci il page type corretto corrispondente alla opagina

window.monetateQ.push(
 ['setPageType', pageType]
);

window.monetateQ.push(
 ['trackData']
);
```

## Nuovo metodo per il retrack

```jsx
MonetateHelper.reTrack();
```

Valido solo su:

- Contacts Direct
- Costa Del Mar
- David Clulow
- Oakley
- OakleySI
- Salmoiraghi & Viganò

### Naming delle Experiences

**Nome:** RETRACK | Nome del test - CODICE

**Tag:** retrack