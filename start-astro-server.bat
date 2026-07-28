@echo off
setlocal

cd /d "%~dp0"
set "ASTRO_TELEMETRY_DISABLED=1"

set "CODEX_NODE=C:\Users\bfu\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
set "CODEX_PNPM=C:\Users\bfu\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd"

if exist "%CODEX_NODE%" (
  set "PATH=%CODEX_NODE%;%PATH%"
)

if exist "%CODEX_PNPM%" (
  set "PNPM_CMD=%CODEX_PNPM%"
) else (
  where pnpm.cmd >nul 2>nul
  if errorlevel 1 (
    echo Could not find pnpm.
    echo Install pnpm or run this from Codex after dependencies are available.
    pause
    exit /b 1
  )
  set "PNPM_CMD=pnpm.cmd"
)

echo Starting Boxifu Portfolio Astro dev server...
echo Local URL: http://127.0.0.1:4321/boxifu-portfolio/
echo.

"%PNPM_CMD%" astro dev --host 127.0.0.1

echo.
echo Astro server stopped.
pause
