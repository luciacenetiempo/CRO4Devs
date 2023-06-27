# Il target

## WHO?

Per monetate una experience viene eseguita quando l’utente risponde a due criteri: **il WHO e le condition legate alle actions.**

![Audience](/images/monetate-target-audience.png)

# Il target

**Nella sezione WHO viene definito il target specifico a cui verrà mostrato l'esperimento.**
Il target può essere personalizzato in base a condizioni specifiche come dispositivo, prodotti in pagina, parametri URL o azioni compiute in precedenza.

## Le tipologie di target di Monetate

Monetate permette di associare alle experiences diverse tipologie di target
Quelli più interessanti sono:

![Target Panel](/images/monetate-target-panel.png)

### **Target Landing:**

segmenta gli utenti sulla base di condizioni di atterraggio in pagina.
Es: utenti che arrivano con parametro testid=nomeTest usato per la creazione delle preview

### **Target Location:**

segmenta gli utenti sulla base della geolocalizzazione.
Es: utenti che si connettono dagli Stati Uniti

### **Target Technografic:**

segmenta gli utenti sulla base di aspetti tecnologici come ad esempio il device.
Es: utenti che visitano il sito da Chrome su device mobile

### **Target Named Segment:**

rappresenta una combinazione di target create con l'utilizzo degli operatori AND e OR.
Es: ad esempio Location = US AND Technografic = Mobile

### **Target Custom:**

segmentano gli utenti sulla base di condizioni specifiche dettate da noi.
Es: utenti che hanno cliccato su un bottone specifico

## Le tipologie di Custom Target

### Cookie

Segmenta gli utenti sulla base di un cookie, è possibile verificare l’esistenza del cookie o il suo valore.
Viene utilizzato per creare target persistenti nel tempo.
Potrebbe essere necessario codice di supporto nell'experience di test
**Formato del nome per Monetate:**
*User with cookie - Nome del cookie - Valore (es. User with cookie - EarlyAccess - true)*

### Javascript Variable

Segmenta gli utenti sulla base dell'esistenza o il valore di una variabile window.nome
Viene utilizzato per creare target di sessione dopo che l'utente ha compiuto un'azione specifica.
Potrebbe essere necessario codice di supporto nell'experience di test
**Formato del nome per Monetate:**
*User who - Tipologia Azione (es. User who - Click on RX CTA)*

### HTML Element

Segmenta gli utenti sulla base di un elemento HTML in pagina, ne verifica l'esistenza o il suo contenuto.
Viene utilizzato per essere certi della presenza di un dato elemento in pagina.
**Formato del nome per Monetate:**
*User who see - Tipologia Azione (es. User who see - Hero banner)*

### Query Parameter

Segmenta gli utenti per un parametro URL scelto di cui è possibile verificare l’esistenza o il suo valore
Viene utilizzato per creare target legati a campagne specifiche. Es. performance
**Formato del nome per Monetate:**
*User with parameter - Parametro (es. User with parameter - pdpbadge)*