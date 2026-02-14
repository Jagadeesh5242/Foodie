#!/usr/bin/env pwsh
<#
Script to delete problematic long-named template files and consolidate
#>

# Get all existing HTML template files
$templateDir = "src\main\resources\templates"
$existingFiles = Get-ChildItem $templateDir -Filter "*.html" | Where-Object {
    $_.Name -ne "index.html" -and 
    $_.Name -ne "menu.html" -and 
    $_.Name -ne "search-results.html"
}

Write-Host "Total template files: $($existingFiles.Count)"

# Files with > 100 characters in name are problematic variants
$problemFiles = $existingFiles | Where-Object { $_.Name.Length -gt 100 }
Write-Host "Problematic files (> 100 chars): $($problemFiles.Count)"

# Files with 60-100 characters are also likely variants
$variantFiles = $existingFiles | Where-Object { $_.Name.Length -gt 60 -and $_.Name.Length -le 100 }
Write-Host "Variant files (60-100 chars): $($variantFiles.Count)"

# Files with 50-60 are edge cases
$edgeFiles = $existingFiles | Where-Object { $_.Name.Length -gt 50 -and $_.Name.Length -le 60 }
Write-Host "Edge case files (50-60 chars): $($edgeFiles.Count)"

Write-Host ""
Write-Host "Creating cleanup plan..."

$allProblematicFiles = $existingFiles | Where-Object { $_.Name.Length -gt 50 }
Write-Host "Total files with long names (> 50 chars): $($allProblematicFiles.Count)"

# Export list for review
$allProblematicFiles | Select-Object Name | Export-Csv -Path "files-to-review.csv" -NoTypeInformation

Write-Host "List of problematic files saved to: files-to-review.csv"
Write-Host ""
Write-Host "Ready to proceed with cleanup"
