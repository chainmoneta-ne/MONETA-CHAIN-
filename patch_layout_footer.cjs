const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// Replace social links with coming soon
const socialLinksRegex = /<a href="https:\/\/[^"]+" target="_blank" rel="noreferrer" className="w-10 h-10[^>]+>([^<]+)<\/a>/g;
code = code.replace(socialLinksRegex, (match, inner) => {
  return `<a href="#" onClick={(e) => { e.preventDefault(); alert("Official link coming soon."); }} title="Official link coming soon" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-electric-blue hover:text-electric-blue hover:bg-white/5 transition-all cursor-pointer" aria-label="Social media link - Coming Soon">${inner}</a>`;
});

// Fix hash links in footer
code = code.replace('<a href="/#team">Team</a>', '<RouterLink to="/home#team">Team</RouterLink>');
code = code.replace('<a href="/#social">Social Media</a>', '<RouterLink to="/home#social">Social Media</RouterLink>');
code = code.replace('<a href="/home#partnerships">Partnerships</a>', '<RouterLink to="/home#partnerships">Partnerships</RouterLink>');
code = code.replace('<a href="/#nodes">Validator Network</a>', '<RouterLink to="/home#nodes">Validator Network</RouterLink>');

// Fix GitHub and Block Explorer (currently just text inside <li>)
code = code.replace('<li className="hover:text-electric-blue cursor-pointer">GitHub</li>', '<li className="hover:text-electric-blue cursor-pointer"><a href="#" onClick={(e) => { e.preventDefault(); alert("Official link coming soon."); }} title="Official link coming soon">GitHub</a></li>');
code = code.replace('<li className="hover:text-electric-blue cursor-pointer">Block Explorer</li>', '<li className="hover:text-electric-blue cursor-pointer"><a href="#" onClick={(e) => { e.preventDefault(); alert("Official link coming soon."); }} title="Official link coming soon">Block Explorer</a></li>');

// Fix Header Links if any (socials in header?)
const headerSocialRegex = /<a href="https:\/\/[^"]+" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-electric-blue transition-colors">([^<]+)<\/a>/g;
code = code.replace(headerSocialRegex, (match, inner) => {
  return `<a href="#" onClick={(e) => { e.preventDefault(); alert("Official link coming soon."); }} title="Official link coming soon" className="text-gray-300 hover:text-electric-blue transition-colors" aria-label="Social media link - Coming Soon">${inner}</a>`;
});

fs.writeFileSync('src/components/Layout.tsx', code);
