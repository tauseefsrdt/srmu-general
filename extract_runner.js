const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const psScript = `
Add-Type -AssemblyName System.IO.Compression.FileSystem

function Read-Docx($p) {
    if (-not (Test-Path $p)) { return "File not found: $p" }
    $zip = [System.IO.Compression.ZipFile]::OpenRead($p)
    $entry = $zip.GetEntry('word/document.xml')
    if ($entry) {
        $stream = $entry.Open()
        $reader = New-Object System.IO.StreamReader($stream)
        $xml = $reader.ReadToEnd()
        $reader.Close()
        $stream.Close()
        $zip.Dispose()
        $lines = $xml -split '<w:p[ >]' | ForEach-Object {
            $t = $_ -replace '<[^>]+>', ' ' -replace '\\s+', ' '
            $t.Trim()
        } | Where-Object { $_ -ne '' }
        return $lines -join "\`n"
    }
    $zip.Dispose()
    return ''
}

$dir = Get-Location

$privacy = Read-Docx "$dir\\10. Privacy Policy.docx"
Set-Content -Path "$dir\\extracted_privacy.txt" -Value $privacy -Encoding UTF8

$retraction = Read-Docx "$dir\\12. Retraction and Correction Policy.docx"
Set-Content -Path "$dir\\extracted_retraction.txt" -Value $retraction -Encoding UTF8

$dataAvail = Read-Docx "$dir\\5. Data Availability Policy.docx"
Set-Content -Path "$dir\\extracted_data_availability.txt" -Value $dataAvail -Encoding UTF8

Write-Host "Extraction complete!"
`;

fs.writeFileSync(path.join(__dirname, 'extract.ps1'), psScript, 'utf8');
console.log('Wrote extract.ps1');
try {
  const out = execSync('powershell -ExecutionPolicy Bypass -File extract.ps1', { encoding: 'utf8' });
  console.log(out);
} catch (e) {
  console.error(e);
}

