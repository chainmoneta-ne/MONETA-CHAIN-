import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";
import logoImg from "../assets/images/moneta_chain_logo_1788243584482.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-electric-blue/30 via-royal-purple/20 to-electric-blue/30 rounded-full blur-2xl opacity-60 pointer-events-none" />
            <motion.img 
              src={logoImg} 
              alt="MONETA CHAIN Official Logo" 
              referrerPolicy="no-referrer"
              className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] object-cover rounded-full border-2 border-electric-blue/30 drop-shadow-[0_0_50px_rgba(0,102,255,0.4)]"
              animate={{ rotateY: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

