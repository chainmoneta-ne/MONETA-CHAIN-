const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

code = code.replace(
  'const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n\n  useEffect(() => {\n    setIsMobileMenuOpen(false);\n  }, [location.pathname]);\n\n  const location = useLocation();',
  'const location = useLocation();\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n\n  useEffect(() => {\n    setIsMobileMenuOpen(false);\n  }, [location.pathname]);'
);

fs.writeFileSync('src/components/Layout.tsx', code);
