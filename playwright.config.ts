import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://staging.racefriends.tripnride.com.br',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});