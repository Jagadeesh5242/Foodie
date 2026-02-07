#!/usr/bin/env pwsh

# Update all HTML recipe files with new translation system
$templatesDir = "e:\Time planner\timeplanner\src\main\resources\templates"
$htmlFiles = Get-ChildItem -Path $templatesDir -Filter "*.html" -Exclude "index.html", "ENHANCED_TEMPLATE.html", "recipe-master.html", "recipe-master-template.html", "recipe-enhanced.html", "recipe-template.html", "recipe-template-base.html"

Write-Host "Found $($htmlFiles.Count) HTML files to update"
Write-Host "Updating translation system..."

$oldScriptPattern = @'
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"><\/script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap\/4.5.2\/js\/bootstrap.min.js"><\/script>
    <script>
        const searchInput = document.getElementById\('searchInput'\);
        const suggestionsList = document.getElementById\('suggestionsList'\);
        const languageSelector = document.getElementById\('languageSelector'\);
'@

$newScriptStart = @'
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="/js/translation.js"></script>
    <script>
        const searchInput = document.getElementById('searchInput');
        const suggestionsList = document.getElementById('suggestionsList');
'@

foreach ($file in $htmlFiles) {
    try {
        $content = Get-Content -Path $file.FullName -Raw
        
        # Check if already updated
        if ($content -like "*src=`"/js/translation.js`"*") {
            Write-Host "✓ $($file.Name) - Already updated"
            continue
        }
        
        # Replace the script section - more reliable approach
        if ($content -like "*const languageSelector = document.getElementById('languageSelector')*") {
            $content = $content -replace '(<script src="https://code\.jquery\.com.*?)<script>\s+const searchInput = document\.getElementById\(\'searchInput\'\);\s+const suggestionsList = document\.getElementById\(\'suggestionsList\'\);\s+const languageSelector = document\.getElementById\(\'languageSelector\'\);', '$1<script src="/js/translation.js"></script>' + "`n" + '    <script>' + "`n" + "        const searchInput = document.getElementById('searchInput');" + "`n" + "        const suggestionsList = document.getElementById('suggestionsList');"
            
            # Remove the old language selector listener code
            $content = $content -replace "if \(languageSelector\) \{.*?(\})\s*// Google Translate", "// Language selector handled by translation.js"
            
            # Keep but comment out or simplify the rest of Google Translate init code
            Set-Content -Path $file.FullName -Value $content
            Write-Host "✓ $($file.Name) - Updated"
        } else {
            Write-Host "⊘ $($file.Name) - Skipped (different structure)"
        }
    }
    catch {
        Write-Host "✗ $($file.Name) - Error: $_"
    }
}

Write-Host ""
Write-Host "Update complete! Now add the translation.js script link to all files."
Write-Host "The language selector should work automatically with the new translation system."
