import { expect, assert} from 'chai';
import { WebDriver, Builder, By } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import 'chromedriver';
import { Main } from '../src/components/main';
import { App } from '../src/app';
import { DataURL } from '../src/components/data/data';


let compMain = new Main();
let ObjApp: App;


describe('Web Automation', async function () {
  let driver: WebDriver;

  before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
      ObjApp = new App(driver); // Pass the driver instance here
      await driver.get('https://www.saucedemo.com'); // Navigate to the website
      await driver.manage().window().maximize(); // Maximize the browser window
  });

  after(async function () {
      await driver.quit(); // Close the driver after each test case
  });

  it('Step 1: Open Browser', async function () {
    await driver.sleep(1000);

    await ObjApp.verifyTitle();
  });

  it('Step 2: Login to application with invalid credentials', async function () {
    await ObjApp.insertText(By.id(compMain.userNameInput), 'invalid_user');

    await ObjApp.insertText(By.id(compMain.userPassInput), '123456');

    await ObjApp.click(By.id(compMain.loginButtion));
  });

  it('Step 3: Verify error message', async function () {
    await ObjApp.verifyErrorMsg();

    await ObjApp.click(By.css(compMain.errorMsgCloseBtn));
  });

  it('Step 4: Login to application with valid credentials', async function () {
    await ObjApp.insertText(By.id(compMain.userNameInput), 'standard_user');

    await ObjApp.insertText(By.id(compMain.userPassInput), 'secret_sauce');

    await ObjApp.click(By.id(compMain.loginButtion));
  });

  it('Step 5: Verify Successful Login', async function () {
    await ObjApp.verifyUrl(DataURL.saucedemoInventory);
  });
});

