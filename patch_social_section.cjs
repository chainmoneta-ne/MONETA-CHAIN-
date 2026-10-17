const fs = require('fs');
let code = fs.readFileSync('src/components/SocialMediaSection.tsx', 'utf8');

code = code.replace(
  'href={social.link}', 
  'href={social.link} onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon"'
);

fs.writeFileSync('src/components/SocialMediaSection.tsx', code);
