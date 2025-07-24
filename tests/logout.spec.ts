import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Logout', () => {
  test('Usuário consegue fazer logout com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('agostinho.jefferson@gmail.com', 'jefferson');

    // Aguarda o redirecionamento para a tela logada
    await expect(page).toHaveURL(/.*\/app$/);

    // Clica no botão de logout (ajuste o seletor conforme necessário)
    await page.locator('text=Sair').click();

    // Valida que foi redirecionado de volta à tela de login
    await expect(page).toHaveURL(/.*\/login$/);
  });
});
