import { FadeIn } from "./FadeIn";
import { Link as LinkIcon } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaYoutube, FaTelegram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function SocialMediaSection() {
  const socials = [
    { name: "X (Twitter)", icon: <FaXTwitter size={24} />, link: "#" },
    { name: "Instagram", icon: <FaInstagram size={24} />, link: "#" },
    { name: "Facebook", icon: <FaFacebook size={24} />, link: "#" },
    { name: "LinkedIn", icon: <FaLinkedin size={24} />, link: "#" },
    { name: "TikTok", icon: <FaTiktok size={24} />, link: "#" },
    { name: "YouTube", icon: <FaYoutube size={24} />, link: "#" },
    { name: "Telegram", icon: <FaTelegram size={24} />, link: "#" },
    { name: "Discord", icon: <FaDiscord size={24} />, link: "#" },
  ];

  return (
    <section className="py-24 relative bg-black border-t border-electric-blue/10" id="social">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-royal-purple/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <LinkIcon size={14} />
              <span>SOCIAL MEDIA SECTION (MONETA CHAIN)</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-royal-purple">Connected</span>
            </h2>
            <div className="text-gray-300 font-display leading-relaxed space-y-4 text-lg">
               <p>
                 Stay connected with MONETA CHAIN and be part of the growing digital revolution.
               </p>
               <p>
                 Follow us across our official platforms to receive real-time updates, announcements, ecosystem progress, and important community insights. Staying connected ensures you never miss what's next in the evolution of decentralized innovation.
               </p>
               <p>
                 Join a global community that believes in transparency, progress, and the future of blockchain technology. Every update brings you closer to the journey.
               </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.link} onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 border-white/5 hover:border-electric-blue/30 flex flex-col items-center justify-center group transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:bg-electric-blue/20 group-hover:border-electric-blue/40 group-hover:text-electric-blue group-hover:scale-110 flex items-center justify-center text-gray-400 transition-all mb-4">
                  {social.icon}
                </div>
                <span className="font-heading font-bold text-white uppercase tracking-widest text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-16 text-center max-w-2xl mx-auto">
           <div className="px-8 py-6 rounded-2xl bg-electric-blue/5 border border-electric-blue/20 inline-block font-mono text-electric-blue uppercase tracking-widest leading-relaxed shadow-[0_0_20px_rgba(0,255,255,0.05)] text-sm md:text-base">
             Be part of the movement early.<br />
             Stay informed. Stay connected. Stay ahead.
           </div>
        </FadeIn>
      </div>
    </section>
  );
}
