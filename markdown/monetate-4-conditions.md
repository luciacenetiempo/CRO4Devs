# Le conditions

Le condizioni sono fondamentali nella **definizione dell'audience degli esperimenti.**

Servono a stabilire i limiti dell'audience dei test. È fondamentale escludere dagli utenti conteggiati coloro che non possono effettivamente visualizzare la modifica, al fine di **ottenere dati accurati**.

Esistono diverse tipologie di condizioni applicabili sia alle action che agli eventi, che **possono essere combinate tra loro utilizzando gli operatori AND e OR**.
Tra le condizioni più utilizzate troviamo Page Type e URL.

## ESEMPIO dell'importanza delle condizioni:

**Immagina un esperimento per misurare l’efficacia del cambio colore dell’Add to bag in PDP.**

### Senza conditions:

catturiamo le sessioni di tutto il sito es. 10.000 utenti di cui solo 1000 sono passati da una PDP.
dei 1000 utenti che hanno visualizzato una PDP solo 50 hanno cliccato sul bottone triggerando così l’evento.

**Risultato:**

nell’analisi dei dati di questo esperimento otterremo:
0,5% di click sul bottone ovvero 50/10.0000

### Con conditions:

con la condition pageType = product catturiamo solo le sessioni degli utenti che visualizzano una PDP es. 1000.
dei 1000 utenti che hanno visualizzato una PDP solo 50 hanno cliccato sul bottone triggerando così l’evento

**Risultato:**

nell’analisi dei dati di questo esperimento otterremo:
5% di click sul bottone ovvero 50/1000

![Monetate Conditions](/images/monetate-conditions.png)

## Importante:

Va sempre inserita una conditions una basata sulla URL per limitare i domini su cui viene eseguito l'esperimento.
**Le action devono avere le STESSE CONDIZIONI per mantenere la audience omogenea.**