import React, { useState, useEffect } from "react";

interface ConfettiPiece {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  color: string;
  type: "rect" | "circle" | "ribbon" | "triangle";
  horizontalMovement: string;
}

export default function Saulog() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    // Colors inspired by the official Saulog cultural brand:
    // Emerald Green, Gold Yellow, Deep Festival Red, Sky Blue, and Vibrant Orange
    const saulogColors = [
      "#018A2B", // Emerald Green
      "#FFD700", // Gold Yellow
      "#D91E1E", // festival Red
      "#00AEEF", // Sky Blue
      "#FF5B00", // Vibrant Orange
      "#FFAA00", // Warm Yellow-Orange
      "#10B981"  // Bright Teal Green
    ];

    const types: ("rect" | "circle" | "ribbon" | "triangle")[] = ["rect", "circle", "ribbon", "triangle"];

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const confettiCount = isMobile ? 20 : 60;

    const pieces = Array.from({ length: confettiCount }).map((_, idx) => {
      const left = `${Math.random() * 100}%`;
      const delay = `${Math.random() * 8}s`;
      const duration = `${Math.random() * 6 + 6}s`; // Gentle 6s to 12s descent
      const size = `${Math.random() * 8 + 6}px`; // Sized between 6px and 14px
      const color = saulogColors[idx % saulogColors.length];
      const type = types[idx % types.length];
      const horizontalMovement = `${Math.random() * 60 - 30}px`; // Gentle sway

      return {
        id: idx,
        left,
        delay,
        duration,
        size,
        color,
        type,
        horizontalMovement
      };
    });

    setConfetti(pieces);
  }, []);

  return (
    <div className="w-full bg-white select-none relative overflow-hidden" id="saulog-view-root">
      
      {/* Falling Confetti Layer - Pointer events none so it doesn't block interactions */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden" id="saulog-confetti-container">
        {confetti.map((piece) => {
          // Custom render styling based on confetti geometry
          const isCircle = piece.type === "circle";
          const isTriangle = piece.type === "triangle";
          
          let pieceStyle: React.CSSProperties = {
            position: "absolute",
            top: "-20px",
            left: piece.left,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            willChange: "transform, opacity"
          };

          if (isTriangle) {
            pieceStyle = {
              ...pieceStyle,
              width: 0,
              height: 0,
              borderLeft: `${parseFloat(piece.size) / 2}px solid transparent`,
              borderRight: `${parseFloat(piece.size) / 2}px solid transparent`,
              borderBottom: `${piece.size} solid ${piece.color}`,
            };
          } else if (isCircle) {
            pieceStyle = {
              ...pieceStyle,
              width: piece.size,
              height: piece.size,
              backgroundColor: piece.color,
              borderRadius: "50%",
            };
          } else {
            // Rectangles and Ribbons
            pieceStyle = {
              ...pieceStyle,
              width: piece.size,
              height: `${parseFloat(piece.size) * (piece.type === "ribbon" ? 1.8 : 1.2)}px`,
              backgroundColor: piece.color,
              borderRadius: piece.type === "ribbon" ? "1px" : "2px"
            };
          }

          return (
            <div
              key={piece.id}
              style={pieceStyle}
              className="animate-saulog-fall"
            />
          );
        })}
      </div>

      {/* Embedded CSS rules for high-performance GPU animated fall */}
      <style>{`
        @keyframes saulogFall {
          0% {
            transform: translateY(0vh) rotate(0deg) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(105vh) rotate(720deg) translateX(40px);
            opacity: 0;
          }
        }

        .animate-saulog-fall {
          animation-name: saulogFall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>

      {/* Saulog Hero Section */}
      <div
        className="relative min-h-[30vh] sm:min-h-[45vh] md:min-h-[60vh] flex items-center justify-center bg-[#0d210c] overflow-hidden"
        id="saulog-hero"
      >
        <div id="saulog-bg-media" className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center bg-[#0d210c]">
          <img
            src="/FILLERS/SAULOGBG.png"
            alt="Saulog Full Screen Background"
            onLoad={() => setIsImageLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            id="saulog-full-bg-image"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        <img
          src="/FILLERS/divider2-1.png"
          alt="Saulog curve separator"
          className="absolute bottom-[-1px] left-0 w-full overflow-hidden pointer-events-none z-10 h-[16px] sm:h-[24px] md:h-[32px] object-fill"
          id="saulog-bottom-separator"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>

      <div className="w-full bg-white flex flex-col items-center px-6 sm:px-12 py-16 sm:py-24" id="saulog-content-canvas">
        <div className="max-w-4xl text-center flex flex-col items-center" id="saulog-header-block">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-normal text-[#006400] uppercase text-center mb-2" id="saulog-heading-text">
            SAULOG TAGBILARAN
          </h2>
          <p className="font-sans text-xs sm:text-sm font-semibold tracking-widest text-[#006400] uppercase mb-8" id="saulog-subheading-text">
            ONE FAMILY, ONE CITY
          </p>

          <div className="space-y-8 text-[#006400]/90 text-sm sm:text-base md:text-lg leading-relaxed font-sans text-center font-normal max-w-3xl px-4" id="saulog-body-text-wrap">
            <p>
              Saulog Tagbilaran is the annual celebration of Tagbilaran City, the capital of Bohol, showcasing the rich culture, heritage, and community spirit of its people. The word <span className="font-sans italic font-semibold text-[#186a30]">"Saulog"</span> means to celebrate in Visayan, and this festival does exactly that, bringing together locals and visitors for a week of street dancing, cultural shows, concerts, trade fairs, and more.
            </p>
            <p>
              Saulog 2026 is set to be a bigger and more festive celebration than ever. Whether you're a proud Tagbilaranon or a visitor exploring Bohol, this is one event you don't want to miss. Check out the official website for the latest event schedules, updates, and announcements.
            </p>
          </div>

          <div className="mt-12 flex justify-center w-full" id="saulog-website-link-wrap">
            <a
              href="https://saulogtagbilaran.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#006400] font-sans text-sm sm:text-base font-bold hover:underline transition-all animate-bounce"
              id="saulog-cta-button"
            >
              <span>👉 Visit the Official Saulog Tagbilaran Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
