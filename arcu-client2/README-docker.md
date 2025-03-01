# Istruzioni Docker per Arcu de Chelu

Questa guida contiene tutte le istruzioni per la configurazione e l'utilizzo dell'applicazione Arcu de Chelu con Docker.

## Requisiti

- Docker Engine
- Docker Compose
- Git (per clonare il repository)

## Setup Iniziale

1. Clonare il repository:
   ```bash
   git clone <URL-del-repository>
   cd arcu-client2
   ```

2. Preparare le immagini:
   - Assicurarsi che tutte le immagini siano presenti nella cartella `public/images` e relative sottocartelle.
   - Eseguire lo script di rinominazione immagini per evitare problemi con spazi e caratteri speciali:
     ```
     # In Windows PowerShell:
     .\rename-images.ps1
     ```

3. Costruire l'immagine Docker e avviare i container:
   ```bash
   docker-compose build
   docker-compose up -d
   ```

4. L'applicazione sarà disponibile all'indirizzo [http://localhost:3000](http://localhost:3000).

## Troubleshooting

### Problema: Immagini non visibili sul sito

1. **Verificare la struttura delle directory**:
   Assicurarsi che la struttura delle directory sia corretta:
   ```
   public/
   └── images/
       ├── gallery/
       ├── arcu_de_chelu/
       ├── canne_al_vento/
       └── modolo/
   ```

2. **Rinominare i file problematici**:
   Utilizzare lo script fornito per rinominare file con spazi o caratteri speciali:
   ```
   # In Windows PowerShell:
   .\rename-images.ps1
   ```

3. **Aggiornare i riferimenti nel codice**:
   - Se dopo aver rinominato le immagini ancora non sono visibili, potrebbe essere necessario aggiornare i riferimenti nel codice.
   - I file principali da controllare sono `app/page.tsx` e altri componenti che potrebbero referenziare le immagini.
   - Ad esempio, se un'immagine era chiamata `1665427737133 (1).jpeg` e ora è `1665427737133_1.jpeg`, occorre aggiornare tutti i riferimenti.

4. **Problemi di permessi**:
   - In caso di errori relativi alla cache delle immagini, ricostruire il container:
     ```bash
     docker-compose down
     docker-compose build --no-cache
     docker-compose up -d
     ```

5. **Verificare i file direttamente nel container**:
   ```bash
   docker exec -it arcu-client2 ls -la /app/public/images
   ```

6. **Copiare manualmente i file nel container** (se necessario):
   ```bash
   docker cp public/images/. arcu-client2:/app/public/images/
   ```

### Problema: Errori di risposta per le immagini

Se vedi errori come `upstream image response failed` o `The requested resource isn't a valid image`:

1. **Controlla i log del container**:
   ```bash
   docker logs arcu-client2
   ```

2. **Verifica la configurazione Next.js**:
   - Assicurati che `next.config.js` utilizzi `remotePatterns` invece di `domains`:
     ```js
     images: {
       remotePatterns: [
         {
           protocol: 'https',
           hostname: 'images.unsplash.com',
           pathname: '**',
         },
       ],
     },
     ```

3. **Assicurati che il pacchetto sharp sia installato**:
   Il pacchetto `sharp` è necessario per l'ottimizzazione delle immagini in produzione.
   È già incluso nel Dockerfile, ma se hai personalizzato l'immagine, assicurati che sia presente.

## Comandi Utili

### Gestione del Container

- **Avviare i container**:
  ```bash
  docker-compose up -d
  ```

- **Fermare i container**:
  ```bash
  docker-compose down
  ```

- **Visualizzare i log**:
  ```bash
  docker-compose logs -f
  ```

- **Accedere al container**:
  ```bash
  docker exec -it arcu-client2 /bin/sh
  ```

### Aggiornamenti

Per aggiornare l'applicazione con nuove modifiche:

1. Ottenere le ultime modifiche dal repository:
   ```bash
   git pull
   ```

2. Ricostruire e riavviare i container:
   ```bash
   docker-compose down
   docker-compose build
   docker-compose up -d
   ```

## Supporto

Per qualsiasi problema o domanda, contattare il team di supporto. 