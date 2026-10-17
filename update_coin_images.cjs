const fs = require('fs');

// 1. Update TokenSection.tsx
let tokenSec = fs.readFileSync('src/components/TokenSection.tsx', 'utf8');
if (!tokenSec.includes('moneta_coin_asset')) {
  tokenSec = "import coinImg from '../assets/images/moneta_coin_asset_1788196434934.jpg';\n" + tokenSec;
  tokenSec = tokenSec.replace(
    'src="/moneta-coin-logo.png"',
    'src={coinImg} referrerPolicy="no-referrer"'
  );
  fs.writeFileSync('src/components/TokenSection.tsx', tokenSec);
  console.log("Updated TokenSection.tsx");
}

// 2. Update TokenomicsPage.tsx
let tokenomics = fs.readFileSync('src/components/TokenomicsPage.tsx', 'utf8');
if (!tokenomics.includes('moneta_coin_asset')) {
  tokenomics = "import coinImg from '../assets/images/moneta_coin_asset_1788196434934.jpg';\n" + tokenomics;
  tokenomics = tokenomics.replace(
    '<h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">',
    `<div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-golden-yellow rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img 
                  src={coinImg} 
                  alt="MONETA COIN (MINT)" 
                  referrerPolicy="no-referrer"
                  className="relative w-44 h-44 md:w-56 md:h-56 object-cover rounded-full border-2 border-electric-blue/40 shadow-[0_0_50px_rgba(0,102,255,0.4)]"
                />
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">`
  );
  fs.writeFileSync('src/components/TokenomicsPage.tsx', tokenomics);
  console.log("Updated TokenomicsPage.tsx");
}

// 3. Update PreSalePage.tsx
let presale = fs.readFileSync('src/components/PreSalePage.tsx', 'utf8');
if (!presale.includes('moneta_coin_asset')) {
  presale = "import coinImg from '../assets/images/moneta_coin_asset_1788196434934.jpg';\n" + presale;
  presale = presale.replace(
    '<h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">',
    `<div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-golden-yellow to-electric-blue rounded-full blur-lg opacity-70"></div>
                <img 
                  src={coinImg} 
                  alt="MONETA Pre-Sale" 
                  referrerPolicy="no-referrer"
                  className="relative w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-2 border-golden-yellow/40 shadow-[0_0_40px_rgba(255,184,0,0.3)]"
                />
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">`
  );
  fs.writeFileSync('src/components/PreSalePage.tsx', presale);
  console.log("Updated PreSalePage.tsx");
}

// 4. Update MiningPage.tsx
let mining = fs.readFileSync('src/components/MiningPage.tsx', 'utf8');
if (!mining.includes('moneta_coin_asset')) {
  mining = "import coinImg from '../assets/images/moneta_coin_asset_1788196434934.jpg';\n" + mining;
  mining = mining.replace(
    '<h1 className="font-heading text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">',
    `<div className="flex justify-center mb-8">
              <img 
                src={coinImg} 
                alt="MONETA Mining" 
                referrerPolicy="no-referrer"
                className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-2 border-emerald-green/40 shadow-[0_0_40px_rgba(0,255,136,0.3)]"
              />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">`
  );
  fs.writeFileSync('src/components/MiningPage.tsx', mining);
  console.log("Updated MiningPage.tsx");
}

// 5. Update EcosystemSection.tsx so VERA AI uses the actual VERA AI avatar
let eco = fs.readFileSync('src/components/EcosystemSection.tsx', 'utf8');
if (!eco.includes('vera_black_woman_avatar')) {
  eco = "import veraAvatar from '../assets/images/vera_black_woman_avatar_1779390780706.png';\n" + eco;
  eco = eco.replace(
    'icon: <img src="/moneta-coin-logo.png" alt="VERA AI" className="w-8 h-8 object-contain" />',
    'icon: <img src={veraAvatar} alt="VERA AI" referrerPolicy="no-referrer" className="w-8 h-8 rounded-full object-cover" />'
  );
  eco = eco.replace(
    '<img src="/moneta-coin-logo.png" alt="VERA AI" className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,255,255,0.3)] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />',
    '<img src={veraAvatar} alt="VERA AI" referrerPolicy="no-referrer" className="w-full h-full max-h-[380px] rounded-2xl object-cover border border-royal-purple/30 shadow-[0_0_40px_rgba(138,43,226,0.3)]" />'
  );
  fs.writeFileSync('src/components/EcosystemSection.tsx', eco);
  console.log("Updated EcosystemSection.tsx");
}
