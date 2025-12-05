# 🚀 Deploy Definitivo su Cloudflare Pages

## ✅ CONFIGURAZIONE FINALE (Semplice e Funzionante)

### Build Settings

```
Framework preset: Next.js
Build command: npm run build:sito2
Build output directory: out
Root directory: (vuoto)
```

### Environment Variables

```
NEXT_PUBLIC_SITE = sito2
NODE_VERSION = 20
```

---

## 📝 Passi Deployment

### 1. Commit e Push
```bash
git add .
git commit -m "fix: Remove yarn and cloudflare adapter for standard npm build"
git push
```

### 2. Configurazione Cloudflare

**Settings → Builds & deployments → Configure build**

- Build command: `npm run build:sito2`
- Build output: `out`
- Framework: Next.js

**Environment variables**:
- `NEXT_PUBLIC_SITE` = `sito2`
- `NODE_VERSION` = `20`

### 3. Deploy

**Retry deployment**

---

## 🎯 Per tutti e 3 i siti

| Sito | Progetto | Build Command | NEXT_PUBLIC_SITE |
|------|----------|---------------|------------------|
| Arcu de Chelu | arcudechelu | `npm run build:arcudechelu` | arcudechelu |
| Casa Menica | casamenica | `npm run build:sito2` | sito2 |
| Casa Sisina | casasisina | `npm run build:sito3` | sito3 |

**Tutti usano**:
- Output: `out`
- NODE_VERSION: `20`
- Package manager: npm (automatico)

---

## ✨ Come Funziona

1. Next.js genera HTML statico in `out/`
2. Cloudflare Pages serve i file statici
3. Nessun adapter o configurazione complessa necessaria
4. Deploy super veloci e affidabili

---

## 🔧 Note

- ✅ Rimosso `@cloudflare/next-on-pages` (deprecated e problematico)
- ✅ Rimosso `yarn.lock` (usa solo npm)
- ✅ `next.config.js` già configurato con `output: 'export'`
- ✅ Immagini configurate con `unoptimized: true`
