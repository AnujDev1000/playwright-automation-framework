const { beforeEach } = require('node:test');
const { test, expect } = require('../fixtures/baseTest.js');
require('dotenv').config();

test('@regression Check if products are visible on All Products page', async ({page, loginPage}) => {
    await page.goto(process.env.BASE_URL);
    await loginPage.login(process.env.SAUCE_USER, process.env.SAUCE_PASSWORD);
    await expect(page.locator('.inventory_list')).toBeVisible();
    const childitems = await page.locator('.inventory_item');
    await expect(childitems).toHaveCount(6);
})

test.describe('check all products page are visible after clicking on the product link', {
    tags:"@regression"
} , () => {

    // test.beforeEach(async ({page, loginPage}) => {
    //     await page.goto(process.env.BASE_URL);
    //     await loginPage.login(process.env.SAUCE_USER, process.env.SAUCE_PASSWORD);
    // })

    test(`check products is visible after clicking on the product link`, async ({page, loginPage}, testInfo) => {
        await page.goto(process.env.BASE_URL);
        await loginPage.login(process.env.SAUCE_USER, process.env.SAUCE_PASSWORD);

        for (let i = 0; i < 6; i++) {
            const productHeading = await page.locator('.inventory_item').nth(i).innerText();
            console.log(productHeading);
            await testInfo.attach(`Product ${i+1}`, {
                body: productHeading,
                contentType: 'text/plain'
            });

            const screenshot = await page.screenshot({ path: `screenshots/product_${i+1}.png` });
            
            // await testInfo.attach(`Product ${i+1} Screenshot`, {
            //     body: screenshot,
            //     contentType: 'image/png'
            // });
            
            // await page.goBack();
            // await page.waitForTimeout(1000);
            // await expect(page.locator('.inventory_details_name')).toBeVisible();
        }
    })
})