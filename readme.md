## Personal

### Prerequisites

- Nodejs version: 8.12.0 or newer
- Follow [this instructions](https://reactnative.dev/docs/environment-setup) in **React Native CLI Quickstart** tab. (Not the _Expo CLI Quickstart_ tab).

### Installing

1. While being in the project folder; install all required modules: `npm install`
2. Open your preferred emulator (_Android_, _iOS_ or both).
3. Open the terminal
4. Start the bundle process: `npx react-native start`
5. Run project on device: `react-native run-android` ~~or `react-native run-ios`

#### Deployment

## Generating the release APK (Android)

1. Start Android Studio
2. Open the project `project_folder/android`
3. Update the versionCode and versionName (`android/app/build.gradle`)
4. In the top menu select -> Build -> Generate Signed Bundle/APK
5. Select APK, -> Next
7. Select `release`
8. Check `V1` and `V2`
9. Finish
10. Apk -> `project_folder/android/app/release`

## iOS

1. Start Xcode
2. Open the project (`project_folder/ios/project_name.xcworkspace`)
3. Update the version and build numbers
4. Sign in to your apple developer account
5. In the top menu, select Generic iOS Device as the build destination if no actual device is connected
6. Menu, Project, Archive
7. Click Distribute
8. Sign in to your apple developer account
9. Submit to the App Store
