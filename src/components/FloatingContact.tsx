import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, X } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 flex flex-col items-end" id="floating-contact-container">
        
        {/* CONTACT DIRECTORY CARD POPUP */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="mb-3.5 w-full sm:w-[380px] bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl shadow-[0_20px_50px_rgba(5,30,10,0.12)] overflow-hidden text-stone-800 text-left border-t-4 border-t-[#031d09] no-scrollbar font-sans"
              id="contact-popup-card"
            >
              {/* Header with Dark Emerald Background and gold accent */}
              <div className="bg-[#031d09] px-5 py-4 flex items-center justify-between select-none">
                <div>
                  <h3 className="text-white font-sans font-bold text-[13px] tracking-widest uppercase">
                    City Directory
                  </h3>
                  <p className="text-[10px] text-emerald-300 font-sans uppercase tracking-wider font-semibold">
                    Official Contacts
                  </p>
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Close Contact Card"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Directory Content without visible scrollbar */}
              <div className="p-4 space-y-4 max-h-[60vh] sm:max-h-[380px] overflow-y-auto font-sans no-scrollbar bg-stone-50/50" id="contact-popup-body">
                
                {/* Section: Tourism & Mayor */}
                <div className="space-y-3">
                  <div className="text-[10px] font-sans font-bold text-emerald-800 tracking-wider uppercase border-b border-stone-200/60 pb-1.5">
                    City Services &amp; Tourism
                  </div>

                  {/* Mayor's Office Card */}
                  <div className="bg-white border border-stone-200 p-3.5 rounded-xl shadow-sm space-y-3">
                    <div className="flex justify-between items-center gap-2">
                      <span className="font-bold text-[13px] text-stone-900 tracking-tight font-sans">City Mayor's Office</span>
                      <span className="text-[9px] bg-amber-500 text-stone-950 px-2 py-0.5 rounded-full font-sans font-bold uppercase tracking-wider">
                        BABA Hotline
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div 
                        className="flex justify-between items-center bg-[#fcf8ee] border border-[#f0e4cc] p-2.5 rounded-lg text-xs"
                      >
                        <div className="flex flex-col">
                          <span className="text-[10px] text-stone-500 font-medium uppercase">Hotline Number</span>
                          <span className="font-bold text-stone-900 font-sans tracking-wide">411 2222</span>
                        </div>
                      </div>
 
                      <div className="grid grid-cols-2 gap-2">
                        <div 
                          className="flex flex-col p-2 bg-stone-50 border border-stone-200 rounded-lg text-left"
                        >
                          <span className="text-[9px] text-stone-500 uppercase font-medium">Office Line 1</span>
                          <span className="font-bold text-stone-800 text-[11px] font-sans tracking-tight">
                            (038) 412-3715
                          </span>
                        </div>
                        <div 
                          className="flex flex-col p-2 bg-stone-50 border border-stone-200 rounded-lg text-left"
                        >
                          <span className="text-[9px] text-stone-500 uppercase font-medium">Office Line 2</span>
                          <span className="font-bold text-stone-800 text-[11px] font-sans tracking-tight">
                            (038) 422-8011
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tourism Office Card */}
                  <div className="bg-white border border-stone-200 p-3.5 rounded-xl shadow-sm space-y-2.5">
                    <div className="flex justify-between items-center gap-2">
                      <span className="font-bold text-[13px] text-stone-900 tracking-tight font-sans">City Tourism Office</span>
                      <span className="text-[9px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200 font-sans font-bold uppercase tracking-wider">
                        Local 167
                      </span>
                    </div>

                    <div 
                      className="flex justify-between items-center bg-emerald-50/40 border border-emerald-100 p-2.5 rounded-lg text-xs"
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] text-emerald-800/80 font-medium uppercase">Direct Line</span>
                        <span className="font-bold text-stone-900 font-sans tracking-wide">(038) 411-2222</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Emergency & Security */}
                <div className="space-y-3 pt-1">
                  <div className="text-[10px] font-sans font-bold text-rose-800 tracking-wider uppercase border-b border-stone-200/60 pb-1.5">
                    Emergency Dispatch
                  </div>

                  {/* Police */}
                  <div className="bg-white border border-rose-100 p-3.5 rounded-xl shadow-sm space-y-2.5 border-l-4 border-l-rose-600">
                    <span className="font-bold text-[13px] text-stone-900 tracking-tight font-sans block">
                      Tagbilaran Police (PNP)
                    </span>

                    <div className="grid grid-cols-2 gap-2">
                      <div 
                        className="flex flex-col p-2.5 bg-rose-50/30 border border-rose-100 rounded-lg text-left"
                      >
                        <span className="text-[8px] text-rose-800 font-bold uppercase tracking-wider">Hotline 1</span>
                        <span className="font-bold text-stone-900 text-[11px] font-sans tracking-tight mt-0.5">
                          0912 624 4203
                        </span>
                      </div>
                      <div 
                        className="flex flex-col p-2.5 bg-rose-50/30 border border-rose-100 rounded-lg text-left"
                      >
                        <span className="text-[8px] text-rose-800 font-bold uppercase tracking-wider">Hotline 2</span>
                        <span className="font-bold text-stone-900 text-[11px] font-sans tracking-tight mt-0.5">
                          0906 746 4252
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* BFP */}
                  <div className="bg-white border border-orange-100 p-3.5 rounded-xl shadow-sm space-y-2.5 border-l-4 border-l-orange-500">
                    <span className="font-bold text-[13px] text-stone-900 tracking-tight font-sans block">
                      Fire Protection (BFP)
                    </span>

                    <div className="space-y-2 text-stone-700 font-sans">
                      <div className="bg-orange-50/20 border border-orange-100/60 p-2.5 rounded-lg space-y-1.5">
                        <p className="text-orange-950 font-sans text-[8px] font-bold uppercase tracking-widest border-b border-orange-100 pb-1">
                          Central Fire Station
                        </p>
                        
                        <div className="space-y-1.5 text-[11px]">
                          <div className="flex justify-between items-center p-1 rounded">
                            <span className="text-stone-500 uppercase font-medium text-[9px]">Globe:</span>
                            <span className="font-bold text-stone-800 font-sans tracking-wide text-xs">
                              0965 320 3000
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-1 rounded">
                            <span className="text-stone-500 uppercase font-medium text-[9px]">Smart:</span>
                            <span className="font-bold text-stone-800 font-sans tracking-wide text-xs">
                              0948 984 7487
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-1 rounded">
                            <span className="text-stone-500 uppercase font-medium text-[9px]">Landline:</span>
                            <span className="font-bold text-stone-800 font-sans tracking-wide text-xs">
                              (038) 235-3911
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Office Address */}
                <div className="bg-stone-200/50 p-3.5 rounded-xl text-stone-600 border border-stone-200/80 font-sans">
                  <p className="font-bold text-xs text-stone-800 font-sans">Tagbilaran City Hall</p>
                  <p className="text-[10px] leading-relaxed text-stone-500 mt-0.5 font-sans">
                    Dampas District, Government Center, Tagbilaran City, Bohol 6300
                  </p>
                </div>

              </div>

              {/* Action buttons footer with nice info-bar style */}
              <div className="bg-stone-100/90 px-4 py-3 border-t border-stone-200/60 flex items-center justify-between text-[10px] text-stone-500 font-sans tracking-wide select-none">
                <span className="font-semibold">
                  Mon-Fri 8am - 5pm
                </span>
                <span className="font-bold uppercase text-emerald-900 tracking-wider bg-emerald-100/80 px-2 py-0.5 rounded">
                  City Government Portal
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FLOATING ACTION ICON BUTTON */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full shadow-xl border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-rose-600 text-white border-rose-500 shadow-rose-600/25"
              : "bg-[#031d09] text-white border-[#ffd54f]/30 hover:border-[#ffd54f]/70 shadow-emerald-950/25"
          }`}
          aria-label="Toggle Contact Directory Overlay"
          id="floating-contact-trigger-btn"
        >
          <div className="relative flex items-center justify-center">
            {isOpen ? (
              <X className="w-5.5 h-5.5" />
            ) : (
              <>
                <Phone className="w-5.5 h-5.5 text-[#FFD54F]" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </>
            )}
          </div>
        </motion.button>

      </div>
    </>
  );
}


