Add-Type -AssemblyName System.IO.Compression.FileSystem

function Read-Docx($p) {
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
            $t = $_ -replace '<[^>]+>', ' ' -replace '\s+', ' '
            $t.Trim()
        } | Where-Object { $_ -ne '' }
        return $lines -join "`n"
    }
    $zip.Dispose()
    return ''
}

function Read-Doc($p) {
    try {
        $word = New-Object -ComObject Word.Application
        $word.Visible = $false
        $doc = $word.Documents.Open($p)
        $text = $doc.Content.Text
        $doc.Close()
        $word.Quit()
        [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
        return $text
    } catch {
        return "Word COM error: " + $_.Exception.Message
    }
}

$dir = Get-Location

$files = @(
    "11. Publication Ethics Policy_2.docx",
    "3. Conflict of Interest Policy_2.docx",
    "6. Editorial Policy_2.docx",
    "7. Open Access Policy_2.docx"
)

foreach ($f in $files) {
    $fullPath = Join-Path $dir $f
    if (Test-Path $fullPath) {
        $content = Read-Docx $fullPath
        $outName = ($f -replace '[^\w\d_]', '_') + '.txt'
        $outPath = Join-Path $dir $outName
        Set-Content -Path $outPath -Value $content -Encoding UTF8
        Write-Host "Extracted $f to $outName"
    } else {
        Write-Host "File not found: $f"
    }
}

Write-Host "Extraction complete!"
