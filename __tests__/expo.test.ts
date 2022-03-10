import {remote} from "webdriverio";

const capabilities = {
    platformName: "iOS",
    platformVersion: "15.2",
    deviceName: "iPhone 13 Pro Max",
    automationName: 'XCUITest',
    bundleId: 'com.apple.mobilesafari',
    autoAcceptAlerts: true,
};

jest.setTimeout(600000)


const options = {
    path: '/wd/hub/',
    port: 4723,
};

async function expoDeepLink13_6(client: any ) {
    const urlFieldSelector = 'label == "Address"';
    const urlField = await client.$(`-ios predicate string:${ urlFieldSelector }`);
    await urlField.setValue('exp://127.0.0.1:19000/\uE007');
}

async function handleFirstLaunch(client: any ) {
    try {
        const gotItSelector = 'label == "Got it"';
        const gotIt = await client.$(`-ios predicate string:${gotItSelector}`);
        await gotIt.click();
        const reloadSelector = 'type == \'XCUIElementTypeOther\' && name CONTAINS \'Reload\'';
        const reload = await client.$(`-ios predicate string:${ reloadSelector }`);
        await reload.click();
    } catch (err) {
        console.log('No need to handle first launch');
    }
}

async function reloadExpo(client: any ) {
    await client.shake();
    const reloadSelector = 'type == \'XCUIElementTypeOther\' && name CONTAINS \'Reload\'';
    const reload = await client.$(`-ios predicate string:${ reloadSelector }`);
    await reload.click();
}

async function launchExpoIOS() {
    const client = await remote({ ...options, capabilities});
    await client.execute('mobile: launchApp', { bundleId: 'com.apple.mobilesafari' });
    await expoDeepLink13_6(client);
    await handleFirstLaunch(client);
    await reloadExpo(client);
    return client;
}

describe('Example Test', () => {
    let client: any ;

    beforeAll(async () => {
        client = await launchExpoIOS();
    });

    afterAll(async () => {
        await client.deleteSession();
    });

    it('test1', ()=>{

        client.
    })
});
