const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

if (!code.includes('href="/home#partnerships"')) {
  code = code.replace(
    '<li className="hover:text-electric-blue cursor-pointer">\n                   <a href="/home#team">Team</a>',
    '<li className="hover:text-electric-blue cursor-pointer">\n                   <a href="/home#team">Team</a>\n                </li>\n                <li className="hover:text-electric-blue cursor-pointer">\n                   <a href="/home#partnerships">Partnerships</a>'
  );
  
  // also check if it uses /#team or /home#team
  code = code.replace(
    '<li className="hover:text-electric-blue cursor-pointer">\n                   <a href="/#team">Team</a>',
    '<li className="hover:text-electric-blue cursor-pointer">\n                   <a href="/#team">Team</a>\n                </li>\n                <li className="hover:text-electric-blue cursor-pointer">\n                   <a href="/home#partnerships">Partnerships</a>'
  );
  fs.writeFileSync('src/components/Layout.tsx', code);
}
