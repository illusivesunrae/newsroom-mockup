// ./scripts/build-icons.js
const { buildIcons } = require('rivet-icons');

async function buildCustomIcons () {
  await buildIcons({
    icons: [
      'link-external',
      'plus'
    ],
    include: [
      './src/assets/*',
      './favicon.svg'
    ],
    out: 'src/img/icons'
  });
}

buildCustomIcons();