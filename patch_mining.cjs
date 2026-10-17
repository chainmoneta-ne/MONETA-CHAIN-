const fs = require('fs');
let code = fs.readFileSync('src/components/MiningPage.tsx', 'utf8');

code = code.replace(/<a href="#"/g, '<a href="#" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon"');

fs.writeFileSync('src/components/MiningPage.tsx', code);
