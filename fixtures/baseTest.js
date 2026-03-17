const base = require('@playwright/test');
const LoginPage = require('../pages/loginPage.js');

exports.test = base.test.extend({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
})

base.test.afterEach(async ({page}, testInfo) => {
    const status = testInfo.status;

    //screenshot based on test status
    const screenshot = page.screenshot();

    await testInfo.attach(`${testInfo.title}-${status}`, {
        body: await screenshot,
        contentType: 'image/png'
    })
})

exports.expect = base.expect;