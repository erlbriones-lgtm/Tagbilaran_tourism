import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import "./HeritageEcosystemSection.css";

interface HeritageEcosystemSectionProps {
  onExploreHeritage?: () => void;
}

interface SlideImage {
  url: string;
  caption: string;
}

export const HeritageEcosystemSection: React.FC<HeritageEcosystemSectionProps> = ({
  onExploreHeritage,
}) => {
  // Beautiful array of images representing Tagbilaran's rich cultural and architectural heritage
  const slides: SlideImage[] = [
    {
      url: "/HERITAGES/plaza-rizal-historic/Plaza Rizal 1.webp",
      caption: "Plaza Rizal • Downtown Historical Landmark",
    },
    {
      url: "/HERITAGES/nm-bohol-area-museum-historic/NM Bohol Area Museum 2.webp",
      caption: "NM Bohol Area Museum • Spanish Stone & Lime Tribunal",
    },
    {
      url: "/HERITAGES/cathedral-st-joseph-worker-historic/Cathedral of St. Joseph the Worker 1.webp",
      caption: "St. Joseph Cathedral • Century-Old Limestone Landmark",
    },
    {
      url: "/HERITAGES/friendship-park-abueva/Blood Compact Shrine (31).webp",
      caption: "Blood Compact Monument • Sandugo Friendship Pact",
    },
    {
      url: "/HERITAGES/balili-house-oasis-lodge/Balili Heritage House (1).webp",
      caption: "Balili Heritage House • 1930s Preserved Chalet",
    },
    {
      url: "/HERITAGES/rocha-suarez-house/rocha-suarez 1.webp",
      caption: "Rocha Suarez House • Traditional Visayan Woodwork",
    },
    {
      url: "/HERITAGES/dalareich-chocolate-house/Dalareich Chocolate House 1.webp",
      caption: "Dalareich Chocolate House • Cacao Growing Heritage",
    },
    {
      url: "/HERITAGES/garden-cafe/Garden Cafe 1.webp",
      caption: "Garden Cafe • Authentic Tarantilla & Inclusive Dining",
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Auto-slide effect cycling every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="heritage-eco-section text-left" id="heritage-eco-layout-root">
      {/* Background ambient light shapes or highlights */}
      <div className="absolute top-[-20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-yellow-400/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-400/10 blur-[130px] pointer-events-none" />

      <div className="heritage-eco-container">
        
        {/* Left Column: Bold headings, contextual pitch, and button */}
        <motion.div 
          className="heritage-eco-content flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="heritage-eco-heading" id="heritage-eco-bold-hdr">
            WELCOME TO <br className="hidden sm:inline" />
            TAGBILARAN HERITAGE
          </h2>
          
          <p className="heritage-eco-description" id="heritage-eco-text-desc">
            Discover Tagbilaran's living legacy. Explore Spanish colonial structures, grand prewar ancestral homes, and sacred monuments showcasing timeless Boholano craftsmanship.
          </p>
          
          <motion.button 
            onClick={onExploreHeritage}
            className="heritage-eco-btn"
            id="heritage-eco-explore-trigger"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <span>EXPLORE HERITAGE</span>
          </motion.button>
        </motion.div>

        {/* Right Column: High-End Antique Wood Frame Slideshow */}
        <motion.div 
          className="w-full max-w-[680px] p-4 sm:p-5 rounded-none bg-gradient-to-br from-[#5c3a21] via-[#2c1a0e] to-[#422512] shadow-[inset_3px_3px_6px_rgba(255,255,255,0.15),inset_-3px_-3px_6px_rgba(0,0,0,0.6),0_20px_50px_rgba(0,0,0,0.5)] border border-[#1b0e06] transition-all duration-300 relative group"
          id="heritage-eco-slideshow-view"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          {/* Gold/brass fillet inset inlay line */}
          <div className="absolute inset-[4px] border border-[#bc923a]/40 pointer-events-none z-30" />

          {/* Antique mat board inner insert */}
          <div className="w-full h-full bg-[#f4ebd0] p-4 sm:p-6 flex flex-col border border-[#1b0e06]/60 z-10 relative shadow-[inset_1px_1px_4px_rgba(0,0,0,0.3)]">
            
            {/* The actual slideshow viewport with aspect 16/9 */}
            <div className="heritage-slideshow-container overflow-hidden relative border border-[#2c1a0e]/30">
              {/* Slider Frame */}
              {slides.map((slide, idx) => (
                <img
                  key={slide.url}
                  src={slide.url}
                  alt={slide.caption}
                  className={`heritage-slide ${idx === activeIndex ? "active" : ""}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  width={1200}
                  height={675}
                  referrerPolicy="no-referrer"
                />
              ))}

              {/* Ambient Overlay Layer */}
              <div className="heritage-slideshow-overlay" />
            </div>

            {/* Elegant Caption space matching classic gallery frame labels */}
            <div className="mt-4 text-center border-t border-[#2c1a0e]/10 pt-3 select-none">
              <span className="font-jakarta text-[#2c1a0e] font-extrabold text-xs sm:text-sm tracking-widest uppercase block">
                {slides[activeIndex].caption}
              </span>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};
