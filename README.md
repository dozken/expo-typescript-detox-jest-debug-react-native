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
5. `yarn build:ios-debug`
6. `yarn ios`
7. `yarn test:ios-debug --watch`


### Links
https://github.com/expo/config-plugins/tree/master/packages/detox  
https://github.com/wix/Detox/blob/master/examples/demo-react-native/detox.config.js
