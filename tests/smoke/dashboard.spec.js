const { test, expect } = require('@playwright/test');
const DashboardPage = require('../../resources/page_objects/dashboard');

test.describe('Smoke Test - Dashboard', () => {
  test.use({ storageState: 'storageState.json' });

  test('Verify Heading', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await page.goto('https://testing.maxistime.com/apps/user/dashboard');
    await page.waitForURL(/dashboard/);
    const dashboardHeading = await dashboardPage.getHeading();
    console.log("Dashboard heading:", dashboardHeading);

    expect(dashboardHeading).toContain('Dashboard');
  });
});
