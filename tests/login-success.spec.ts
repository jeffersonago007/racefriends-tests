import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page', () => {
  test('Login com credenciais válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('agostinho.jefferson@gmail.com', 'jefferson');

    // Espera que a URL mude após o login (ajuste conforme comportamento real)
    await expect(page).toHaveURL(/.*app|.*home|.*eventos/);
  });
});
