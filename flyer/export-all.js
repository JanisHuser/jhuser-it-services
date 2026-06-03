const puppeteer = require('puppeteer');
const path = require('path');

const flyers = ['flyer-1', 'flyer-2', 'flyer-3', 'flyer-4', 'flyer-5'];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox'],
  });

  for (const name of flyers) {
    const page = await browser.newPage();
    const filePath = 'file://' + path.resolve(__dirname, `${name}.html`);
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    // A5 at 300 dpi = 1748×2480px. Flyer CSS width = 519px → scale = 1748/519
    await page.setViewport({ width: 559, height: 794, deviceScaleFactor: 1748 / 519 });

    const flyerEl = await page.$('.flyer');
    const rawPng = path.resolve(__dirname, `${name}_raw.png`);
    const outPng = path.resolve(__dirname, `${name}.png`);
    await flyerEl.screenshot({ path: rawPng, type: 'png' });

    // Crop to exact A5 300dpi height
    const { execSync } = require('child_process');
    execSync(`sips ${rawPng} --cropToHeightWidth 2480 1748 --out ${outPng}`);
    execSync(`rm ${rawPng}`);
    console.log(`✓ ${name}.png`);

    await page.pdf({
      path: path.resolve(__dirname, `${name}.pdf`),
      width: '148mm',
      height: '210mm',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log(`✓ ${name}.pdf`);

    await page.close();
  }

  await browser.close();
})();
