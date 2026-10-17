const fs = require('fs');
let code = fs.readFileSync('src/components/LandingPage.tsx', 'utf8');
const searchString = '{ name: "Terms of Service", path: "/terms" },';
const replaceString = '{ name: "Terms of Service", path: "/terms" },\n    { name: "Official Links", path: "/official-links" },';
code = code.replace(searchString, replaceString);
fs.writeFileSync('src/components/LandingPage.tsx', code);
