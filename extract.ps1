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

$scope = Read-Docx "$dir\Scope of the Journal.docx"
Set-Content -Path "$dir\extracted_scope.txt" -Value $scope -Encoding UTF8

$authors = Read-Docx "$dir\Authors Guidelines for Webpage.docx"
Set-Content -Path "$dir\extracted_authors.txt" -Value $authors -Encoding UTF8

$template = Read-Doc "$dir\13. Template.doc"
Set-Content -Path "$dir\extracted_template.txt" -Value $template -Encoding UTF8

Write-Host "Extraction complete!"
