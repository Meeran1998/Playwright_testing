import { test, expect, chromium } from '@playwright/test';
import path from 'path';
test('talentkeepers', async () => {
  const browser = await chromium.launch();

  const page = await browser.newPage();

  await page.goto('https://talentkeepers.com/');
  await page.getByRole('link', { name: 'Get Started Today' }).click();
  const values = ['Mohamed', 'Meeran', 'Gyan', 'software'];

  const placeholders = ['First Name', 'Last Name', 'Company Name', 'Job Title'];

  for (let i = 0; i < values.length; i++) {
    const input = page.getByPlaceholder(placeholders[i]);
    await input.click();
    await input.fill(values[i]);
    await input.press('Tab'); // Move to the next field
  }
  await page.locator('section').click();
  await page.screenshot({ path: `test.png` });
  const text = await expect(
    page.getByText('TalentKeepers has been')
  ).toBeVisible();
  console.log(text);
  await page.goto('https://talentkeepers.com/');
  await page.close();
});
