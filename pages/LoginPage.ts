
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://racefriends.tripnride.com.br/app/login');
    await this.page.waitForLoadState('networkidle'); // Aguarda o carregamento total da página
  }

  async fillEmail(email: string) {
    await this.page.locator('#email').fill(email);
  }

  async fillPassword(password: string) {
    await this.page.locator('#password').fill(password);
  }

  async clickLogin() {
    await this.page.locator('button[type="submit"]:has-text("Entrar")').click();
  }

  async login(email: string, password: string) {
    await this.goto();
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}
