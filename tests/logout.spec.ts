import { test, expect } from '@playwright/test';

test('Logout › Usuário consegue fazer logout com sucesso', async ({ page }) => {
  // Acessa a página de login
  await page.goto('https://racefriends.tripnride.com.br/login');

  // Aguarda os campos aparecerem
  await page.waitForSelector('#email');

  // Realiza o login
  await page.fill('#email', 'agostinho.jefferson@gmail.com');
  await page.fill('#password', 'jefferson');
  await page.locator('button[type="submit"]').click();

  // Aguarda o redirecionamento
  await expect(page).toHaveURL(/.*\/app/);

  // Aguarda botão "Sair" aparecer e clica
  const logoutButton = page.locator('div[role="button"]:has-text("Sair")');
  await logoutButton.first().waitFor();
  await logoutButton.first().click();

  // Aguarda o redirecionamento para a tela de login
  await expect(page).toHaveURL(/.*\/login$/);
});