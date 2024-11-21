const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto('https://talentkeepers.com/');
  await page.waitForNavigation();
  await page.screenshot({ path: `test.png` });

  await browser.close();
})();
