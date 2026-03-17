const {test, expect} = require('../fixtures/baseTest.js');
require('dotenv').config();

test('@smoke Login test', async ({page, loginPage}) => {
    await page.goto(process.env.BASE_URL);
    // console.log(process.env.SAUCE_USER, process.env.SAUCE_PASSWORD);
    await loginPage.login(process.env.SAUCE_USER, process.env.SAUCE_PASSWORD);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})