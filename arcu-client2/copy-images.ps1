# Script PowerShell per copiare le immagini in modo corretto prima del build Docker

# Crea le directory necessarie se non esistono
New-Item -Path "public\images\gallery" -ItemType Directory -Force
New-Item -Path "public\images\canne_al_vento" -ItemType Directory -Force
New-Item -Path "public\images\arcu_de_chelu" -ItemType Directory -Force
New-Item -Path "public\images\modolo" -ItemType Directory -Force

# Verifica che le immagini esistano nella sorgente
if (Test-Path "original_images") {
    # Copia le immagini dalle directory originali (se disponibili)
    Write-Host "Copiando immagini originali nelle directory pubbliche..."
    
    # Copia per ogni sottodirectory
    if (Test-Path "original_images\gallery") {
        Copy-Item -Path "original_images\gallery\*" -Destination "public\images\gallery\" -Force
    }
    
    if (Test-Path "original_images\canne_al_vento") {
        Copy-Item -Path "original_images\canne_al_vento\*" -Destination "public\images\canne_al_vento\" -Force
    }
    
    if (Test-Path "original_images\arcu_de_chelu") {
        Copy-Item -Path "original_images\arcu_de_chelu\*" -Destination "public\images\arcu_de_chelu\" -Force
    }
    
    if (Test-Path "original_images\modolo") {
        Copy-Item -Path "original_images\modolo\*" -Destination "public\images\modolo\" -Force
    }
    
    Write-Host "Copia delle immagini completata."
} else {
    Write-Host "Directory 'original_images' non trovata. Assicurati che le tue immagini siano già in public\images\."
}

# Assicura che tutti abbiano accesso
$acl = Get-Acl -Path "public\images"
$accessRule = New-Object System.Security.AccessControl.FileSystemAccessRule("Everyone", "FullControl", "ContainerInherit,ObjectInherit", "None", "Allow")
$acl.SetAccessRule($accessRule)
Set-Acl -Path "public\images" -AclObject $acl

Write-Host "Permessi impostati correttamente."
Write-Host "Ora puoi eseguire 'docker-compose build' e 'docker-compose up -d'."

# Attendi input per chiudere
Write-Host "Premi un tasto per continuare..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 