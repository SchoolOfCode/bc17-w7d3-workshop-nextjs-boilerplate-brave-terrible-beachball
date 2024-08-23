import { test, expect } from '@playwright/test';

test('home page is working', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/BTB Fireplace Palace/);
});

test('review text test', async ({ page }) => {
    //action
    await page.goto('http://localhost:3000/');
    await page.getByRole('button', { name: 'Scotland' }).click();
    //assert
    await expect(page.getByRole('p', { name: 'review-text' })).toBeVisible();

}
)
