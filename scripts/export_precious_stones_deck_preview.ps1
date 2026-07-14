$ErrorActionPreference = "Stop"

$workspace = Resolve-Path -LiteralPath "."
$pptx = Join-Path $workspace "public/assets/downloads/projects/precious-stones/design-presentation.pptx"
$slidesDir = Join-Path $workspace "public/assets/previews/projects/precious-stones/design-presentation-slides"
$previewHtml = Join-Path $workspace "public/assets/previews/projects/precious-stones/design-presentation-preview.html"

if (-not (Test-Path -LiteralPath $pptx)) {
  throw "Missing PowerPoint file: $pptx"
}

if (-not (Test-Path -LiteralPath $slidesDir)) {
  New-Item -ItemType Directory -Path $slidesDir | Out-Null
}

Get-ChildItem -LiteralPath $slidesDir -Filter "*.PNG" -ErrorAction SilentlyContinue | Remove-Item -Force
Get-ChildItem -LiteralPath $slidesDir -Filter "*.png" -ErrorAction SilentlyContinue | Remove-Item -Force

$powerPoint = New-Object -ComObject PowerPoint.Application
$presentation = $null

try {
  $presentation = $powerPoint.Presentations.Open($pptx, $true, $false, $false)
  $presentation.SaveAs($slidesDir, 18)
}
finally {
  if ($presentation -ne $null) {
    $presentation.Close()
  }
  $powerPoint.Quit()
  [System.Runtime.InteropServices.Marshal]::ReleaseComObject($powerPoint) | Out-Null
}

$slides = Get-ChildItem -LiteralPath $slidesDir -Filter "*.PNG" | Sort-Object Name
if ($slides.Count -eq 0) {
  throw "PowerPoint export did not create slide images."
}

$slideMarkup = foreach ($slide in $slides) {
  $name = [System.Net.WebUtility]::HtmlEncode($slide.BaseName)
  $src = "design-presentation-slides/$($slide.Name)"
  @"
      <figure class="slide">
        <img src="$src" alt="$name">
        <figcaption>$name</figcaption>
      </figure>
"@
}

$html = @"
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Precious Stones Design Presentation Preview</title>
    <style>
      :root {
        color-scheme: light;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #f7f8f3;
        color: #192024;
      }

      body {
        margin: 0;
        padding: 0.85rem;
      }

      .deck {
        display: grid;
        gap: 0.85rem;
      }

      .slide {
        background: #fff;
        border: 1px solid #d8ded4;
        border-radius: 8px;
        margin: 0;
        overflow: hidden;
      }

      img {
        display: block;
        width: 100%;
      }

      figcaption {
        color: #53615b;
        font-size: 0.82rem;
        padding: 0.55rem 0.7rem 0.7rem;
      }
    </style>
  </head>
  <body>
    <main class="deck" aria-label="Precious Stones design presentation slides">
$($slideMarkup -join "`n")
    </main>
  </body>
</html>
"@

Set-Content -LiteralPath $previewHtml -Value $html -Encoding UTF8
Write-Host "Exported $($slides.Count) slides to $slidesDir"
