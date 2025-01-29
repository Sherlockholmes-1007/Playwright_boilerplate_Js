const dashboard_elements = require('../selectors/dashboard_elements');

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.selectors = dashboard_elements.dashboardPage;
  }

  async getHeading() {
    await this.page.waitForSelector(this.selectors.heading, { state: 'visible' });
    return await this.page.textContent(this.selectors.heading);
  }
}

module.exports = DashboardPage;
