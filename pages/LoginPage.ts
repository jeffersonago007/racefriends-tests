import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
    await this.page.waitForSelector('input[name="email"]');
  }

  async fillEmail(email: string) {
    await this.page.getByLabel('Email *').fill(email);
  }

  async fillPassword(password: string) {
    await this.page.getByLabel('Senha *').fill(password);
  }

  async clickLogin() {
    await this.page.getByRole('button', { name: 'Entrar' }).click();
  }

  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}