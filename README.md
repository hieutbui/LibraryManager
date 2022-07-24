# LibraryManager
This is front-end part of a react-native application that help library's staff to manage their services and also help library's customer to rent book quickly.
For running this application, you must install:
  - Node.js and JDK:
    Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:
        choco install -y nodejs-lts openjdk11
    If you have already installed Node on your system, make sure it is Node 14 or newer. If you already have a JDK on your system, make sure it is version 11 or newer.
  - Install Android Studio
  - While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:
        Android SDK
        Android SDK Platform
        Android Virtual Device
        If you are not already using Hyper-V: Performance (Intel ® HAXM)
  - Install the Android SDK
    To do that, open Android Studio, click on "Configure" button and select "SDK Manager".
    Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 12 (S) entry, then make sure the following items are checked:
    Android SDK Platform 31
    Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
    Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 31.0.0 is selected.
    Finally, click "Apply" to download and install the Android SDK and related build tools.
  -  Configure the ANDROID_HOME environment variable
      + Open the Windows Control Panel.
      + Click on User Accounts, then click User Accounts again
      + Click on Change my environment variables
      + Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:
  - Add platform-tools to Path
    + Open the Windows Control Panel.
    + Click on User Accounts, then click User Accounts again
    + Click on Change my environment variables
    + Select the Path variable.
    + Click Edit.
    + Click New and add the path to platform-tools to the list.
    
After all of this setup is done, install node_module to the folder where you place this project by running the code:
    npm install or yarn install
Finally, run this app:
    yarn android 
    Or npx react-native start -> npx react-native run-android
