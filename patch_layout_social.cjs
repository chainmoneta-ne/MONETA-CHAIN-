const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

const linkStart = '<a href="https://';
const newLinkStart = '<a href="#" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon" aria-label="Social media link - Coming Soon" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-electric-blue hover:text-electric-blue hover:bg-white/5 transition-all cursor-pointer" ';

code = code.replace(/<a href="https:\/\/x\.com"[^>]+>/g, newLinkStart + '>');
code = code.replace(/<a href="https:\/\/instagram\.com"[^>]+>/g, newLinkStart + '>');
code = code.replace(/<a href="https:\/\/facebook\.com"[^>]+>/g, newLinkStart + '>');
code = code.replace(/<a href="https:\/\/linkedin\.com"[^>]+>/g, newLinkStart + '>');
code = code.replace(/<a href="https:\/\/tiktok\.com"[^>]+>/g, newLinkStart + '>');
code = code.replace(/<a href="https:\/\/youtube\.com"[^>]+>/g, newLinkStart + '>');
code = code.replace(/<a href="https:\/\/telegram\.org"[^>]+>/g, newLinkStart + '>');
code = code.replace(/<a href="https:\/\/discord\.com"[^>]+>/g, newLinkStart + '>');

fs.writeFileSync('src/components/Layout.tsx', code);
