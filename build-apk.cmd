@echo off
setlocal
cd /d "%~dp0"

echo ==========================================
echo Healthome Android APK Build
echo ==========================================

echo [1/6] Removing old local dependencies...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /f /q package-lock.json

echo [2/6] Installing the pinned Expo SDK 54 dependencies...
call npm install
if errorlevel 1 goto :error

echo [3/6] Verifying Expo-compatible dependency versions...
call npx expo install --check
if errorlevel 1 (
  echo Expo reported a dependency mismatch. Applying the pinned versions...
  call npx expo install react-native@0.81.5 expo-font@~14.0.12 @expo/vector-icons@15.0.3
  if errorlevel 1 goto :error
  call npm install
  if errorlevel 1 goto :error
)

echo [4/6] Checking Expo project...
call npx expo-doctor@latest
if errorlevel 1 (
  echo.
  echo [ERROR] expo-doctor found project issues. Fix them before building.
  pause
  exit /b 1
)

echo.
echo ==========================================
echo Preflight: checking Android JavaScript bundle...
echo ==========================================
if exist ".expo-export-check" rmdir /s /q ".expo-export-check"
npx expo export --platform android --output-dir .expo-export-check
if errorlevel 1 (
  echo.
  echo [ERROR] Android JavaScript bundle check failed.
  echo The project was NOT sent to EAS.
  pause
  exit /b 1
)
if exist ".expo-export-check" rmdir /s /q ".expo-export-check"

if errorlevel 1 goto :doctorerror

echo [5/6] Confirming React Native version...
call npm ls react-native expo-font @expo/vector-icons
if errorlevel 1 goto :error

echo [6/6] Starting EAS Android APK build...
call npx eas-cli@latest build -p android --profile production --clear-cache
if errorlevel 1 goto :error

echo.
echo Build submitted successfully. Open the EAS link shown above and download the APK when the build is finished.
pause
exit /b 0

:doctorerror
echo.
echo Expo Doctor still reports a project issue.
echo Do not continue to EAS until the red error is resolved.
pause
exit /b 1

:error
echo.
echo Build command failed. Read the FIRST red/error message above.
pause
exit /b 1
