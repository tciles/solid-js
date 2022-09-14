// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Solid App/);
  await expect(page).toHaveScreenshot("landing.png");
  // await page.screenshot({ path: 'screenshot.png' });
});
