import fs from 'fs';
import path from 'path';

// Load ugcDocuments
// Wait, ugcDocuments.ts is TypeScript, I can just read it as string and extract fileUrl paths using a regex.

const content = fs.readFileSync('src/data/ugcDocuments.ts', 'utf-8');
const fileUrlRegex = /fileUrl:\s*'([^']+)'/g;

let match;
const urls = [];
while ((match = fileUrlRegex.exec(content)) !== null) {
  urls.push(match[1]);
}

let missing = [];
for (const url of urls) {
  // url is like 'files/ugc/filename.pdf'
  // we check if it exists in public/
  const p = path.join('public', url);
  if (!fs.existsSync(p)) {
    missing.push(p);
  }
}

const publicUgcDir = 'public/files/ugc';
const actualFiles = fs.existsSync(publicUgcDir) ? fs.readdirSync(publicUgcDir) : [];

let unused = [];
for (const file of actualFiles) {
  const p = 'files/ugc/' + file;
  if (!urls.includes(p)) {
    unused.push(p);
  }
}

console.log('Missing files referenced in registry:');
console.log(missing.length > 0 ? missing : 'None');

console.log('\nUnused files in public/files/ugc:');
console.log(unused.length > 0 ? unused : 'None');
