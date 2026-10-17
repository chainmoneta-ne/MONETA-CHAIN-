const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// Just declare `const location = useLocation();` at the very beginning of the function
code = code.replace(
  'export function Layout({ children }: { children: React.ReactNode }) {',
  'export function Layout({ children }: { children: React.ReactNode }) {\n  const location = useLocation();'
);

// Remove the old `const location = useLocation();`
code = code.replace('const location = useLocation();', ''); // The first replace string match should be the one we just added? Wait, no.

fs.writeFileSync('src/components/Layout.tsx', code);
