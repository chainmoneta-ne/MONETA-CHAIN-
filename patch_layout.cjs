const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');
const searchString = '<RouterLink to="/ecosystem">Explore Ecosystem</RouterLink>\n                </li>';
const replaceString = '<RouterLink to="/ecosystem">Explore Ecosystem</RouterLink>\n                </li>\n                <li className="hover:text-electric-blue cursor-pointer">\n                  <RouterLink to="/official-links">Official Links</RouterLink>\n                </li>';
code = code.replace(searchString, replaceString);
fs.writeFileSync('src/components/Layout.tsx', code);
