const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const whatsappPath = path.resolve(__dirname, '../public/logo-whatsapp.png');
const outPath = path.resolve(__dirname, '../public/logo-white-background.png');
const imgBase64 = fs.readFileSync(whatsappPath).toString('base64');

const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<style>* { margin: 0; padding: 0; } body { background: black; }</style>
</head>
<body>
<canvas id="c"></canvas>
<script>
(async () => {
  const img = new Image();
  img.src = 'data:image/png;base64,IMGDATA';
  await new Promise(r => img.onload = r);

  const canvas = document.getElementById('c');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const d = data.data;

  for (let i = 0; i < d.length; i += 4) {
    const r = d[i], g = d[i+1], b = d[i+2];
    const distToWhite = Math.sqrt((r-255)**2 + (g-255)**2 + (b-255)**2);
    const distToPurple = Math.sqrt((r-107)**2 + (g-92)**2 + (b-231)**2);
    if (distToWhite < distToPurple) {
      d[i] = 107; d[i+1] = 92; d[i+2] = 231;
    } else {
      d[i] = 255; d[i+1] = 255; d[i+2] = 255;
    }
  }

  ctx.putImageData(data, 0, 0);
  window._dataUrl = canvas.toDataURL('image/png');
})();
</script>
</body>
</html>`.replace('IMGDATA', imgBase64);

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => window._dataUrl, { timeout: 15000 });

  const dataUrl = await page.evaluate(() => window._dataUrl);
  const base64 = dataUrl.replace('data:image/png;base64,', '');
  fs.writeFileSync(outPath, Buffer.from(base64, 'base64'));

  console.log('✓ logo-white-background.png');
  await browser.close();
})();
