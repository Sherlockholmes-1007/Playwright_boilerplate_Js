const selectors = require('../selectors/login_elements');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.selectors = selectors.loginPage;
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.waitForSelector(this.selectors.usernameInput, { state: 'visible' });
    await this.page.fill(this.selectors.usernameInput, username);
    await this.page.waitForSelector(this.selectors.passwordInput, { state: 'visible' });
    await this.page.fill(this.selectors.passwordInput, password);
    await this.page.waitForSelector(this.selectors.loginButton, { state: 'visible' });
    await this.page.click(this.selectors.loginButton);
  }
}

module.exports = LoginPage;
