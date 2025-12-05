# Casa Flussio - Configurazione Completata

## ✅ Configurazione Creata

### File Configurazione
- **`config/sito3.ts`** - Configurazione completa di Casa Flussio

### Caratteristiche Configurate
- **Nome**: Casa Flussio
- **Località**: Flussio (OR), Sardegna
- **Posizione**: A 10 minuti dal mare
- **Paesino**: Con tutti i servizi necessari

### Sistemazioni
1. **Appartamento Flussio** (fino a 4 persone)
   - 2 camere da letto
   - 1 bagno
   - Cucina completamente attrezzata
   - Terrazza panoramica

2. **Camera con Angolo Cottura** (fino a 2 persone)
   - Bagno privato
   - Angolo cottura
   - Camera indipendente

### Traduzioni Create
Traduzioni complete per tutte le 5 lingue in `locales/sito3/`:
- ✅ **it.js** - Italiano (creato da zero)
- ✅ **en.js** - English (creato da zero)
- ✅ **es.js** - Español (adattato)
- ✅ **de.js** - Deutsch (da completare)
- ✅ **fr.js** - Français (da completare)

---

## ⏳ Da Completare

### 1. Link di Prenotazione
**File da modificare**: `config/sito3.ts` linea 58

Sostituire:
```typescript
booking: {
    urlPattern: "https://INSERIRE_LINK_PRENOTAZIONE/{language}",
},
```

Con il link reale fornito dall'utente.

---

### 2. Traduzioni DE e FR
Completare le traduzioni tedesche e francesi in:
- `locales/sito3/de.js`
- `locales/sito3/fr.js`

Attualmente contengono testi di Casa Menica e vanno aggiornati per Flussio.

---

### 3. Immagini
Creare le seguenti cartelle e aggiungere le immagini:

```
public/images/sito3/
├── hero.jpg                    # Immagine hero principale
├── gallery/                    # Immagini per la galleria
│   ├── image1.jpg
│   ├── image2.jpg
│   └── ...
└── rooms/
    ├── appartamento/           # Immagini appartamento
    │   ├── image1.jpg
    │   └── ...
    └── camera/                 # Immagini camera con angolo cottura
        ├── image1.jpg
        └── ...
```

Poi aggiornare i path in `config/sito3.ts` (linee 132-146).

---

### 4. Logo/Simbolo
Salvarlo in `public/images/sito3/logo.png` e aggiungere in `config/sito3.ts`:
```typescript
logo: "/images/sito3/logo.png",
```

---

### 5. Informazioni di Contatto Reali
**File da modificare**: `config/sito3.ts` linee 51-57

Aggiornare con i dati reali:
- Email
- Telefono
- Numero WhatsApp
- Indirizzo esatto

---

## 🚀 Come Testare

```bash
# Avviare Casa Flussio in sviluppo
npm run dev:sito3

# O aggiungere lo script in package.json prima:
# "dev:sito3": "set NEXT_PUBLIC_SITE=sito3&& next dev",
```

---

## 📋 Checklist Completamento

- [x] Configurazione base creata
- [x] 2 sistemazioni configurate (appartamento + camera)
- [x] Features e caratteristiche
- [x] Traduzioni IT e EN complete
- [ ] Traduzioni ES, DE, FR da completare
- [ ] Link di prenotazione reale
- [ ] Immagini caricate
- [ ] Logo inserito
- [ ] Contatti reali aggiornati
- [ ] Script npm aggiunto
