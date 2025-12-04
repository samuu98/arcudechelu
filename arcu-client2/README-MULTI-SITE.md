# Template Multi-Sito - Guida Rapida

Questa applicazione è stata trasformata in un **template multi-sito** che permette di gestire più siti con la stessa codebase.

## Come Funziona

Ogni sito è definito da un file di configurazione in `config/`:
- `config/arcudechelu.ts` - Configurazione per Arcu de Chelu (già completa)
- `config/sito2.ts` - Template per il secondo sito 
- `config/sito3.ts` - Template per il terzo sito

## Come Selezionare il Sito Attivo

Il sito attivo viene selezionato tramite la variabile d'ambiente `NEXT_PUBLIC_SITE`.

### Durante lo Sviluppo

```bash
# Opzione 1: Script npm pre-configurati
npm run dev:arcudechelu   # Avvia Arcu de Chelu
npm run dev:sito2         # Avvia Sito 2
npm run dev:sito3         # Avvia Sito 3

# Opzione 2: Impostare manualmente la variabile
$env:NEXT_PUBLIC_SITE="arcudechelu"
npm run dev
```

### Per il Build di Produzione

```bash
# Build di un singolo sito
npm run build:arcudechelu
npm run build:sito2
npm run build:sito3

# Build di tutti i siti
npm run build:all
```

## Personalizzare un Nuovo Sito

1. **Apri** il file di configurazione (`config/sito2.ts` o `config/sito3.ts`)

2. **Modifica** le seguenti sezioni:
   - `name`: Nome del sito
   - `domain`: Dominio
   - `description`: Descrizione
   - `contact`: Dati di contatto (email, telefono, indirizzo)
   - `booking.urlPattern`: URL di prenotazione
   - `rooms`: Configurazione camere
   - `reviews`: Recensioni
   - `images`: Path delle immagini
   - `heroImage`: Immagine hero
   - `theme.colors`: Colori (opzionale)

3. **Aggiungi le immagini** nella cartella corrispondente:
   ```
   public/images/sito2/
   ├── hero.jpg
   ├── gallery/
   └── rooms/
   ```

4. **Crea le traduzioni** in `locales/sito2/` copiando la struttura da `locales/arcudechelu/`

## Struttura File

```
config/
├── types.ts           # Definizione tipi TypeScript
├── index.ts           # Sistema di selezione sito
├── arcudechelu.ts     # Configurazione Arcu de Chelu
├── sito2.ts           # Configurazione Sito 2
└── sito3.ts           # Configurazione Sito 3

public/images/
├── arcudechelu/       # Immagini Arcu de Chelu
├── sito2/             # Immagini Sito 2
└── sito3/             # Immagini Sito 3

locales/
├── arcudechelu/       # Traduzioni Arcu de Chelu 
├── sito2/             # Traduzioni Sito 2
└── sito3/             # Traduzioni Sito 3
```

## Componenti Aggiornati

I seguenti componenti leggono automaticamente da `siteConfig`:
- ✅ `Hero.tsx` - Immagine hero e URL prenotazione
- ✅ `ContactSection.tsx` - Email, telefono, indirizzo
- ✅ `AboutSection.tsx` - Features e immagini Modolo
- ⏳ `RoomsSection.tsx` - Configurazione camere (TODO)
- ⏳ `GallerySection.tsx` - Immagini gallery (TODO)
- ⏳ `ReviewsSection.tsx` - Recensioni (TODO)

## TODO - Prossimi Passi

1. **Completare aggiornamento componenti**:
   - [ ] `RoomsSection.tsx` 
   - [ ] `Room Card.tsx`
   - [ ] `GallerySection.tsx`
   - [ ] `ReviewsSection.tsx`

2. **Sistema di localizzazione**:
   - [ ] Riorganizzare `locales/` per sito
   - [ ] Aggiornare `locales/index.js` per caricare traduzioni per sito

3. **Gestione immagini**:
   - [ ] Creare script per riorganizzare immagini esistenti
   - [ ] Aggiornare path immagini in `config/arcudechelu.ts`

4. **Testing**:
   - [ ] Test switch tra siti
   - [ ] Test build produzione
   - [ ] Verifica traduzioni

## Note Importanti

- I file sito2.ts e sito3.ts contengono valori **placeholder** da personalizzare
- Ogni sito può avere lingue diverse modificando `languages` nella configurazione
- I colori del tema sono configurabili per ogni sito
- Le immagini devono essere organizzate per sito in `public/images/{nome-sito}/`
