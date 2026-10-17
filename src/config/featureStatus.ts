export type FeatureStatus = 'live' | 'under_development' | 'coming_soon' | 'temporarily_unavailable';

export interface HelpOption {
  id: string;
  label: string;
  description: string;
  category: 'general_info' | 'dev_update' | 'website_problem' | 'operational' | 'other';
}

export interface FeatureConfig {
  id: string;
  name: string;
  context: string; // e.g. "VALIDATOR", "EXPLORER", "WALLET"
  source: string; // "MONETA CHAIN"
  category: 'core' | 'infrastructure' | 'developer' | 'ecosystem' | 'services';
  status: FeatureStatus;
  headline: string;
  description: string;
  developmentNotice?: string;
  contextPrompt: string; // e.g., "Have a question about validators?"
  supportEnabled: boolean;
  helpOptions: HelpOption[];
  learnMorePath?: string;
  statusDetails?: string;
  dedicatedSupportSystem?: {
    name: string;
    path: string;
    tag: string;
    description: string;
  };
  confirmedInfo: string[];
}

/**
 * Global Frontend Feature Status Configuration
 *
 * Switch any feature status from 'under_development' to 'live' (or 'coming_soon' / 'temporarily_unavailable')
 * to automatically update all Support entry points, contextual modals, badges, and messaging site-wide.
 */
export const monetaChainFeatures: Record<string, FeatureConfig> = {
  support: {
    id: "support",
    name: "MONETA Support Central",
    context: "CENTRAL_SUPPORT",
    source: "MONETA CHAIN",
    category: "services",
    status: "live",
    headline: "Official MONETA CHAIN Support Hub",
    description: "The official, live central support system for MONETA CHAIN community, users, and ecosystem developers.",
    contextPrompt: "How can we help you today with MONETA CHAIN?",
    supportEnabled: true,
    confirmedInfo: [
      "MONETA Support operates live across the pre-launch, testnet, and mainnet phases.",
      "Support tickets automatically attach feature status and source context.",
      "Dedicated help flows for live features vs under-development components."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "Questions regarding the ecosystem, architecture, or roadmap.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Inquire about project milestones, testing timelines, and releases.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Report a broken link, visual glitch, or display issue.", category: "website_problem" },
      { id: "other", label: "OTHER INQUIRY", description: "Community partnerships, feedback, or custom inquiries.", category: "other" }
    ]
  },
  homepage: {
    id: "homepage",
    name: "MONETA CHAIN Portal",
    context: "HOMEPAGE",
    source: "MONETA CHAIN",
    category: "core",
    status: "live",
    headline: "Official Network Portal & Documentation",
    description: "The primary informational portal, whitepaper specs, and architectural overviews for MONETA CHAIN.",
    contextPrompt: "Need help with MONETA CHAIN?",
    supportEnabled: true,
    learnMorePath: "/home",
    confirmedInfo: [
      "Official website and verified portal for MONETA CHAIN.",
      "Full documentation of the Quantum Virtual Machine and hybrid architecture.",
      "Official social channels and verified contact points."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "Learn more about MONETA CHAIN vision and roadmap.", category: "general_info" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Submit feedback on website display or functionality.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "General community feedback or partnership inquiries.", category: "other" }
    ]
  },
  wallet: {
    id: "wallet",
    name: "MONETA Vault Wallet",
    context: "WALLET",
    source: "MONETA CHAIN",
    category: "core",
    status: "live",
    headline: "Native Non-Custodial Asset Management",
    description: "Secure digital wallet interface designed for managing MINT tokens, key generation, and account security.",
    contextPrompt: "Having trouble with your wallet or account?",
    supportEnabled: true,
    learnMorePath: "/waitlist",
    confirmedInfo: [
      "Designed as a non-custodial wallet with native multi-sig and biometrics integration.",
      "Pre-registration and beta testing waitlist is currently open.",
      "Private keys remain exclusively under user control."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "Learn about wallet security standards and supported devices.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Inquire on wallet beta access and release schedule.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Issues with wallet waitlist or portal registration.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "Custom inquiries regarding asset integration.", category: "other" }
    ]
  },
  explorer: {
    id: "explorer",
    name: "MONETA Explorer",
    context: "EXPLORER",
    source: "MONETA CHAIN",
    category: "infrastructure",
    status: "under_development",
    headline: "Blockchain Ledger & Transaction Explorer",
    description: "Real-time block inspection, transaction tracking, smart contract verification, and ledger telemetry.",
    developmentNotice: "Explorer functionality is currently under development. On-chain block visualization will launch alongside public testnet.",
    contextPrompt: "Need help finding blockchain data or explorer updates?",
    supportEnabled: true,
    learnMorePath: "/roadmap",
    confirmedInfo: [
      "Will support real-time block indexing, transaction hashes, gas metrics, and address lookups.",
      "Currently connected to internal test clusters during development phases.",
      "Public interface will be deployed prior to Mainnet launch."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "How the MONETA Explorer will index blocks and transactions.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Estimated timeline for public block explorer launch.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Report explorer preview or navigation issues.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "API indexing and raw telemetry integration inquiries.", category: "other" }
    ]
  },
  validators: {
    id: "validators",
    name: "Validators",
    context: "VALIDATOR",
    source: "MONETA CHAIN",
    category: "infrastructure",
    status: "under_development",
    headline: "Consensus Validators & Staking Network",
    description: "Proof-of-Stake validator coordination, anti-slashing AI protection, and institutional node operation.",
    developmentNotice: "Validator infrastructure is currently under development. Staking activation and validator onboarding will commence in upcoming testnet phases.",
    contextPrompt: "Have a question about validators?",
    supportEnabled: true,
    learnMorePath: "/developers",
    confirmedInfo: [
      "Consensus combines Proof-of-Stake with VERA AI predictive anti-slashing protection.",
      "Hardware specifications and validator licensing tiers are being calibrated.",
      "Validator registration will open during Phase 4 of the ecosystem roadmap."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "Validator hardware requirements and consensus rules.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Timeline for validator testnet onboarding.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Issues with registration forms or developer docs.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "Institutional validator partnerships and consortium inquiries.", category: "other" }
    ]
  },
  nodes: {
    id: "nodes",
    name: "Nodes & Network Infrastructure",
    context: "NODES",
    source: "MONETA CHAIN",
    category: "infrastructure",
    status: "under_development",
    headline: "Full Nodes, Archive Nodes & Light Clients",
    description: "P2P network infrastructure enabling distributed ledger synchronization and decentralized verification.",
    developmentNotice: "Node client software is currently under development. Docker containers and binary releases are undergoing internal security testing.",
    contextPrompt: "Have a question about running a MONETA CHAIN node?",
    supportEnabled: true,
    learnMorePath: "/developers",
    confirmedInfo: [
      "Will support 1-click Docker deployment and native Go/Rust binaries.",
      "Light client protocols enable low-spec verification on consumer hardware.",
      "Node operator documentation will be published in the Developer Portal."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "Node types, storage requirements, and bandwidth specs.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Availability of Docker images and CLI test builds.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Report website or technical documentation errors.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "Enterprise node hosting and infrastructure questions.", category: "other" }
    ]
  },
  smartContracts: {
    id: "smartContracts",
    name: "Smart Contracts & MQVM",
    context: "SMART_CONTRACTS",
    source: "MONETA CHAIN",
    category: "developer",
    status: "coming_soon",
    headline: "MONETA Quantum Virtual Machine (MQVM)",
    description: "Turing-complete, AI-enhanced smart contract engine supporting automated verification and high-speed execution.",
    developmentNotice: "Smart contract functionality is planned for a future release. Compiler toolchains and developer SDKs are currently being architected.",
    contextPrompt: "Have a question about MONETA smart contract capabilities?",
    supportEnabled: true,
    learnMorePath: "/developers",
    confirmedInfo: [
      "Engineered for high throughput with automated formal verification.",
      "EVM compatibility layers and native WebAssembly (Wasm) support.",
      "Smart contract testnet deployment planned post-core ledger stabilization."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "Smart contract architecture, language support, and security.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Smart contract SDK release timeline and grant opportunities.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Issues accessing developer guidelines or sample code.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "Ecosystem dApp migration and developer grants.", category: "other" }
    ]
  },
  developerTools: {
    id: "developerTools",
    name: "Developer Tools & SDKs",
    context: "DEVELOPER",
    source: "MONETA CHAIN",
    category: "developer",
    status: "under_development",
    headline: "APIs, CLI & Multi-Language SDKs",
    description: "Comprehensive developer toolkits for TypeScript, Python, Rust, Go, and REST/GraphQL APIs.",
    developmentNotice: "Developer SDKs and API endpoints are currently under development. Pre-registration for the developer sandbox is open.",
    contextPrompt: "Need help developing with MONETA CHAIN?",
    supportEnabled: true,
    learnMorePath: "/developers",
    confirmedInfo: [
      "Developer Code of Conduct and Registration portal are currently live.",
      "TypeScript and Python SDK packages are undergoing internal test cycles.",
      "Interactive API playground will open with public testnet."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "Supported programming languages, libraries, and integration guides.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "SDK alpha release schedule and developer access.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Report problems on Developer Registration or docs.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "Grant programs and hackathon participation.", category: "other" }
    ]
  },
  rpc: {
    id: "rpc",
    name: "RPC & WebSocket Gateways",
    context: "RPC",
    source: "MONETA CHAIN",
    category: "infrastructure",
    status: "temporarily_unavailable",
    headline: "Public & Dedicated RPC Gateways",
    description: "High-throughput JSON-RPC and WebSocket endpoints connecting decentralized applications directly to MONETA CHAIN.",
    developmentNotice: "Public RPC services are temporarily unavailable while node gateway security upgrades are applied for testnet.",
    statusDetails: "Public RPC endpoints are in maintenance mode for network protocol upgrades. Direct node peering is active for private consortium members.",
    contextPrompt: "Need help with RPC endpoint status or connection protocols?",
    supportEnabled: true,
    learnMorePath: "/developers",
    confirmedInfo: [
      "Supports standard JSON-RPC methods over HTTP and WebSocket protocols.",
      "Rate-limited public tiers and authenticated enterprise endpoints.",
      "Public endpoints will resume service following protocol sync."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "RPC method specifications and payload formatting.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Timeline for public RPC gateway availability.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Report connection errors on documentation or status checkers.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "Enterprise dedicated endpoint provisioning.", category: "other" }
    ]
  },
  mainnet: {
    id: "mainnet",
    name: "MONETA CHAIN Mainnet",
    context: "MAINNET",
    source: "MONETA CHAIN",
    category: "core",
    status: "under_development",
    headline: "Layer-1 Decentralized Production Network",
    description: "The primary production blockchain securing global digital assets, transactions, and enterprise consortium records.",
    developmentNotice: "MONETA CHAIN Mainnet is currently under active development and has not launched. Live transaction processing is not yet operational.",
    contextPrompt: "Have questions regarding the MONETA Mainnet roadmap?",
    supportEnabled: true,
    learnMorePath: "/roadmap",
    confirmedInfo: [
      "Layer-1 blockchain built from first principles for instant finality.",
      "Pre-launch token allocation and distribution structured in Tokenomics.",
      "Official launch date will be announced via official foundation channels."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "Mainnet architecture, block times, and consensus specifications.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Mainnet deployment phases and launch roadmap updates.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Feedback on official roadmap or announcement displays.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "General ecosystem and foundation inquiries.", category: "other" }
    ]
  },
  testnet: {
    id: "testnet",
    name: "MONETA Testnet Sandbox",
    context: "TESTNET",
    source: "MONETA CHAIN",
    category: "core",
    status: "under_development",
    headline: "Public Testing & Staging Environment",
    description: "Sandbox blockchain environment for testing transactions, node synchronization, and smart contract execution.",
    developmentNotice: "Public testnet is currently under development. Internal devnets are actively running consensus simulations.",
    contextPrompt: "Need information on testnet access and faucet distribution?",
    supportEnabled: true,
    learnMorePath: "/roadmap",
    confirmedInfo: [
      "Will feature a free testnet faucet for developers and community testers.",
      "Testnet tokens carry zero monetary value and are solely for testing.",
      "Early testnet participants will receive verified tester credentials."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "How testnet faucets and staging environments will work.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Testnet genesis block date and early access signups.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Report issues with testnet waitlist forms.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "Security vulnerability disclosures and bug bounty.", category: "other" }
    ]
  },
  presale: {
    id: "presale",
    name: "MONETA Token Presale",
    context: "PRESALE",
    source: "MONETA CHAIN",
    category: "ecosystem",
    status: "live",
    headline: "Early Community Token Allocation Portal",
    description: "Official pre-launch distribution portal for acquiring MONETA COIN (MINT) before public exchange listings.",
    contextPrompt: "Need assistance with the MONETA Presale portal?",
    supportEnabled: true,
    learnMorePath: "/presale",
    dedicatedSupportSystem: {
      name: "MONETA Presale Support",
      path: "/presale",
      tag: "DEDICATED SUPPORT SYSTEM",
      description: "Direct assistance for presale participants, payment verification, and token allocations."
    },
    confirmedInfo: [
      "Official presale allocation structured transparently in 6 phases.",
      "Tokens will be distributed directly to verified participant wallets at TGE.",
      "Presale support provides live inquiry assistance for transactions and inquiries."
    ],
    helpOptions: [
      { id: "operational", label: "PRESALE INQUIRY", description: "Questions about phases, exchange rates, and supported currencies.", category: "operational" },
      { id: "general_info", label: "ALLOCATION & VESTING", description: "How token release schedules and claims work.", category: "general_info" },
      { id: "website_problem", label: "REPORT A PORTAL ISSUE", description: "Report problems with presale calculator or payment forms.", category: "website_problem" },
      { id: "other", label: "OTHER PRESALE SUPPORT", description: "Connect with the dedicated Presale Support team.", category: "other" }
    ]
  },
  mining: {
    id: "mining",
    name: "MONETA MINING",
    context: "MINING",
    source: "MONETA CHAIN",
    category: "ecosystem",
    status: "under_development",
    headline: "Official Web & Android Mining Application",
    description: "Community distribution platform enabling users to accumulate MINT rewards before official mainnet launch.",
    developmentNotice: "MONETA MINING Web Application is currently in pre-launch deployment. Free web-based mining will launch first directly on the website.",
    contextPrompt: "Have a question about MONETA MINING?",
    supportEnabled: true,
    learnMorePath: "/mining",
    dedicatedSupportSystem: {
      name: "MONETA Mining Support",
      path: "/mining",
      tag: "DEDICATED SUPPORT SYSTEM",
      description: "Dedicated assistance for mining accounts, session management, and reward queries."
    },
    confirmedInfo: [
      "Web Application launches first on the official website without downloads.",
      "Android Google Play Store release planned following web launch.",
      "Mining rewards are backed by the underlying MONETA CHAIN ledger."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "Learn about free mining mechanics and allocation rules.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Mining web app launch date and Android release timeline.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Report issues on the mining portal preview.", category: "website_problem" },
      { id: "other", label: "OTHER MINING INQUIRY", description: "Contact the dedicated Mining Support team.", category: "other" }
    ]
  },
  vera: {
    id: "vera",
    name: "VERA AI Intelligence",
    context: "VERA_AI",
    source: "MONETA CHAIN",
    category: "ecosystem",
    status: "under_development",
    headline: "Autonomous On-Chain AI Protocol Copilot",
    description: "Machine intelligence layer for fraud detection, transaction routing optimization, and automated risk scoring.",
    developmentNotice: "VERA AI protocol models are actively training on blockchain telemetry datasets in sandbox environments.",
    contextPrompt: "Have a question about VERA AI capabilities?",
    supportEnabled: true,
    learnMorePath: "/vera",
    confirmedInfo: [
      "Operates natively at the protocol layer to detect anomalous transaction patterns.",
      "Assists in automated governance voting analysis and smart contract safety.",
      "Interactive AI copilot demo is available in the VERA portal."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "How VERA AI integrates with blockchain consensus.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "VERA AI model training milestones and testnet readiness.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Report problems with the interactive VERA interface.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "AI research partnerships and dataset collaboration.", category: "other" }
    ]
  },
  academy: {
    id: "academy",
    name: "MONETA ACADEMY",
    context: "ACADEMY",
    source: "MONETA CHAIN",
    category: "services",
    status: "live",
    headline: "Educational Center & Developer Certifications",
    description: "Comprehensive learning portal for blockchain fundamentals, smart contract security, and certified Web3 development.",
    contextPrompt: "Need assistance with MONETA ACADEMY courses or certifications?",
    supportEnabled: true,
    learnMorePath: "/academy",
    confirmedInfo: [
      "Offers free educational modules across crypto fundamentals and decentralized finance.",
      "Official certificate validation is recorded transparently on-chain.",
      "Curriculum is continuously expanded by MONETA research contributors."
    ],
    helpOptions: [
      { id: "general_info", label: "COURSE INFORMATION", description: "Inquire about syllabus, learning tracks, and prerequisites.", category: "general_info" },
      { id: "operational", label: "CERTIFICATE VERIFICATION", description: "Assistance with course completion and digital certificates.", category: "operational" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Report broken links or interactive quiz issues.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "Educational institution partnerships and group workshops.", category: "other" }
    ]
  },
  governance: {
    id: "governance",
    name: "On-Chain Governance & DAO",
    context: "GOVERNANCE",
    source: "MONETA CHAIN",
    category: "services",
    status: "coming_soon",
    headline: "Decentralized Consortium & Community Voting",
    description: "On-chain proposal submission, quadratic voting mechanisms, and decentralized treasury allocation.",
    developmentNotice: "On-chain governance functionality is planned for a future release following network decentralization milestones.",
    contextPrompt: "Have a question about MONETA governance structure?",
    supportEnabled: true,
    learnMorePath: "/ecosystem",
    confirmedInfo: [
      "Hybrid voting combines community token staking with consortium committee oversight.",
      "Treasury grants will be awarded through transparent on-chain proposals.",
      "Governance charter is outlined in official ecosystem documentation."
    ],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "Governance charter, voting thresholds, and quorum rules.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Timeline for DAO smart contract deployment.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Report issues on governance docs or proposal previews.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "Consortium membership and proposal drafting inquiries.", category: "other" }
    ]
  }
};

export const GLOBAL_DEVELOPMENT_NOTICE = 
  "MONETA CHAIN is actively being developed. Some functionality is not yet available. We'll provide official updates as features become ready.";

/**
 * Returns metadata and display formatting for a given feature status
 */
export function getStatusBadgeData(status: FeatureStatus) {
  switch (status) {
    case "live":
      return {
        label: "LIVE",
        fullText: "🟢 LIVE",
        icon: "🟢",
        colorText: "text-emerald-400",
        badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        glowClass: "box-glow-emerald",
        dotColor: "bg-emerald-400",
        description: "Feature is operational and currently active."
      };
    case "under_development":
      return {
        label: "UNDER DEVELOPMENT",
        fullText: "🟡 UNDER DEVELOPMENT",
        icon: "🟡",
        colorText: "text-amber-400",
        badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        glowClass: "box-glow-yellow",
        dotColor: "bg-amber-400",
        description: "Feature is in active development. Not yet launched for public operation."
      };
    case "coming_soon":
      return {
        label: "COMING SOON",
        fullText: "🔵 COMING SOON",
        icon: "🔵",
        colorText: "text-electric-blue",
        badgeClass: "bg-electric-blue/10 text-electric-blue border-electric-blue/30",
        glowClass: "box-glow",
        dotColor: "bg-electric-blue",
        description: "Feature is planned for a future release cycle."
      };
    case "temporarily_unavailable":
      return {
        label: "TEMPORARILY UNAVAILABLE",
        fullText: "🔴 TEMPORARILY UNAVAILABLE",
        icon: "🔴",
        colorText: "text-crimson-red",
        badgeClass: "bg-crimson-red/10 text-crimson-red border-crimson-red/30",
        glowClass: "box-glow-red",
        dotColor: "bg-crimson-red",
        description: "Service is temporarily undergoing maintenance or upgrade protocols."
      };
  }
}

/**
 * Helper to retrieve a feature configuration safely with fallback
 */
export function getFeatureConfig(featureKey: string): FeatureConfig {
  if (monetaChainFeatures[featureKey]) {
    return monetaChainFeatures[featureKey];
  }

  // Fallback if an unknown key is supplied
  return {
    id: featureKey,
    name: featureKey.charAt(0).toUpperCase() + featureKey.slice(1),
    context: featureKey.toUpperCase(),
    source: "MONETA CHAIN",
    category: "services",
    status: "under_development",
    headline: "MONETA CHAIN Feature",
    description: "MONETA CHAIN ecosystem functionality.",
    developmentNotice: "This feature is currently under active development.",
    contextPrompt: `Have a question about ${featureKey}?`,
    supportEnabled: true,
    confirmedInfo: ["Official information will be released as development progresses."],
    helpOptions: [
      { id: "general_info", label: "GENERAL INFORMATION", description: "General ecosystem inquiries.", category: "general_info" },
      { id: "dev_update", label: "DEVELOPMENT UPDATE", description: "Development roadmap updates.", category: "dev_update" },
      { id: "website_problem", label: "REPORT A WEBSITE PROBLEM", description: "Report website bugs or display errors.", category: "website_problem" },
      { id: "other", label: "OTHER", description: "General inquiry.", category: "other" }
    ]
  };
}

export function getAllFeatures(): FeatureConfig[] {
  return Object.values(monetaChainFeatures);
}

export function getFeaturesByStatus(status: FeatureStatus): FeatureConfig[] {
  return Object.values(monetaChainFeatures).filter(f => f.status === status);
}
