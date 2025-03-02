# Script PowerShell per generare immagini placeholder per le immagini mancanti

# Funzione per generare un'immagine placeholder per file mancanti
function Create-PlaceholderImage {
    param (
        [string]$imagePath
    )

    if (-not (Test-Path $imagePath)) {
        Write-Host "Creazione immagine placeholder per: $imagePath"
        
        # Crea una directory se non esiste
        $directory = Split-Path -Path $imagePath
        if (-not (Test-Path $directory)) {
            New-Item -Path $directory -ItemType Directory -Force | Out-Null
        }
        
        # Copia un'immagine esistente come placeholder
        # Utilizziamo un'immagine esistente sicuramente presente
        if (Test-Path "public\images\B2_reduction.png") {
            Copy-Item -Path "public\images\B2_reduction.png" -Destination $imagePath -Force
            Write-Host "  Placeholder creato con successo!"
        } else {
            Write-Host "  ERRORE: Impossibile trovare l'immagine di base per il placeholder."
        }
    }
}

# Elenco delle immagini necessarie per il sito
$requiredImages = @(
    # Arcu de Chelu
    "public\images\arcu_de_chelu\DSC_1469.jpeg",
    "public\images\arcu_de_chelu\DSC_1474.jpeg",
    "public\images\arcu_de_chelu\DSC_1475.jpeg",
    "public\images\arcu_de_chelu\photo_5778594136029511850_w_1.jpg",
    "public\images\arcu_de_chelu\msg417320986-1047.jpg",
    "public\images\arcu_de_chelu\msg417320986-1054.jpg",
    
    # Gallery
    "public\images\gallery\DSC_1446.jpeg",
    "public\images\gallery\DSC_1467.jpeg",
    "public\images\gallery\1665427737133_1.jpeg",
    "public\images\gallery\DSC_1241_edited.jpg",
    "public\images\gallery\DSC_1513.jpeg",
    "public\images\gallery\IMG_20220721_204145.jpg",
    "public\images\gallery\IMG_20220805_115752.jpg",
    "public\images\gallery\IMG_20220811_113556.jpg",
    "public\images\gallery\IMG_20230511_224007.jpg",
    
    # Modolo
    "public\images\modolo\DSC_1193.jpeg",
    "public\images\modolo\DSC_1409.jpeg",
    "public\images\modolo\DSC_1446.jpeg",
    "public\images\modolo\DSC_1467.jpeg",
    "public\images\modolo\DSC_1241_edited.jpg",
    "public\images\modolo\DSC_1513.jpeg",
    "public\images\modolo\IMG_20220721_204145.jpg",
    "public\images\modolo\1665427737133_1.jpeg",
    "public\images\modolo\IMG_20220811_113556.jpg",
    
    # Canne al Vento
    "public\images\canne_al_vento\DSC_1515_edited.jpg",
    "public\images\canne_al_vento\DSC_1495.jpeg",
    "public\images\canne_al_vento\DSC_1500.jpeg",
    "public\images\canne_al_vento\DSC_1505.jpeg",
    "public\images\canne_al_vento\DSC_1511.jpeg",
    
    # Altre immagini usate nel sito
    "public\images\B2_reduction.png",
    "public\images\B2_reduction_edited.png"
)

# Genera i placeholder per tutte le immagini mancanti
foreach ($image in $requiredImages) {
    Create-PlaceholderImage -imagePath $image
}

Write-Host "Completato processo di generazione placeholder per le immagini mancanti."
Write-Host "Premi un tasto per continuare..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 