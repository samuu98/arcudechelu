#!/bin/bash
# Script per copiare le immagini in modo corretto prima del build Docker

# Crea le directory necessarie se non esistono
mkdir -p public/images/gallery
mkdir -p public/images/canne_al_vento
mkdir -p public/images/arcu_de_chelu
mkdir -p public/images/modolo

# Verifica che le immagini esistano nella sorgente
if [ -d "original_images" ]; then
  # Copia le immagini dalle directory originali (se disponibili)
  echo "Copiando immagini originali nelle directory pubbliche..."
  
  # Copia per ogni sottodirectory
  if [ -d "original_images/gallery" ]; then
    cp -r original_images/gallery/* public/images/gallery/ 2>/dev/null || :
  fi
  
  if [ -d "original_images/canne_al_vento" ]; then
    cp -r original_images/canne_al_vento/* public/images/canne_al_vento/ 2>/dev/null || :
  fi
  
  if [ -d "original_images/arcu_de_chelu" ]; then
    cp -r original_images/arcu_de_chelu/* public/images/arcu_de_chelu/ 2>/dev/null || :
  fi
  
  if [ -d "original_images/modolo" ]; then
    cp -r original_images/modolo/* public/images/modolo/ 2>/dev/null || :
  fi
  
  echo "Copia delle immagini completata."
else
  echo "Directory 'original_images' non trovata. Assicurati che le tue immagini siano già in public/images/."
fi

# Imposta i permessi corretti
chmod -R 755 public/images

echo "Permessi impostati correttamente."
echo "Ora puoi eseguire 'docker-compose build' e 'docker-compose up -d'." 