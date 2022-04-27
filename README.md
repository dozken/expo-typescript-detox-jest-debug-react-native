[![Build status](https://build.appcenter.ms/v0.1/apps/36524399-ae28-4ba8-a5e1-677537d8b40b/branches/master/badge)](https://appcenter.ms)

# Example of React Native + Expo + Typescript + Detox + Jest + Debug mode

## Installation
1. `yarn install`
2. `expo prebuild`

### Running test in debug mode for Android. 
3. `yarn build:android-debug`
4. `yarn android`
5. `yarn test:android-debug --watch`

### Running test in debug mode for iOS.
3. Install iOS packages: `npx pod-install`
4. `yarn build:ios-debug`
5. `yarn ios`
6. `yarn test:ios-debug --watch`

### Appium tests
* install appium `npm i -g appium`
* run appium server `appium`
* run test `jest test` 


### Links
https://github.com/expo/config-plugins/tree/master/packages/detox  
https://github.com/wix/Detox/blob/master/examples/demo-react-native/detox.config.js


edit with vscode browser