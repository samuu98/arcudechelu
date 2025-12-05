# 🚀 Deploy Casa Menica su Cloudflare Pages

## Configurazione Build

Quando crei il progetto su Cloudflare Pages, usa queste impostazioni:

### Build Settings
```
Framework preset: Next.js
Build command: npx @cloudflare/next-on-pages
Build output directory: .vercel/output/static
Root directory: (lascia vuoto)
```

### Environment Variables
Aggiungi nelle impostazioni del progetto:
```
NEXT_PUBLIC_SITE = sito2
NODE_VERSION = 18
```

### Deployment
1. Vai su Cloudflare Dashboard
2. Workers & Pages → Create application → Pages
3. Connect to Git → Seleziona questo repository
4. Usa le impostazioni sopra
5. Deploy!

Il sito sarà disponibile su: `casamenica.pages.dev`

## Domini Personalizzati
Per aggiungere un dominio custom:
1. Vai nel progetto → Custom domains
2. Add custom domain
3. Segui le istruzioni per configurare i DNS

## Note
- Ogni push su Git triggera un rebuild automatico
- Preview deployments sono disponibili per ogni branch
- Puoi fare rollback a versioni precedenti in qualsiasi momento
