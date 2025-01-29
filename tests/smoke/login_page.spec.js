const { test, expect } = require('@playwright/test');
const LoginPage = require('../../resources/page_objects/login');

test.describe('Smoke Test - Login', {tag: '@smoke'}, () => {
  test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('timon@mailsac.com', 'Test@123');
    await page.waitForURL('/apps/user/dashboard');
    await page.context().storageState({ path: 'storageState.json' });

    expect(page.url()).toContain('dashboard');
  });
  });