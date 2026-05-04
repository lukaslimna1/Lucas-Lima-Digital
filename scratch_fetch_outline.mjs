import https from 'https';
import fs from 'fs';

function downloadLogo(filename) {
  const url = `https://cjmjasvqbtpuffvnwqky.supabase.co/storage/v1/object/public/LucasLimaLogo/${filename}`;
  console.log(`Fetching ${filename} from ${url}...`);
  
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      fs.writeFileSync(`scratch_${filename}`, data);
      console.log(`Saved scratch_${filename}`);
    });
  }).on('error', (err) => {
    console.error(err);
  });
}

downloadLogo('Logo-Outline.svg');
