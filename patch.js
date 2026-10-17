const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace("import { AcademyPage } from './components/AcademyPage';", "import { AcademyPage } from './components/AcademyPage';\nimport { OfficialLinksPage } from './components/OfficialLinksPage';");
code = code.replace('<Route path="/academy" element={<AcademyPage />} />', '<Route path="/academy" element={<AcademyPage />} />\n          <Route path="/official-links" element={<OfficialLinksPage />} />');
fs.writeFileSync('src/App.tsx', code);
