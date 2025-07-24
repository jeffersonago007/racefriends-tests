import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page', () => {

  test('Login com credenciais inválidas', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('email@falso.com', 'senhaerrada');
    await expect(page.locator('text=Credenciais inválidas')).toBeVisible();
  });

  test('Validação de campos obrigatórios', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.clickLogin();
    await expect(page.locator('text=Email é obrigatório')).toBeVisible();
    await expect(page.locator('text=Senha é obrigatória')).toBeVisible();
  });

});
