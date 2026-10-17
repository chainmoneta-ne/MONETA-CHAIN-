const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// The file currently has this section:
/*
export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
*/

code = code.replace(
  'const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);',
  'const location = useLocation();\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);'
);
code = code.replace('  const location = useLocation();\n\n  useEffect(() => {\n    window.scrollTo(0, 0);\n  }, [location.pathname]);', '');
code = code.replace('  const location = useLocation();\n  useEffect(() => {\n    window.scrollTo(0, 0);\n  }, [location.pathname]);', '');

fs.writeFileSync('src/components/Layout.tsx', code);
