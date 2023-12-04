import { expect, assert} from 'chai';
import { WebDriver, Builder, By } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import 'chromedriver';
import { Main } from '../src/components/main';
import { App } from '../src/app';
import { DataURL } from '../src/components/data/data';


let compMain = new Main();
let objApp: App;


describe('Test Case: Regression Test', async function () {
    let driver: WebDriver;

    before(async function () {

    });

    after(async function () {

    });
    // ---- Test Case 1 ----
    describe('Test Case: Validate Unsuccessful Login', async function () {
        let driver: WebDriver;
    
        before(async function () {
            driver = await App.buildDriver();
            // driver = await new Builder().forBrowser('chrome').build();
            objApp = new App(driver); // Pass the driver instance here
            await driver.manage().window().maximize(); // Maximize the browser window
        });
    
        after(async function () {
            await driver.quit(); // Close the driver after each test case
        });
    
        it('Step 1: Open Browser', async function () {
        await driver.get('https://www.saucedemo.com'); // Navigate to the website
    
        await objApp.verifyUrl(DataURL.saucedemo);
        });
    
        it('Step 2: Enter invalid username', async function () {
            await objApp.insertText(By.css(compMain.userNameInput), 'invalid_user');
        });
    
        it('Step 3: Enter invalid password', async function () {
            await objApp.insertText(By.css(compMain.userPassInput), 'wrong_password');
        });
    
        it('Step 4: Click Login', async function () {
            await objApp.click(By.css(compMain.loginButton));
    
            await objApp.verifyErrorMsg(`Epic sadface: Username and password do not match any user in this service`);
        });
    
    });
    // ---- Test Case 2 ----
    describe('Test Case: Retrict Direct Access', async function () {
        let driver: WebDriver;
    
        before(async function () {
            driver = await App.buildDriver();
            // driver = await new Builder().forBrowser('chrome').build();
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
    // ---- Test Case 3 ----
    describe('Test Case: Validate End-to-End Shopping Process for a Specific Product', async function () {
        let driver: WebDriver;
    
        before(async function () {
            driver = await App.buildDriver();
            // driver = await new Builder().forBrowser('chrome').build();
            objApp = new App(driver); // Pass the driver instance here
            await driver.manage().window().maximize(); // Maximize the browser window
        });
    
        after(async function () {
            await driver.quit(); // Close the driver after each test case
        });
    
        it('Step 1: Open Browser', async function () {
            await driver.get('https://www.saucedemo.com'); // Navigate to the website
    
            await objApp.verifyUrl(DataURL.saucedemo);
        });
    
        it('Step 2: Enter valid username & password', async function () {
            await objApp.insertText(By.css(compMain.userNameInput), 'standard_user');
    
            await objApp.insertText(By.css(compMain.userPassInput), 'secret_sauce');
        });
    
        it('Step 3: Click Login', async function () {
            await objApp.click(By.css(compMain.loginButton));
    
            await objApp.verifyUrl(DataURL.saucedemoInventory);
        });
    
        it('Step 4: Click on the "Sauce Labs Backpack"', async function () {
            // Find the text 'Sauce Labs Backpack' and click on it
            await objApp.click(By.css(compMain.sauceLabsBackpack));       
        });
    
        it('Step 5: Click on the "Add to Cart" button', async function () {
            // Find the text 'Add to cart' and click on it
            await objApp.click(By.css(compMain.addToCartBtn));
    
            // Verify the text 'Remove' is displayed
            await objApp.verifyText(By.css(compMain.removeCartBtn), 'Remove');
        });
    
        it('Step 6: Click on the "Cart" button', async function () {
            // Find the text 'Cart' and click on it
            await objApp.click(By.css(compMain.cartBtn));
    
            // Verify the text 'Your Cart' is displayed
            await objApp.verifyText(By.css(compMain.yourCart), 'Your Cart');
    
            // Verify the cart badge is indicated as '1'
            await objApp.verifyText(By.css(compMain.cartBadge), '1');
    
            // Verify the total item in the cart
            await objApp.verifyItemQty(1)
        });
    
        it('Step 7: Click on the "Checkout" button', async function () {
            // Find the text 'Checkout' and click on it
            await objApp.click(By.css(compMain.checkoutBtn));
        });
    
        it('Step 8: Enter Checkout Details', async function () {
            // Enter First Name
            await objApp.insertText(By.css(compMain.firstName), 'John');
    
            // Enter Last Name
            await objApp.insertText(By.css(compMain.lastName), 'Doe');
    
            // Enter Zip Code
            await objApp.insertText(By.css(compMain.postalCode), '12345');
        });
    
        it('Step 9: Click on the "Continue" button', async function () {
            // Find the text 'Continue' and click on it
            await objApp.click(By.css(compMain.continueBtn));
        });
    
        it('Step 10: Click on the "Finish" button', async function () {
            // Find the text 'Finish' and click on it
            await objApp.click(By.css(compMain.finishBtn));
    
            // Verify the URL
            await objApp.verifyUrl(DataURL.saucedemoCheckoutComplete);
    
            // Verify the text 'Thank you for your order!' is displayed
            await objApp.verifyText(By.css(compMain.completeHeader), 'Thank you for your order!');
        });
    });
    // ---- Test Case 4 ----
    describe('Test Case: Validate Successful Login', async function () {
        let driver: WebDriver;
    
        before(async function () {
            driver = await App.buildDriver();
            // driver = await new Builder().forBrowser('chrome').build();
            objApp = new App(driver); // Pass the driver instance here
            await driver.manage().window().maximize(); // Maximize the browser window
        });
    
        after(async function () {
            await driver.quit(); // Close the driver after each test case
        });
    
        it('Step 1: Open Browser', async function () {
        await driver.get('https://www.saucedemo.com'); // Navigate to the website
        
        await objApp.verifyTitle();
        });
    
        it('Step 2: Input in the application with valid username', async function () {
        await objApp.insertText(By.css(compMain.userNameInput), 'standard_user');
        });
    
        it('Step 3: Input in the application with valid password', async function () {        
        await objApp.insertText(By.css(compMain.userPassInput), 'secret_sauce ');
        });
    
        it('Step 4: Click on the login button', async function () {
        await objApp.click(By.css(compMain.loginButton));
        });
    });
});