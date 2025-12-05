# Casa Menica - Configurazione Completata

## ✅ Configurazione Creata

### File Configurazione
- **`config/sito2.ts`** - Configurazione completa di Casa Menica

### Caratteristiche Configurate
- **Nome**: Casa Menica
- **Località**: Lido di Savio, Ravenna (RA)
- **Capacità**: 5 posti letto
- **Camere**: 2 camere da letto separate
- **Bagni**: 2 bagni
- **Balconi**: 2 balconi
- **Cucina**: Cucina completa attrezzata
- **Climatizzazione**: 2 condizionatori
- **Parcheggio**: Posto auto riservato
- **Wi-Fi**: Gratuito
- **Posizione**: Vicino a Mirabilandia e al mare

### Traduzioni Create
Traduzioni complete per tutte le 5 lingue in `locales/sito2/`:
- ✅ **it.js** - Italiano
- ✅ **en.js** - English
- ✅ **es.js** - Español
- ✅ **de.js** - Deutsch
- ✅ **fr.js** - Français

---

## ⏳ Da Completare

### 1. Link di Prenotazione
**File da modificare**: `config/sito2.ts` linea 53

Sostituire:
```typescript
booking: {
    urlPattern: "https://INSERIRE_LINK_PRENOTAZIONE/{language}",
},
```

Con il link reale fornito dall'utente.

---

### 2. Immagini
Creare le seguenti cartelle e aggiungere le immagini:

```
public/images/sito2/
├── hero.jpg                    # Immagine hero principale
├── gallery/                    # Immagini per la galleria
│   ├── image1.jpg
│   ├── image2.jpg
│   └── ...
└── rooms/
    └── appartamento/           # Immagini dell'appartamento
        ├── image1.jpg
        ├── image2.jpg
        └── ...
```

Poi aggiornare i path in `config/sito2.ts` (linee 118-128).

---

### 3. Logo/Simbolo
L'utente fornirà il simbolo/logo da usare.
Salvarlo in `public/images/sito2/logo.png` (o il formato fornito).

---

### 4. Informazioni di Contatto Reali
**File da modificare**: `config/sito2.ts` linee 46-52

Aggiornare con i dati reali:
- Email
- Telefono
- Numero WhatsApp
- Indirizzo esatto

---

## 🚀 Come Testare

```bash
# Avviare Casa Menica in sviluppo
npm run dev:sito2

# Oppure impostare manualmente
$env:NEXT_PUBLIC_SITE="sito2"
npm run dev
```

Il sito sarà disponibile su http://localhost:3000

---

## 📋 Checklist Completamento

- [x] Configurazione base creata
- [x] Features e caratteristiche configurate
- [x] Traduzioni per 5 lingue
- [ ] Link di prenotazione reale
- [ ] Immagini caricate
- [ ] Logo/simbolo inserito
- [ ] Contatti reali aggiornati
- [ ] Calendar ID se disponibile (opzionale)

---

## 🎯 Prossimi Passi

1. Fornire il **link di prenotazione**
2. Fornire il **simbolo/logo**
3. Caricare le **immagini** dell'appartamento
4. Aggiornare i **contatti reali** (email, telefono, WhatsApp)
5. Testare il sito con `npm run dev:sito2`
