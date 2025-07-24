import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page', () => {
  test('Login com credenciais inválidas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('email@invalido.com', 'senhaerrada');
    await expect(page).toHaveURL(/.*login/);
  });

  test('Validação de campos obrigatórios', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clickLogin();
    await expect(page).toHaveURL(/.*login/);
  });
});