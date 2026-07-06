const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const indexPath = path.join(outDir, 'index.html');
const fallbackPath = path.join(outDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, fallbackPath);
  console.log('Successfully copied out/index.html to out/404.html for client-side routing fallback!');
} else {
  console.error('Error: out/index.html does not exist. Static export build might have failed.');
}
