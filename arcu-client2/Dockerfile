# Dockerfile per Arcu de Chelu B&B Next.js Application
# Stage 1: Dipendenze e build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Installa TUTTE le dipendenze, incluse quelle di sviluppo necessarie per il build
RUN npm install

# Copia i file del progetto
COPY . .

# Compila l'applicazione (output standalone)
RUN npm run build

# Stage 2: Runtime (immagine minimale)
FROM alpine:3.18 AS runner

# Installa Node.js minimale
RUN apk add --no-cache nodejs ca-certificates

WORKDIR /app

# Copia solo la build ottimizzata standalone e le risorse necessarie
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Imposta variabili di ambiente
ENV NODE_ENV=production
ENV PORT=3000

# Esponi la porta
EXPOSE 3000

# Comando di avvio (il server.js è generato dall'output standalone)
CMD ["node", "server.js"] 