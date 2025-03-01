# Script PowerShell per rinominare le immagini con nomi problematici

# Funzione per rinominare file con spazi, parentesi o caratteri speciali
function Rename-ProblematicFiles {
    param (
        [string]$directory
    )

    if (Test-Path $directory) {
        $files = Get-ChildItem -Path $directory -File
        
        foreach ($file in $files) {
            $newName = $file.Name -replace '\s+', '_' -replace '\(', '' -replace '\)', '' -replace '\+', '_plus_'
            
            if ($file.Name -ne $newName) {
                Write-Host "Rinominando '$($file.Name)' a '$newName'..."
                Rename-Item -Path $file.FullName -NewName $newName -Force
            }
        }
        
        Write-Host "Completato il controllo dei file in $directory"
    }
    else {
        Write-Host "Directory $directory non trovata!"
    }
}

# Directory da controllare
$directories = @(
    "public\images",
    "public\images\gallery",
    "public\images\canne_al_vento",
    "public\images\arcu_de_chelu",
    "public\images\modolo"
)

# Crea le directory se non esistono
foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -Path $dir -ItemType Directory -Force
        Write-Host "Creata directory: $dir"
    }
}

# Rinomina i file in ogni directory
foreach ($dir in $directories) {
    Write-Host "Elaborazione directory: $dir"
    Rename-ProblematicFiles -directory $dir
}

Write-Host "Processo di rinominazione completato."
Write-Host "Ora è necessario aggiornare i riferimenti a questi file nel codice."
Write-Host "Premi un tasto per continuare..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 