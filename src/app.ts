import { assert } from 'chai';
import { Builder, By, until, WebDriver, Capabilities } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import { Main } from '../src/components/main';
import { DataURL } from '../src/components/data/data';

let compMain = new Main();
let driver: WebDriver;

export class App {
    private driver: WebDriver;
    private compMain: Main; // Property to hold the Main instance
    
  
    constructor(driver: WebDriver) {
        this.driver = driver;
        this.compMain = new Main(); // Initialize the Main instance
    }

    // Static method to initialize the WebDriver with headless configuration
    static async buildDriver(): Promise<WebDriver> {
        let options = new chrome.Options();
        options.addArguments('--headless');
        options.addArguments('--no-sandbox'); // Bypass OS security model, crucial for Docker/CI environments
        options.addArguments('--disable-dev-shm-usage'); // Overcome limited resource problems
        options.addArguments('--disable-gpu'); // Applicable for some versions of Chrome
    
        const driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    
        return driver;
    }

    // ---URL--- ------------->>>
    async verifyUrl(expectedUrl: string) {
        try {
            // Retrieve the page url and assert
            const actualUrl = await this.driver.getCurrentUrl();
            assert.strictEqual(actualUrl, expectedUrl, `Expected url '${expectedUrl}', but found '${actualUrl}'`);
        } catch (error) {
            console.error('Error in verifyUrl:', error);
            throw error;
        }
    }


    // ---LOGIN_PAGE--- ------------->>>
    async verifyTitle() {
        const expectedTitle = 'Swag Labs';
        try {
            // Wait for the page title
            await this.driver.wait(until.titleIs(expectedTitle), 5000);

            // Retrieve the page title and assert
            const actualTitle = await this.driver.getTitle();
            assert.equal(actualTitle, expectedTitle, `Expected title '${expectedTitle}', but found '${actualTitle}'`);
        } catch (error) {
            console.error('Error in verifyTitle:', error);
            throw error;
        }
    }

    async verifyErrorMsg(expectedErrorMsg: string) {
        try {
            // Expilcit Wait for the element to be located
            const element = await this.driver.wait(until.elementLocated(By.css(compMain.loginErrorMsg)), 5000);
        
            // Retrieve the error message and assert
            const actualErrorMsg = await element.getText();
            assert.equal(actualErrorMsg, expectedErrorMsg, `Expected error message '${expectedErrorMsg}', but found '${actualErrorMsg}'`);
        } catch (error) {
            console.error('Error in verifyErrorMsg:', error);
            throw error;
        }
    }

    async restrictedErrorMsg(expectedErrorMsg: string) {
        try {
            // Expilcit Wait for the element to be located
            const element = await this.driver.wait(until.elementLocated(By.css(compMain.restrictedErrorMsg)), 5000);
        
            // Retrieve the error message and assert
            const actualErrorMsg = await element.getText();
            assert.equal(actualErrorMsg, expectedErrorMsg, `Expected error message '${expectedErrorMsg}', but found '${actualErrorMsg}'`);
        } catch (error) {
            console.error('Error in restrictedErrorMsg:', error);
            throw error;
        }
    }

    async verifyText(locator: By, expectedText: string) {
        try {
            // Wait for the element to be located
            const element = await this.driver.wait(until.elementLocated(locator), 5000);

            // Retrieve the element's text and assert
            const actualText = await element.getText();
            assert.equal(actualText, expectedText, `Expected text '${expectedText}', but found '${actualText}'`);
        } catch (error) {
            console.error('Error in verifyText:', error);
            throw error;
        }
    }

    // ---CHECKOUT_PAGE_FUNCTION--- ------------->>>
    async verifyCartCount(expectedCount: string) {
        try {
            // Wait for the element to be located
            const element = await this.driver.wait(until.elementLocated(By.css(compMain.cartBadge)), 5000);

            // Retrieve the element's text and assert
            const actualCount = await element.getText();
            assert.equal(actualCount, expectedCount, `Expected text '${expectedCount}', but found '${actualCount}'`);
        } catch (error) {
            console.error('Error in verifyCartCount:', error);
            throw error;
        }
    }

    async getItemQty() {
        try {
            const elements = await this.driver.findElements(By.css(compMain.inBasketItem));
            return elements.length;
        } catch (error) {
            console.error('Error in getItemQty:', error);
            throw error;
        }
    }

    async verifyItemQty(expectedQty: number) {
        try {
            const actualQty = await this.getItemQty();
            assert.equal(actualQty, expectedQty, `Expected quantity '${expectedQty}', but found '${actualQty}'`);
        } catch (error) {
            console.error('Error in verifyItemQty:', error);
            throw error;
        }
    }

    // ---INTERACTION--- ------------->>>
    async insertText(locator: By, text: string) {
        try {
            // Wait for the element to be located and interactable
            const element = await this.driver.wait(until.elementLocated(locator), 5000);

            // Clear the input
            await element.clear();

            // Send the text
            await element.sendKeys(text);

            // Optionally, wait for the value attribute to reflect the new text
            await this.driver.wait(() => element.getAttribute('value').then(value => value === text), 5000);

            // Assert that the input's value is equal to the text
            const loginInput = await element.getAttribute('value');
            assert.equal(loginInput, text, `The input should be '${text}' but found '${loginInput}'`);
        } catch (error) {
            console.error('Error in insertText:', error);
            throw error;
        }
    }

    async click(locator: By) {
        try {
            // Wait for the element to be located and clickable
            const element = await this.driver.wait(until.elementLocated(locator), 5000);
            await this.driver.wait(until.elementIsEnabled(element), 5000);

            // Perform the click action
            await element.click();
        } catch (error) {
            console.error('Error in click:', error);
            throw error;
        }
    }

}
