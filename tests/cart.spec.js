const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/loginPage.js');
const testData = require('../utils/testData.js');
require('dotenv').config();

test('Add product to cart', async ({page}) => {
    await page.goto(process.env.BASE_URL);
    const loginInst = new LoginPage(page);
    await loginInst.login(process.env.USERNAME, process.env.PASSWORD);
    await page.getByText('Add to cart').first().click();
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
})