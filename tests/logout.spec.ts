
import { test, expect } from '@playwright/test';

test.describe('Logout', () => {
  test('Usuário consegue fazer logout com sucesso', async ({ page }) => {
    // Acessa a página de login
    await page.goto('https://racefriends.tripnride.com.br/login');

    // Preenche e-mail e senha válidos
    await page.locator('#email').fill('agostinho.jefferson@gmail.com');
    await page.locator('#password').fill('jefferson');

    // Clica no botão de login
    await page.getByRole('button', { name: 'Entrar' }).click();

    // Aguarda redirecionamento para a página logada
    await expect(page).toHaveURL(/.*\/app/);

    // Clica no botão de menu (avatar)
    await page.locator('button[aria-label="open drawer"]').click();

    // Aguarda e clica no botão de logout
    await page.getByText('Sair').first().click();

    // Valida que foi redirecionado de volta à tela de login
    await expect(page).toHaveURL(/.*\/login$/);
  });
});
