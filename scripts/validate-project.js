const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const roots = ['App.js', 'src'];
const files = [];
function walk(p) {
  if (!fs.existsSync(p)) return;
  const stat = fs.statSync(p);
  if (stat.isFile()) {
    if (p.endsWith('.js')) files.push(p);
    return;
  }
  for (const child of fs.readdirSync(p)) walk(path.join(p, child));
}
roots.forEach(walk);
let failed = false;
for (const file of files) {
  try { execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' }); }
  catch (error) { failed = true; console.error(`Syntax error: ${file}`); console.error(error.stdout?.toString() || error.message); }
}
if (failed) process.exit(1);
console.log(`Healthome validation passed: ${files.length} JavaScript files checked.`);
