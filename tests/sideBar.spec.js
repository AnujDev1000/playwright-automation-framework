
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

test.describe('Sidebar Menu Links', {tag: '@smoke'} , () => {
    const links = [
        {name: 'All Items', url: 'https://www.saucedemo.com/inventory.html'},
        {name: 'About', url: 'https://saucelabs.com/'},
        {name: 'Logout', url: 'https://www.saucedemo.com/'},
        {name: 'Reset App State', url: 'https://www.saucedemo.com/inventory.html'}
    ]

    test.beforeEach(async ({page, loginPage}) => {
        await page.goto(process.env.BASE_URL);
        await loginPage.login(process.env.SAUCE_USER, process.env.SAUCE_PASSWORD);
        await page.locator('#react-burger-menu-btn').click();
        await page.waitForTimeout(1000);
    })

    let linkTest = (link) => {
         test(`Check if ${link.name} link is working`, async ({page, loginPage}) => {
            await page.getByRole('link', {name: link.name}).click();
            await page.waitForTimeout(1000);
            await expect(page).toHaveURL(link.url);
        });
    };

    for (const link of links) {
        linkTest(link);
    }
    
})