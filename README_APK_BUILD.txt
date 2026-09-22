HEALTHOME - ANDROID APK BUILD
=============================

This project is prepared for an Android APK build with EAS.
The Healthome logo is configured as the app icon, adaptive icon and splash artwork.

IMPORTANT FIX
--------------
The previous build failed because node_modules was being included in Git and Windows hit
Git's filename-too-long error. This project includes both .gitignore and .easignore so
node_modules is excluded from Git/EAS uploads.

BUILD ON WINDOWS
----------------
1. Extract this ZIP.
2. Open CMD in this folder.
3. Run:

   npm install
   npx expo install --fix
   npx eas-cli@latest login
   npx eas-cli@latest build -p android --profile production --clear-cache

4. If EAS asks to initialize Git, answer Y.
5. If EAS asks to create/link an EAS project, answer Y.
6. Wait for the EAS build to finish and download the APK from the EAS build page.

OR
---
Double-click build-apk.cmd. It performs the install, dependency alignment, Expo Doctor
check and EAS APK build automatically.

APK PROFILE
-----------
The production profile uses Android buildType=apk, so the result is an installable .apk,
not an Android App Bundle (.aab).

PACKAGE
-------
com.healthome.app

ICON FILES
----------
assets/icon.png
assets/adaptive-icon.png
assets/splash.png


Dependency fix: expo-font is explicitly pinned to Expo SDK 54 compatible ~14.0.12 to prevent npm from installing a newer duplicate expo-font version.


LATEST DEPENDENCY FIX
---------------------
The previous project had React Native 0.81.4 installed while Expo SDK 54 expects 0.81.5.
This package pins React Native to 0.81.5 and pins expo-font to 14.0.12 and
@expo/vector-icons to 15.0.3. npm overrides prevent duplicate incompatible native versions.

RECOMMENDED BUILD
-----------------
npm install
npx expo-doctor@latest
npx eas-cli@latest login
npx eas-cli@latest build -p android --profile production --clear-cache


V8 IMPORTANT INSTALL NOTE
If Android says the package is invalid, uninstall any existing Healthome app before installing this build. V8 uses version 1.0.1 / versionCode 2 and forces EAS to produce the release APK at the exact APK artifact path.
