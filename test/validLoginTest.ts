import { expect, assert} from 'chai';
import { WebDriver, Builder, By } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import 'chromedriver';
import { Main } from '../src/components/main';
import { App  } from '../src/app';
import { pageUrl, UserCredentials } from '../src/components/data/data';

let compMain = new Main();
let objApp: App;

export function validLoginTest() {
    describe('Test Case: Validate Successful Login', async function () {
        let driver: WebDriver;
    
        before(async function () {
            driver = await App.buildDriver();
            // driver = await new Builder().forBrowser('chrome').build(); // Uncomment this line if you want to use the default chrome browser 
            objApp = new App(driver); // Pass the driver instance here
            await driver.manage().window().maximize(); // Maximize the browser window
        });
    
        after(async function () {
            await driver.quit(); // Close the driver after each test case
        });
    
        it('Step 1: Open Browser', async function () {
        await driver.get(pageUrl.saucedemo); // Navigate to the website
        
        await objApp.verifyTitle();
        });
    
        it('Step 2: Input in the application with valid username', async function () {
        await objApp.insertText(By.css(compMain.userNameInput), UserCredentials.standardUser.username);
        });
    
        it('Step 3: Input in the application with valid password', async function () {        
        await objApp.insertText(By.css(compMain.userPassInput), UserCredentials.standardUser.password);
        });
    
        it('Step 4: Click on the login button', async function () {
        await objApp.click(By.css(compMain.loginButton));
        });
    });    
}
