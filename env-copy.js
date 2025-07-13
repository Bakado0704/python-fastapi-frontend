import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFile = path.join(
  __dirname,
  'env',
  `.env.${process.env.APP_ENV}`,
);

const destFile = path.join(__dirname, '.env.local');

const copyFileSync = () => {
  if (!fs.existsSync(envFile)) {
    console.error(`Error: ${envFile} does not exist.`);
    process.exit(1);
  }
  fs.copyFileSync(envFile, destFile);
  console.log(`Copied ${envFile} to ${destFile}`);
};

copyFileSync();
