const fs = require('fs');

function replaceAlerts(filePath) {
  if (!fs.existsSync(filePath)) return;
  let code = fs.readFileSync(filePath, 'utf8');
  
  // Replace simple onClick={() => alert('...')} with coming soon message
  code = code.replace(/onClick=\{\(\) => alert\([^)]+\)\}/g, 'onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }}');
  
  fs.writeFileSync(filePath, code);
}

replaceAlerts('src/components/DevelopersSection.tsx');
replaceAlerts('src/components/DevelopersPage.tsx');
