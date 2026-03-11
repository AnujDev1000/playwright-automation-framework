const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/loginPage.js');
const testData = require('../utils/testData.js');
require('dotenv').config();

test('Login test', async ({page}) => {
    await page.goto(process.env.BASE_URL);
    const loginInst = new LoginPage(page);
    await loginInst.login(process.env.USERNAME, process.env.PASSWORD);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})