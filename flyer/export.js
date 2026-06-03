const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();

  const flyerPath = 'file://' + path.resolve(__dirname, 'flyer.html');
  await page.goto(flyerPath, { waitUntil: 'networkidle0' });

  // A5 in px at 150 dpi: 148mm x 210mm
  await page.setViewport({ width: 559, height: 794, deviceScaleFactor: 2 });

  // PNG
  const flyerEl = await page.$('.flyer');
  await flyerEl.screenshot({ path: path.resolve(__dirname, 'flyer.png'), type: 'png' });
  console.log('✓ flyer.png');

  // PDF (A5)
  await page.pdf({
    path: path.resolve(__dirname, 'flyer.pdf'),
    width: '148mm',
    height: '210mm',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  console.log('✓ flyer.pdf');

  await browser.close();
})();
