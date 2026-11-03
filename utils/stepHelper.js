
async function attachFailure(page, testInfo, stepName) {
        const screenshot = await page.screenshot();

        await testInfo.attach(`FAIL-${stepName}`, {
            body: screenshot,
            contentType: 'image/png'
        });

        const htmlContent = await page.content();

        await testInfo.attach(`FAIL-${stepName} - HTML`, {
            body: htmlContent,
            contentType: 'text/html'
        });
    }