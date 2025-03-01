# Arcu de Chelu - B&B Website

Questo è il sito web del B&B "Arcu de Chelu", realizzato con Next.js e Tailwind CSS. Il sito presenta una pagina moderna ed elegante che mostra tutte le caratteristiche del B&B.

## Funzionalità

- Design moderno e responsive
- Sezioni per camere, servizi, galleria e contatti
- Layout ottimizzato per dispositivi mobile e desktop
- Animazioni fluide ed effetti visivi
- Form di contatto integrato

## Tecnologie Utilizzate

- Next.js 14
- React 18
- Tailwind CSS
- Shadcn UI Components
- TypeScript

## Requisiti

- Node.js 18.x o superiore
- NPM o Yarn

## Come Iniziare

1. Clona il repository:
   ```bash
   git clone <repository-url>
   cd arcu-de-chelu-bnb
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   # oppure
   yarn install
   ```

3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   # oppure
   yarn dev
   ```

4. Apri [http://localhost:3000](http://localhost:3000) nel tuo browser per visualizzare il sito.

## Struttura del Progetto

- `/app` - Contiene le pagine dell'applicazione Next.js
- `/components` - Componenti riutilizzabili
- `/public` - File statici (immagini, font, ecc.)
- `/lib` - Utility e helpers

## Personalizzazioni

- Modifica il contenuto nel file `app/page.tsx`
- Aggiorna le immagini nella cartella `public/images`
- Modifica i colori e il tema in `tailwind.config.js`

## Deploy

Il sito può essere facilmente deployato su Vercel:

```bash
npm run build
# oppure
yarn build
```

## Note Aggiuntive

Assicurati di avere le immagini necessarie nella cartella `/public/images`, in particolare l'immagine hero.jpg che viene utilizzata nello sfondo della sezione principale. 