import https from 'https';

function checkLogo(filename) {
  const url = `https://cjmjasvqbtpuffvnwqky.supabase.co/storage/v1/object/public/LucasLimaLogo/${filename}`;
  console.log(`Checking: ${url}`);
  
  https.get(url, (res) => {
    console.log(`Status Code for ${filename}: ${res.statusCode}`);
    if (res.statusCode === 200) {
      console.log(`[SUCCESS] File found! Content-Type: ${res.headers['content-type']}`);
    } else {
      console.log(`[FAILED] File not found.`);
    }
  }).on('error', (err) => {
    console.error(`Error checking ${filename}:`, err.message);
  });
}

const filesToCheck = [
  'Monograma-Negativa-Rotar.png',
  'Monograma-Negativa-Rotar.svg',
  'monograma-negativa-rotar.png',
  'monograma-negativa-rotar.svg'
];

filesToCheck.forEach(checkLogo);
