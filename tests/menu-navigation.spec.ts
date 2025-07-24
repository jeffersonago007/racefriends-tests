import { test, expect } from '@playwright/test';

test.describe('Navegação pelo menu lateral', () => {
  test('Usuário consegue acessar todas as páginas do menu lateral', async ({ page }) => {
    await page.goto('https://racefriends.tripnride.com.br/login');

    // Aguarda o campo de e-mail estar visível
    await page.waitForSelector('#email', { timeout: 10000 });
    await page.fill('#email', 'agostinho.jefferson@gmail.com');
    await page.fill('#password', 'jefferson');
    await page.click('button[type="submit"]');

    // Aguarda redirecionamento para a área logada
    await expect(page).toHaveURL(/.*\/app/, { timeout: 10000 });

    // Validação do menu: Classificação
    await page.click('a[href="/app/ranking"]');
    await expect(page).toHaveURL(/.*\/app\/ranking/);
    await expect(page.locator('text=Classificação')).toBeVisible();

    // Validação do menu: Pilotos
    await page.click('a[href="/app/pilots"]');
    await expect(page).toHaveURL(/.*\/app\/pilots/);
    await expect(page.locator('text=Pilotos')).toBeVisible();

    // Validação do menu: Etapas
    await page.click('a[href="/app/stages"]');
    await expect(page).toHaveURL(/.*\/app\/stages/);
    await expect(page.locator('text=Etapas')).toBeVisible();

    // Validação do menu: Resultados
    await page.click('a[href="/app/results"]');
    await expect(page).toHaveURL(/.*\/app\/results/);
    await expect(page.locator('text=Resultados')).toBeVisible();

    // Validação do menu: Parceiros
    await page.click('a[href="/app/partners"]');
    await expect(page).toHaveURL(/.*\/app\/partners/);
    await expect(page.locator('text=Parceiros')).toBeVisible();

    // Validação do menu: Suporte
    await page.click('a[href="/app/support"]');
    await expect(page).toHaveURL(/.*\/app\/support/);
    await expect(page.locator('text=Suporte')).toBeVisible();
  });
});
