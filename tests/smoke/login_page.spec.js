const { test, expect } = require('@playwright/test');
const LoginPage = require('../../resources/page_objects/login');

test.describe('Smoke Test - Login', () => {
  test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('timon@mailsac.com', 'Test@123');
  });
});