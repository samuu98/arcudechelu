# 🚀 Configurazione Cloudflare Pages - AGGIORNATA

## ⚠️ CONFIGURAZIONE CORRETTA

### Build Settings (IMPORTANTE!)
```
Framework preset: Next.js
Build command: npx @cloudflare/next-on-pages
Build output directory: .vercel/output/static
Root directory: (lascia vuoto)
```

### Environment Variables (CRITICHE!)

**Per tutti i siti, aggiungi SEMPRE**:
```
NODE_VERSION = 20.18.0
```

**Poi aggiungi la variabile specifica del sito**:

#### Casa Menica (sito2)
```
NEXT_PUBLIC_SITE = sito2
```

#### Casa Sisina (sito3)  
```
NEXT_PUBLIC_SITE = sito3
```

#### Arcu de Chelu
```
NEXT_PUBLIC_SITE = arcudechelu
```

---

## 📝 Passi Deployment

### 1. Commit e Push
```bash
git add .
git commit -m "fix: Remove packageManager for Cloudflare compatibility"
git push
```

### 2. Cloudflare Pages Setup
1. Dashboard → Workers & Pages → Create → Pages
2. Connect to Git → Seleziona repository
3. Project name: `casamenica` (o altro)
4. Build command: `npx @cloudflare/next-on-pages`
5. Build output: `.vercel/output/static`

### 3. Environment Variables
Ve su **Settings → Environment Variables** e aggiungi:
- `NODE_VERSION` = `20.18.0` ✅ IMPORTANTE!
- `NEXT_PUBLIC_SITE` = `sito2` (o quello specifico)

### 4. Deploy
Click **Save and Deploy**

---

## ✅ Checklist Pre-Deploy

- [ ] `packageManager` rimosso da package.json
- [ ] Codice pushato su Git  
- [ ] `NODE_VERSION=20.18.0` impostato
- [ ] `NEXT_PUBLIC_SITE` impostato correttamente
- [ ] Build command: `npx @cloudflare/next-on-pages`
- [ ] Output directory: `.vercel/output/static`

---

## 🔧 Troubleshooting

**Errore "No Next.js version detected"**:
- Assicurati che `next` sia in `dependencies` nel package.json ✅
- Rimuovi `packageManager` da package.json ✅

**Engine warnings**:
- Usa `NODE_VERSION=20.18.0` o superiore ✅

**Build cache errors**:
- Normale con l'adapter, verrà gestito automaticamente ✅
