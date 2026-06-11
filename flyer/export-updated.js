const puppeteer = require('puppeteer');
const path = require('path');
const { execSync } = require('child_process');

const flyers = [
  {
    html: path.resolve(__dirname, 'flyer-5.html'),
    outBase: path.resolve(__dirname, 'flyer-5'),
    type: 'a5',
  },
  {
    html: path.resolve(__dirname, 'privatkunden/printout/front.html'),
    outBase: path.resolve(__dirname, 'privatkunden/printout/front'),
    type: 'a5',
  },
  {
    html: path.resolve(__dirname, 'privatkunden/story/story.html'),
    outBase: path.resolve(__dirname, 'privatkunden/story/story'),
    type: 'story',
  },
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--allow-file-access-from-files'],
  });

  for (const { html, outBase, type } of flyers) {
    const page = await browser.newPage();
    await page.goto('file://' + html, { waitUntil: 'networkidle0' });

    const isStory = type === 'story';
    const selector = isStory ? '.story' : '.flyer';

    if (isStory) {
      await page.setViewport({ width: 450, height: 800, deviceScaleFactor: 3 });
    } else {
      await page.setViewport({ width: 559, height: 794, deviceScaleFactor: 1748 / 519 });
    }

    const el = await page.$(selector);
    const rawPng = outBase + '_raw.png';
    const outPng = outBase + '.png';
    await el.screenshot({ path: rawPng, type: 'png' });

    if (!isStory) {
      execSync(`sips "${rawPng}" --cropToHeightWidth 2480 1748 --out "${outPng}"`);
      execSync(`rm "${rawPng}"`);
    } else {
      execSync(`mv "${rawPng}" "${outPng}"`);
    }
    console.log(`✓ ${path.basename(outPng)}`);

    if (!isStory) {
      await page.pdf({
        path: outBase + '.pdf',
        width: '148mm',
        height: '210mm',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
      });
      console.log(`✓ ${path.basename(outBase)}.pdf`);
    }

    await page.close();
  }

  await browser.close();
})();
