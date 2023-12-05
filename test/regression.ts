import { WebDriver, Builder, By } from 'selenium-webdriver';
import 'chromedriver';
import { runShoppingExp } from './shoppingExp';
import { invalidLoginTest } from './invalidLoginTest';
import { validLoginTest } from './validLoginTest';
import { restrictedAccessTest } from './restrictedAccessTest'


describe('Test Case: Regression Test', async function () {
    let driver: WebDriver;

    before(async function () {

    });

    after(async function () {

    });

    runShoppingExp();

    invalidLoginTest();

    validLoginTest();

    restrictedAccessTest();
});