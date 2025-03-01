# Arcu de Chelu B&B - Guida Docker

Questo documento spiega come utilizzare Docker per compilare ed eseguire l'applicazione Arcu de Chelu B&B.

## Requisiti

- Docker installato sul sistema
- Docker Compose installato sul sistema

## File inclusi

- `Dockerfile`: Definisce come compilare l'applicazione Next.js
- `docker-compose.yml`: Configura i servizi Docker per l'esecuzione dell'app
- `.dockerignore`: Esclude file non necessari dal contesto di build

## Comandi principali

### Avviare l'applicazione

```bash
docker-compose up -d
```

Questo comando compila l'immagine (se non esiste già) e avvia il container in modalità distaccata (background).
L'applicazione sarà accessibile all'indirizzo http://localhost:3000.

### Fermare l'applicazione

```bash
docker-compose down
```

### Ricompilare l'applicazione

Se hai fatto modifiche al codice e devi ricompilare l'immagine:

```bash
docker-compose build
```

Oppure per ricompilare e riavviare:

```bash
docker-compose up -d --build
```

### Visualizzare i log

```bash
docker-compose logs -f
```

## Struttura

L'immagine Docker utilizza un approccio multi-stage per ottimizzare le dimensioni:

1. **Stage di build**: Installa le dipendenze e compila l'applicazione
2. **Stage di runtime**: Contiene solo i file necessari per l'esecuzione

## Volumi

Il docker-compose monta un volume per rendere persistenti le immagini:

- `./public/images:/app/public/images`: Le immagini caricate rimarranno anche se il container viene eliminato

## Monitoraggio

Il container ha configurato un healthcheck che controlla se l'applicazione è attiva ogni 30 secondi.

## Risoluzione problemi

### L'applicazione non è accessibile

Controlla lo stato del container:

```bash
docker-compose ps
```

Verifica i log per eventuali errori:

```bash
docker-compose logs
```

### Problemi di permessi

Se riscontri problemi di permessi con il volume delle immagini:

```bash
# Questo comando può risolvere problemi di permessi
chmod -R 777 ./public/images
```

### Errore durante il build con npm ci

Il Dockerfile è stato modificato per usare `npm install` invece di `npm ci` poiché il progetto potrebbe non avere un `package-lock.json`. Se preferisci usare `npm ci` per installazioni più consistenti, assicurati di generare prima un package-lock.json:

```bash
# Genera package-lock.json
npm install --package-lock-only
```

### Errore con healthcheck wget

Se riscontri errori relativi a wget nel healthcheck, potrebbe essere necessario installare wget nell'immagine Docker. In questo caso, modifica il Dockerfile aggiungendo:

```dockerfile
# Nel secondo stage (runner)
RUN apk add --no-cache wget
``` 