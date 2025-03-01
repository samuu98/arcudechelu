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

3. **Problemi di permessi**:
   - In caso di errori relativi alla cache delle immagini, ricostruire il container:
     ```bash
     docker-compose down
     docker-compose build --no-cache
     docker-compose up -d
     ```

4. **Verificare i file direttamente nel container**:
   ```bash
   docker exec -it arcu-client2 ls -la /app/public/images
   ```

5. **Copiare manualmente i file nel container** (se necessario):
   ```bash
   docker cp public/images/. arcu-client2:/app/public/images/
   ```

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