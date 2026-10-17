const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// 1. Add state for mobile menu
if (!code.includes('isMobileMenuOpen')) {
  code = code.replace(
    'export function Layout({ children }: { children: React.ReactNode }) {',
    `import { Menu } from "lucide-react";\nexport function Layout({ children }: { children: React.ReactNode }) {\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n\n  useEffect(() => {\n    setIsMobileMenuOpen(false);\n  }, [location.pathname]);`
  );
}

// 2. Add Hamburger Button and Mobile Menu content
const navReplaceSearch = `<div className="flex items-center space-x-4">
            <RouterLink to="/waitlist" className="px-5 py-2.5 btn-primary hover:box-glow transition-all inline-block text-center mr-2">Join Waitlist</RouterLink>
          </div>
        </div>
      </nav>`;

const navReplaceContent = `<div className="flex items-center space-x-4">
            <RouterLink to="/waitlist" className="hidden md:inline-block px-5 py-2.5 btn-primary hover:box-glow transition-all text-center mr-2">Join Waitlist</RouterLink>
            <button aria-label="Toggle Mobile Menu" className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <XIconLucide /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-charcoal-black border-b border-white/10 absolute top-full left-0 right-0 max-h-[80vh] overflow-y-auto z-50 p-6 flex flex-col space-y-4 shadow-xl">
            <RouterLink to="/home" className="hover:text-electric-blue transition-colors font-medium">Home</RouterLink>
            <RouterLink to="/vera" className="hover:text-electric-blue transition-colors flex items-center space-x-2 font-medium"><span className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></span><span>VERA AI</span></RouterLink>
            <RouterLink to="/presale" className="hover:text-electric-blue transition-colors text-golden-yellow font-medium">Pre-Sale</RouterLink>
            <RouterLink to="/academy" className="hover:text-electric-blue transition-colors font-medium">Academy</RouterLink>
            <RouterLink to="/tokenomics" className="hover:text-electric-blue transition-colors font-medium">Tokenomics</RouterLink>
            <RouterLink to="/ecosystem" className="hover:text-electric-blue transition-colors font-medium">Ecosystem</RouterLink>
            <RouterLink to="/features" className="hover:text-electric-blue transition-colors font-medium">Features</RouterLink>
            <RouterLink to="/vision" className="hover:text-electric-blue transition-colors font-medium">Vision</RouterLink>
            <RouterLink to="/developers" className="hover:text-electric-blue transition-colors font-medium">Developers</RouterLink>
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col">
               <RouterLink to="/waitlist" className="px-5 py-3 btn-primary text-center w-full">Join Waitlist</RouterLink>
            </div>
          </div>
        )}
      </nav>`;

code = code.replace(navReplaceSearch, navReplaceContent);
fs.writeFileSync('src/components/Layout.tsx', code);
