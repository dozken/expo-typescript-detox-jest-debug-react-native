import {device, expect, waitFor, element, by} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await waitFor(element(by.id('tab-view-text'))).toBeVisible().withTimeout(4000);
  });

  xit('should have welcome screen', async () => {
    await waitFor(element(by.text('Tab One')).atIndex(0)).toBeVisible().withTimeout(4000);
  });

  xit('expect testText', async  () =>{
    await waitFor(element(by.text('testText')).atIndex(0)).toBeVisible().withTimeout(3000);
  });

});
