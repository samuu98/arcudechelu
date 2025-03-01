# Dockerfile per Arcu de Chelu B&B Next.js Application
# Stage 1: Dipendenze e build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm ci

# Copia i file del progetto
COPY . .

# Compila l'applicazione
RUN npm run build

# Stage 2: Runtime (immagine più piccola)
FROM node:18-alpine AS runner

WORKDIR /app

# Variabili d'ambiente
ENV NODE_ENV=production

# Copia i file necessari dall'immagine precedente
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Esponi la porta su cui funzionerà l'applicazione
EXPOSE 3000

# Imposta l'utente non-root per maggiore sicurezza
USER node

# Comando di avvio
CMD ["npm", "start"] 