#!/bin/bash
# Rimuovi lockfile e node_modules
rm -rf yarn.lock package-lock.json node_modules
# Installa con npm
npm install
# Esegui il build
npm run build