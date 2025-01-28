const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',
  retries: 1,
  timeout: 60000,
  use: {
    baseURL: process.env.BASE_URL || 'https://testing.maxistime.com',
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
  },
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
};
