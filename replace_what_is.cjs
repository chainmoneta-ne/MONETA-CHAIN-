const fs = require('fs');

const filesToUpdate = ['src/components/AboutSection.tsx', 'src/components/AboutPage.tsx'];

const replacement = `        {/* What is MONETA CHAIN? */}
        <FadeIn delay={0.2} className="max-w-4xl mx-auto mb-20 text-gray-300 font-display text-lg leading-relaxed">
          <h2 className="font-heading text-3xl font-black text-white uppercase tracking-wider mb-6">What is MONETA CHAIN?</h2>
          <div className="space-y-6">
            <p className="text-xl text-electric-blue font-bold leading-relaxed mb-6">
              MONETA CHAIN is a hybrid blockchain infrastructure designed to support public applications, institutional environments, and consortium-based networks within one connected digital ecosystem.
            </p>
            <p>
              MONETA CHAIN is a blockchain infrastructure designed to connect people, businesses, developers, and institutions through a secure and scalable digital network.
            </p>
            <p>
              It provides the foundation for blockchain-based applications, digital assets, transactions, and industry-specific services while supporting different levels of network access and governance.
            </p>
            <p>
              MONETA CHAIN is designed around a hybrid architecture, bringing together public blockchain accessibility, controlled environments for institutions, and trusted consortium-based participation within one connected ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
              <div className="glass-card p-6 border-white/5 bg-black/40 flex flex-col h-full">
                <span className="text-electric-blue font-bold text-sm mb-3">01 — PUBLIC NETWORK</span>
                <p className="text-gray-300 text-sm leading-relaxed">Open blockchain applications and digital experiences.</p>
              </div>
              <div className="glass-card p-6 border-white/5 bg-black/40 flex flex-col h-full">
                <span className="text-electric-blue font-bold text-sm mb-3">02 — INSTITUTIONAL INFRASTRUCTURE</span>
                <p className="text-gray-300 text-sm leading-relaxed">Controlled environments for organizations and enterprises.</p>
              </div>
              <div className="glass-card p-6 border-white/5 bg-black/40 flex flex-col h-full">
                <span className="text-electric-blue font-bold text-sm mb-3">03 — CONSORTIUM NETWORKS</span>
                <p className="text-gray-300 text-sm leading-relaxed">Trusted networks connecting approved institutions, validators, and industry participants.</p>
              </div>
            </div>
            
            <p className="font-bold text-xl text-white mt-12 text-center tracking-wide">
              One infrastructure. Multiple environments. Connected possibilities.
            </p>
          </div>
        </FadeIn>`;

for (const file of filesToUpdate) {
  let content = fs.readFileSync(file, 'utf8');
  
  const startMarker = "{/* What is MONETA CHAIN? */}";
  const endMarker = "</FadeIn>";
  
  const startIndex = content.indexOf(startMarker);
  if (startIndex === -1) {
    console.log("Could not find start marker in " + file);
    continue;
  }
  
  // Find the closing FadeIn that corresponds to this section
  let nextFadeInIndex = content.indexOf("FadeIn", startIndex + startMarker.length);
  let closingIndex = content.indexOf(endMarker, nextFadeInIndex);
  if (closingIndex === -1) {
    console.log("Could not find end marker in " + file);
    continue;
  }
  
  const contentToReplace = content.substring(startIndex, closingIndex + endMarker.length);
  
  content = content.replace(contentToReplace, replacement);
  fs.writeFileSync(file, content);
  console.log("Updated " + file);
}
