const {test, expect} = require('../fixtures/baseTest.js');
require('dotenv').config();

test('@regression Check if Sidebar Menu is visible after clicking the burger menu button', async ({page, loginPage}) => {
    await page.goto(process.env.BASE_URL);
    await loginPage.login(process.env.SAUCE_USER, process.env.SAUCE_PASSWORD);
    await expect(page.locator('#react-burger-menu-btn')).toBeVisible();
    await page.locator('#react-burger-menu-btn').click();
    await page.waitForTimeout(1000);
    await expect(page.locator('.bm-menu-wrap')).toBeVisible();
})