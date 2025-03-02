# Script PowerShell per copiare e ottimizzare le immagini per il container Docker

# Definizione percorsi
$sourceImagesRoot = "original_images"
$destinationImagesRoot = "public\images"

# Crea le directory necessarie se non esistono
$imageDirs = @(
    "$destinationImagesRoot",
    "$destinationImagesRoot\gallery",
    "$destinationImagesRoot\arcu_de_chelu",
    "$destinationImagesRoot\canne_al_vento",
    "$destinationImagesRoot\modolo"
)

# Crea tutte le directory
foreach ($dir in $imageDirs) {
    if (-not (Test-Path $dir)) {
        Write-Host "Creazione directory: $dir"
        New-Item -Path $dir -ItemType Directory -Force | Out-Null
    }
}

# Funzione per copiare le immagini da una directory all'altra
function Copy-ImagesWithRename {
    param (
        [string]$sourceDir,
        [string]$destDir
    )

    Write-Host "Copiando immagini da $sourceDir a $destDir..."

    # Controlla se la directory sorgente esiste
    if (-not (Test-Path $sourceDir)) {
        Write-Host "La directory sorgente $sourceDir non esiste. Saltando..."
        return
    }

    # Ottieni tutti i file immagine dalla directory sorgente
    $imageFiles = Get-ChildItem -Path $sourceDir -File -Include *.jpg,*.jpeg,*.png,*.gif

    # Copia ogni file e rinomina per rimuovere spazi e caratteri speciali
    foreach ($file in $imageFiles) {
        $newName = $file.Name -replace '\s+', '_' -replace '\(', '' -replace '\)', '' -replace '\+', '_plus_'
        $destPath = Join-Path -Path $destDir -ChildPath $newName

        Write-Host "  Copiando $($file.Name) -> $newName"
        Copy-Item -Path $file.FullName -Destination $destPath -Force
    }
}

# Copia immagini per ogni directory
if (Test-Path $sourceImagesRoot) {
    Write-Host "Directory sorgente delle immagini originali trovata: $sourceImagesRoot"
    
    # Copia da ogni sottodirectory specifica
    if (Test-Path "$sourceImagesRoot\gallery") {
        Copy-ImagesWithRename -sourceDir "$sourceImagesRoot\gallery" -destDir "$destinationImagesRoot\gallery"
    }
    
    if (Test-Path "$sourceImagesRoot\arcu_de_chelu") {
        Copy-ImagesWithRename -sourceDir "$sourceImagesRoot\arcu_de_chelu" -destDir "$destinationImagesRoot\arcu_de_chelu"
    }
    
    if (Test-Path "$sourceImagesRoot\canne_al_vento") {
        Copy-ImagesWithRename -sourceDir "$sourceImagesRoot\canne_al_vento" -destDir "$destinationImagesRoot\canne_al_vento"
    }
    
    if (Test-Path "$sourceImagesRoot\modolo") {
        Copy-ImagesWithRename -sourceDir "$sourceImagesRoot\modolo" -destDir "$destinationImagesRoot\modolo"
    }
    
    # Copia anche dalla radice (se ci sono immagini)
    Copy-ImagesWithRename -sourceDir $sourceImagesRoot -destDir $destinationImagesRoot
} else {
    Write-Host "Directory sorgente $sourceImagesRoot non trovata. Eseguire prima il download delle immagini."
}

# Esegui lo script dei placeholder per le immagini mancanti
Write-Host "`nGenerazione placeholder per immagini mancanti..."
if (Test-Path ".\create-placeholders.ps1") {
    & .\create-placeholders.ps1
} else {
    Write-Host "ERRORE: Script create-placeholders.ps1 non trovato!"
}

Write-Host "`nProcesso completato. Ora puoi eseguire docker-compose build."
Write-Host "Premi un tasto per continuare..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 