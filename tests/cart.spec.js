const {test, expect} = require('../fixtures/baseTest.js');
require('dotenv').config();

test('@regression Add product to cart', async ({page, loginPage}) => {
    await page.goto(process.env.BASE_URL);
    await loginPage.login(process.env.SAUCE_USER, process.env.SAUCE_PASSWORD);
    await page.getByText('Add to cart').first().click();
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
})