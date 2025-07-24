import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    // ✅ Adicione esta linha para navegar até a página correta
    await page.goto('https://racefriends.tripnride.com.br/login');
    loginPage = new LoginPage(page);
  });

  test('Login com credenciais inválidas', async () => {
    await loginPage.login('usuario@invalido.com', 'senhaerrada');
    // Aqui você pode verificar uma mensagem de erro, se existir
    // Exemplo: await expect(page.getByText('Credenciais inválidas')).toBeVisible();
  });

  test('Validação de campos obrigatórios', async () => {
    await loginPage.clickLogin();
    // Aqui você pode verificar se mensagens de campo obrigatório aparecem
    // Exemplo: await expect(page.locator('#email-error')).toBeVisible();
  });
});