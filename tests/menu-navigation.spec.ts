import { test, expect } from '@playwright/test';

test('Menu Lateral › Usuário navega por todos os itens do menu', async ({ page }) => {
  await page.goto('https://racefriends.tripnride.com.br/login');
  await page.waitForTimeout(1000);

  await page.locator('#email').waitFor({ state: 'visible', timeout: 5000 });
  await page.fill('#email', 'agostinho.jefferson@gmail.com');
  await page.fill('#password', 'jefferson');
  await page.getByRole('button', { name: 'Entrar' }).click();

  await expect(page).toHaveURL(/.*\/app$/);

  const menuItems = [
    { url: '/app/ranking', text: 'Classificação' },
    { url: '/app/pilots', text: 'Pilotos' },
    { url: '/app/stages', text: 'Etapas' },
    { url: '/app/results', text: 'Resultados' },
    { url: '/app/partners', text: 'Parceiros' },
    { url: '/app/support', text: 'Suporte' },
  ];

  for (const item of menuItems) {
    const links = page.locator(`a[href='${item.url}']`);
    const count = await links.count();
    const link = count > 1 ? links.nth(0) : links;
    await link.scrollIntoViewIfNeeded();
    await link.click();
    await page.waitForTimeout(1000);
    await expect(page.locator('body')).toContainText(item.text);
  }
});
