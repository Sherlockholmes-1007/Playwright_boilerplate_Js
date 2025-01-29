const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 60000,

  use: {
    baseURL: process.env.BASE_URL || 'https://testing.maxistime.com',
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
  },

  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
});
