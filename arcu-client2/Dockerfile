# Dockerfile per Arcu de Chelu B&B Next.js Application
# Stage 1: Dipendenze e build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze e sharp per l'ottimizzazione delle immagini
RUN npm install && npm install sharp

# Copia i file del progetto
COPY . .

# Assicurati che le directory delle immagini esistano e abbiano i permessi corretti
RUN mkdir -p public/images/gallery \
    public/images/canne_al_vento \
    public/images/arcu_de_chelu \
    public/images/modolo \
    && chmod -R 755 public

# Compila l'applicazione
RUN npm run build

# Stage 2: Runtime (immagine più piccola)
FROM node:18-alpine AS runner

WORKDIR /app

# Variabili d'ambiente
ENV NODE_ENV=production

# Installa wget per il healthcheck e sharp per l'ottimizzazione delle immagini
RUN apk add --no-cache wget

# Crea directory per le immagini con permessi corretti
RUN mkdir -p public/images && chmod -R 755 public

# Crea la directory per la cache delle immagini e assegna i permessi corretti
RUN mkdir -p .next/cache/images && \
    chmod -R 777 .next

# Copia i file necessari dall'immagine precedente
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Assicurati che i permessi siano corretti dopo la copia
RUN chmod -R 777 public/images && \
    chmod -R 777 .next/cache

# Esponi la porta su cui funzionerà l'applicazione
EXPOSE 3000

# Imposta l'utente non-root per maggiore sicurezza
USER node

# Comando di avvio
CMD ["npm", "start"] 