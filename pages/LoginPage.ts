
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://racefriends.tripnride.com.br/login');
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(5000); // tempo extra para carregar JavaScript dinâmico
    await this.page.screenshot({ path: 'login-page.png', fullPage: true });
  }

  async fillEmail(email: string) {
    await this.page.locator('#email').fill(email);
  }

  async fillPassword(password: string) {
    await this.page.locator('#password').fill(password);
  }

  async clickLogin() {
    await this.page.getByRole('button', { name: 'Entrar' }).click();
  }

  async login(email: string, password: string) {
    await this.goto();
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}
