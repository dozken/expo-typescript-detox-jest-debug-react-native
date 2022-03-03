module.exports = {
    testRunner: 'jest',
    runnerConfig: 'e2e/config.json',
    specs: 'e2e',
    behavior: {
        init: {
            exposeGlobals: false,
        },
    },
    apps: {
        'ios.release': {
            type: 'ios.app',
            binaryPath:
                'ios/build/Build/Products/Release-iphonesimulator/myexpo.app',
            build:
                'export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild -workspace ios/myexpo.xcworkspace -UseNewBuildSystem=YES -scheme myexpo -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
        },
        'ios.debug': {
            type: 'ios.app',
            binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/myexpo.app',
            build:
                'xcodebuild -workspace ios/myexpo.xcworkspace -scheme myexpo -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
        },
        'android.debug': {
            type: 'android.apk',
            binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
            build:
                'cd android ; ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug ; cd -',
        },
        'android.release': {
            type: 'android.apk',
            binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
            build:
                'cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -',
        },
    },
    devices: {
        simulator: {
            type: 'ios.simulator',
            device: {
                type: 'iPhone 13 Pro Max',
            },
        },
        emulator: {
            type: 'android.emulator',
            device: {
                avdName: 'EMULATOR',
            },
        },
        pixel3a: {
            type: 'android.attached',
            device: {
                adbName: '9A9AY1CDPS', // lookup from `adb devices` command
            },
        },
    },
    configurations: {
        'ios.sim.release': {
            device: 'simulator',
            app: 'ios.release',
        },
        'ios.sim.debug': {
            device: 'simulator',
            app: 'ios.debug',
        },
        'ios.none': {
            type: 'ios.none',
            session: {
                server: 'ws://localhost:8099',
                sessionId: 'com.wix.demo.react.native',
            },
        },
        'android.real.debug': {
            device: 'pixel3a',
            app: 'android.debug',
        },
        'android.emu.debug': {
            device: 'emulator',
            app: 'android.debug',
        },
        'android.emu.release': {
            device: 'emulator',
            app: 'android.release',
        },
    },
};
