const {test, expect} = require('../fixtures/baseTest.js');
require('dotenv').config();

test('Login test', async ({page, loginPage}) => {
    await page.goto(process.env.BASE_URL);
    console.log(process.env.USER, process.env.PASSWORD);
    await loginPage.login(process.env.USER, process.env.PASSWORD);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})