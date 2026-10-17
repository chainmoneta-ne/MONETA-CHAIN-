import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'Portal Home', description: 'The main portal of MONETA Chain.' },
  '/home': { title: 'Home', description: 'Next Generation Blockchain Infrastructure.' },
  '/about': { title: 'About Us', description: 'Learn about our mission and vision.' },
  '/vision': { title: 'Vision', description: 'Why cryptocurrencies matter.' },
  '/features': { title: 'Features', description: 'Explore MONETA Chain features.' },
  '/ecosystem': { title: 'Ecosystem', description: 'The digital ecosystem.' },
  '/tokenomics': { title: 'Tokenomics', description: 'MINT token economics.' },
  '/presale': { title: 'Pre-Sale', description: 'Join the early token sale.' },
  '/mining': { title: 'Mining', description: 'Start mining MINT.' },
  '/academy': { title: 'Academy', description: 'Learn about blockchain.' },
  '/developers': { title: 'Developers', description: 'Build on MONETA Chain.' },
  '/vera': { title: 'VERA AI', description: 'AI-powered blockchain assistant.' },
  '/waitlist': { title: 'Waitlist', description: 'Join the MONETA CHAIN waitlist.' },
  '/faq': { title: 'FAQ', description: 'Frequently asked questions.' },
  '/coverage': { title: 'Coverage', description: 'Media coverage and news.' },
  '/countdowns': { title: 'Countdowns', description: 'Important upcoming events.' },
  '/safety': { title: 'Safety Center', description: 'Stay safe in the ecosystem.' },
  '/developer-registration': { title: 'Developer Registration', description: 'Register as a developer.' },
  '/conduct': { title: 'Code of Conduct', description: 'Community code of conduct.' },
  '/terms': { title: 'Terms of Service', description: 'Terms of service.' },
  '/privacy': { title: 'Privacy Policy', description: 'Privacy policy.' },
  '/trademark': { title: 'Trademark Policy', description: 'Trademark usage guidelines.' },
  '/official-links': { title: 'Official Links', description: 'Directory of official ecosystem links.' },
  '/roadmap': { title: 'Roadmap', description: 'Official MONETA CHAIN multi-path roadmap.' },
};

export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Update Meta Tags
    const meta = routeMeta[pathname];
    if (meta) {
      document.title = `${meta.title} | MONETA CHAIN`;
      let metaTag = document.querySelector('meta[name="description"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'description');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', meta.description);
    } else {
      document.title = 'MONETA CHAIN | Next Generation Blockchain Infrastructure';
    }

    // 2. Handle Scroll
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
