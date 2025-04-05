import {filesize} from "filesize";
import fs from 'fs/promises';
import path from 'path';

async function getFileSize(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return filesize(stats.size);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    return 'N/A';
  }
}

async function analyzeDirectory(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isFile() && (entry.name.endsWith('.js') || entry.name.endsWith('.jsx'))) {
        const size = await getFileSize(fullPath);
        console.log(`${fullPath}: ${size}`);
      } else if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'dist' && !entry.name.startsWith('.')) {
        console.log(`\n--- Directory: ${fullPath} ---`);
        await analyzeDirectory(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory: ${dir}`, error);
  }
}

async function main() {
  console.log('--- Analyzing Source File Sizes ---');
  await analyzeDirectory('./src');
  // You could also analyze specific files or libraries if needed
  // const librarySize = await getFileSize('./node_modules/your-library/index.js');
  // console.log(`\n--- Library Size (approx.): ---`);
  // console.log(`./node_modules/your-library/index.js: ${librarySize}`);
}

main();