const wd = require("wd");

const PORT = 4723;
jest.setTimeout(600000)

const config = {
    platformName: "iOS",
    platformVersion: "15.2",
    deviceName: "iPhone 13 Pro Max",
    // app: '/Users/dozh/projects/myexpo/ios/build/Build/Products/Release-iphonesimulator/myexpo.app',
    app: '/Users/dozh/projects/myexpo/e2e/Exponent.app',
    automationName: "XCUITest",// UiAutomator2, Espresso, or UiAutomator1 for Android
};

const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
    await driver.init(config);
})


test('Test Accessibility Id', async () => {
    expect(await driver.hasElementByAccessibilityId('testText')).toBe(true);

    const testTextElement = await driver.elementByAccessibilityId('testText')

    expect(await testTextElement.getValue()).toBe('testText')
    expect(await testTextElement.isDisplayed()).toBe(true)
});
