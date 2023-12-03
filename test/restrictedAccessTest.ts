import { expect, assert} from 'chai';
import { WebDriver, Builder, By } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import 'chromedriver';
import { Main } from '../src/components/main';
import { App } from '../src/app';
import { DataURL } from '../src/components/data/data';

let compMain = new Main();
let objApp: App;

describe('Test Case: Retrict Direct Access', async function () {
    let driver: WebDriver;

    before(async function () {
        driver = await App.buildDriver();
        driver = await new Builder().forBrowser('chrome').build();
        objApp = new App(driver); // Pass the driver instance here
        await driver.manage().window().maximize(); // Maximize the browser window
    });

    after(async function () {
        await driver.quit(); // Close the driver after each test case
    });

    it('Step 1: Directly Access to Inventory', async function () {
        await driver.get('https://www.saucedemo.com/inventory.html');
    });

    it('Step 2: Verify Access Restriction', async function () {
        await objApp.restrictedErrorMsg(`Epic sadface: You can only access '/inventory.html' when you are logged in.`);
    });
});

