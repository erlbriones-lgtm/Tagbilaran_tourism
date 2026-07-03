import React from "react";
import { motion } from "motion/react";

export default function TagBeats() {
  return (
    <div className="w-full relative animate-fade-in" id="tagbeats-portal">
      
      {/* 
        PREMIUM GATES-HERO HEADER SECTION
        Replicates the Homepage Hero layout but inherits the dynamic, elegant page background
      */}
      <section 
        id="tagbeats-gateway-hero"
        className="relative flex items-center justify-center pt-20 sm:pt-24 pb-2 sm:pb-2 select-none overflow-hidden"
      >
        {/* Clean, empty bg media to inherit the pure white parent background with green gradient on top */}
        <div id="tagbeats-hero-bg-media" className="absolute inset-0 z-0 overflow-hidden pointer-events-none" />
  
        {/* Premium Featured Artwork Image at the top, touching left-to-right edges */}
        <div className="relative z-40 w-full max-w-full flex flex-col items-center justify-center text-center mx-auto" id="tagbeats-hero-text">
          <motion.img 
            src="/FILLERS/TAGBEATS-DPLY.webp" 
            alt="TagBeats Featured Backdrop" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full object-fill sm:object-cover select-none shadow-2xl filter drop-shadow-[0_12px_36px_rgba(0,0,0,0.3)] mb-6 sm:mb-10"
            referrerPolicy="no-referrer"
            loading="lazy"
          />

          <motion.img 
            src="/FILLERS/TAGBEATSREAL.webp" 
            alt="TagBeats Logo Title" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="max-h-[170px] sm:max-h-[210px] md:max-h-[265px] lg:max-h-[310px] max-w-[95%] object-contain select-none filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] px-4 mb-4"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
      </section>

      {/* 
        MAIN CONTENT BODY
      */}
      <div className="w-full relative z-10 pb-32 pt-4" id="tagbeats-main-body-container">
        <main className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center" id="tagbeats-portal-main">
          
          {/* Responsive Editorial Intro Section */}
          <div className="max-w-3xl mx-auto text-center mt-3 mb-12 flex flex-col items-center justify-center px-4" id="tagbeats-body-intro">
            <span className="w-8 h-1 bg-[#006400]/30 rounded-full mb-4" />
            <p className="text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-medium text-center">
              Drown in the rich acoustic soul of the City of Peace and Friendship. Experience original local hymns, Saulog festivity anthems, and neoclassical suites composed by Tagbilaran's creative ensembles.
            </p>
          </div>

          {/* Premium Elegant Coming Soon Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full bg-white border border-[#006400]/10 rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden select-none max-w-2xl mx-auto"
            id="tagbeats-coming-soon-card"
          >
            {/* Ambient subtle backglow */}
            <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-emerald-50/40 blur-[50px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-emerald-50/50 blur-[50px] pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <h3 className="font-sans text-2xl sm:text-3xl font-black text-[#006400] tracking-tight leading-tight uppercase">
                COMING SOON
              </h3>
              
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto font-medium">
                Our creative team and local composers are working on capturing additional high-fidelity acoustic recordings of Boholano hymns and community chants.
              </p>

              <div className="pt-6 border-t border-stone-100 mt-6 text-xs text-stone-400 font-mono uppercase tracking-wider">
                Capturing the Acoustic Soul of Tagbilaran
              </div>
            </div>
          </motion.div>

        </main>
      </div>

    </div>
  );
}
