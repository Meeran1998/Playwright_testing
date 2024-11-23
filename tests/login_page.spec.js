import { test, expect, chromium } from '@playwright/test';
import path from 'path';
test('talentkeepers', async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto('https://talentkeepers.com/');
  await page.getByRole('link', { name: 'Get Started Today' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Mohamed');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Meeran');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('Company Name').fill('Gyan');
  await page.getByPlaceholder('Company Name').press('Tab');
  await page.getByPlaceholder('Job Title').fill('software');
  await page.getByPlaceholder('Job Title').press('Tab');
  await page.locator('section').click();
  await page.screenshot({ path: `test.png` });
  const text = await expect(
    page.getByText('TalentKeepers has been')
  ).toBeVisible();
  console.log(text);
  await page.goto('https://talentkeepers.com/');
  await page.close();
});
