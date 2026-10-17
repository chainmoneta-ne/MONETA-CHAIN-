const fs = require('fs');

const code = `import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollManager } from './components/ScrollManager';
import { LoadingFallback } from './components/LoadingFallback';
import { NotFoundPage } from './components/NotFoundPage';

import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EcosystemSection } from './components/EcosystemSection';
import { TokenSection } from './components/TokenSection';
import { DevelopersSection } from './components/DevelopersSection';
import { TeamSection } from './components/TeamSection';
import { PartnershipsSection } from './components/PartnershipsSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { InteractSection } from './components/InteractSection';

const LandingPage = lazy(() => import('./components/LandingPage').then(m => ({ default: m.LandingPage })));
const WaitlistPage = lazy(() => import('./components/WaitlistPage').then(m => ({ default: m.WaitlistPage })));
const DevelopersPage = lazy(() => import('./components/DevelopersPage').then(m => ({ default: m.DevelopersPage })));
const VisionPage = lazy(() => import('./components/VisionPage').then(m => ({ default: m.VisionPage })));
const TrademarkPage = lazy(() => import('./components/TrademarkPage').then(m => ({ default: m.TrademarkPage })));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./components/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const SafetyCenterPage = lazy(() => import('./components/SafetyCenterPage').then(m => ({ default: m.SafetyCenterPage })));
const DeveloperCodeOfConductPage = lazy(() => import('./components/DeveloperCodeOfConductPage').then(m => ({ default: m.DeveloperCodeOfConductPage })));
const DeveloperRegistrationPage = lazy(() => import('./components/DeveloperRegistrationPage').then(m => ({ default: m.DeveloperRegistrationPage })));
const FAQPage = lazy(() => import('./components/FAQPage').then(m => ({ default: m.FAQPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const EcosystemPage = lazy(() => import('./components/EcosystemPage').then(m => ({ default: m.EcosystemPage })));
const CoveragePage = lazy(() => import('./components/CoveragePage').then(m => ({ default: m.CoveragePage })));
const MiningPage = lazy(() => import('./components/MiningPage').then(m => ({ default: m.MiningPage })));
const FeaturesPage = lazy(() => import('./components/FeaturesPage').then(m => ({ default: m.FeaturesPage })));
const PreSalePage = lazy(() => import('./components/PreSalePage').then(m => ({ default: m.PreSalePage })));
const TokenomicsPage = lazy(() => import('./components/TokenomicsPage').then(m => ({ default: m.TokenomicsPage })));
const VeraAIPage = lazy(() => import('./components/VeraAIPage').then(m => ({ default: m.VeraAIPage })));
const CountdownsPage = lazy(() => import('./components/CountdownsPage').then(m => ({ default: m.CountdownsPage })));
const AcademyPage = lazy(() => import('./components/AcademyPage').then(m => ({ default: m.AcademyPage })));
const OfficialLinksPage = lazy(() => import('./components/OfficialLinksPage').then(m => ({ default: m.OfficialLinksPage })));

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EcosystemSection />
      <TokenSection />
      <DevelopersSection />
      <TeamSection />
      <PartnershipsSection />
      <SocialMediaSection />
      <InteractSection />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/waitlist" element={<WaitlistPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/trademark" element={<TrademarkPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/safety" element={<SafetyCenterPage />} />
            <Route path="/conduct" element={<DeveloperCodeOfConductPage />} />
            <Route path="/developer-registration" element={<DeveloperRegistrationPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/coverage" element={<CoveragePage />} />
            <Route path="/mining" element={<MiningPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/presale" element={<PreSalePage />} />
            <Route path="/tokenomics" element={<TokenomicsPage />} />
            <Route path="/vera" element={<VeraAIPage />} />
            <Route path="/countdowns" element={<CountdownsPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/official-links" element={<OfficialLinksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
`;

fs.writeFileSync('src/App.tsx', code);
