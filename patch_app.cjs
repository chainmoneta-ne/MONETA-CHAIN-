const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes('import { PartnershipsSection }')) {
  code = code.replace(
    "import { TeamSection } from './components/TeamSection';",
    "import { TeamSection } from './components/TeamSection';\nimport { PartnershipsSection } from './components/PartnershipsSection';"
  );
}

if (!code.includes('<PartnershipsSection />')) {
  code = code.replace(
    "<TeamSection />",
    "<TeamSection />\n      <PartnershipsSection />"
  );
}

fs.writeFileSync('src/App.tsx', code);
