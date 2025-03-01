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

### Immagini mancanti nel sito

Se le immagini non sono visibili dopo il deploy Docker, segui questi passaggi:

1. **Verifica la struttura delle directory**:
   Assicurati che le immagini siano nella directory corretta sul sistema host:
   ```
   public/
   └── images/
       ├── gallery/
       ├── canne_al_vento/
       ├── arcu_de_chelu/
       └── modolo/
   ```

2. **Copia manualmente le immagini** (per Windows):
   ```
   # Crea le directory necessarie
   mkdir -p public\images\gallery
   mkdir -p public\images\canne_al_vento
   mkdir -p public\images\arcu_de_chelu
   mkdir -p public\images\modolo

   # Copia le immagini (modifica i percorsi in base alla tua configurazione)
   copy /Y original_images\gallery\* public\images\gallery\
   copy /Y original_images\canne_al_vento\* public\images\canne_al_vento\
   copy /Y original_images\arcu_de_chelu\* public\images\arcu_de_chelu\
   copy /Y original_images\modolo\* public\images\modolo\
   ```

3. **Ricostruisci il container**:
   ```bash
   docker-compose down
   docker-compose build --no-cache
   docker-compose up -d
   ```

4. **Modifica direttamente nel container**:
   Se necessario, puoi copiare le immagini direttamente nel container in esecuzione:
   ```bash
   # Per copiare una directory di immagini nel container
   docker cp ./public/images/gallery/. arcu-client:/app/public/images/gallery/
   ```

### Problemi di permessi

Se riscontri problemi di permessi con il volume delle immagini:

```bash
# Questo comando può risolvere problemi di permessi (per Linux/macOS)
chmod -R 755 ./public/images
```

In Windows, assicurati che le directory siano accessibili a tutti gli utenti o usa PowerShell per impostare i permessi corretti.

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