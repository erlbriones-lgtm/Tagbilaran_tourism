import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

interface HeroProps {
  onSwitchToHeritage: () => void;
  weatherDescription?: string;
  temperature?: number;
}

export default function Hero({ onSwitchToHeritage, weatherDescription, temperature }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) {
      return;
    }

    const startMedia = async () => {
      video.loop = true;
      audio.loop = true;
      audio.currentTime = video.currentTime;
      video.play().catch(() => {
        // Muted video autoplay can still be blocked in some browsers.
      });
      audio.loop = true;
      audio.muted = false;
      audio.volume = 0.65;

      try {
        await audio.play();
      } catch {
        // Some browsers still require a user gesture before allowing audible playback.
      }
    };

    if (video.readyState >= 2 || audio.readyState >= 2) {
      void startMedia();
    } else {
      video.addEventListener("canplay", startMedia, { once: true });
      audio.addEventListener("canplay", startMedia, { once: true });
    }

    return () => {
      video.removeEventListener("canplay", startMedia);
      audio.removeEventListener("canplay", startMedia);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) {
      return;
    }

    const startOnFirstInteraction = async () => {
      audio.currentTime = video.currentTime;
      video.loop = true;
      audio.loop = true;
      audio.muted = false;
      audio.volume = 0.65;

      video.play().catch(() => {
        // Keep the video on the same timeline even if the browser blocks playback.
      });

      try {
        await audio.play();
      } catch {
        // Browsers may still require a user gesture before audible playback.
      }
    };

    window.addEventListener("pointerdown", startOnFirstInteraction, { once: true });
    window.addEventListener("keydown", startOnFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", startOnFirstInteraction);
      window.removeEventListener("keydown", startOnFirstInteraction);
    };
  }, []);

  const handleAudioToggle = async () => {
    const audio = audioRef.current;
    if (!audio) {
      setIsMuted((current) => !current);
      return;
    }

    if (isMuted) {
      audio.muted = false;
      audio.volume = 0.65;
      audio.currentTime = videoRef.current?.currentTime ?? audio.currentTime;
      setIsMuted(false);
      try {
        await audio.play();
      } catch {
        // If the browser still blocks playback, the next user gesture will retry.
      }
      return;
    }

    audio.muted = true;
    setIsMuted(true);
  };

  return (
    <section
      id="gateway-hero"
      className="relative min-h-[50vh] sm:min-h-[65vh] md:min-h-[82vh] xl:min-h-[84vh] flex items-center justify-center bg-transparent px-4 sm:px-12 md:px-16 lg:px-24 pt-32 sm:pt-40 pb-16 sm:pb-20 select-none animate-fade-in"
    >
      {/* 
        PREMIUM FULL-SCREEN BACKDROP
        Uses the provided Tagbilaran video as the home hero background.
      */}
      <div 
        id="hero-background-media" 
        className="absolute inset-0 z-0 overflow-hidden bg-linear-to-b from-[#0c180b] via-[#142813] to-[#0d1b0c]"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover filter saturate-[1.08] brightness-[0.55] contrast-[1.05]"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/webp/Blood Compact Shrine (31).webp"
          width={1920}
          height={1080}
        >
          <source src="/webm/home.webm" type="video/webm" />
          <source src="/webm/FINAL%20WEB%20VIDEO.mp4" type="video/mp4" />
        </video>
        {/* Soft edge gradients and atmospheric overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#152614]/50 via-transparent to-[#152614]/65 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-linear-to-b from-[#32e875]/12 to-transparent z-25 pointer-events-none" />
        
        {/* Floating atmospheric sunbeam of color to enrich scene */}
        <div className="absolute top-1/4 right-[25%] w-96 h-96 rounded-full bg-[#FFD54F]/4 blur-[120px] mix-blend-screen pointer-events-none z-15" />

        <audio ref={audioRef} autoPlay loop muted={isMuted} preload="auto">
          <source src="/audio/FINAL%20WEB%20VIDEO.mp3" type="audio/mpeg" />
        </audio>

        <button
          type="button"
          onClick={handleAudioToggle}
          aria-label={isMuted ? "Unmute background audio" : "Mute background audio"}
          className="absolute bottom-8 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white shadow-lg backdrop-blur-md transition hover:bg-black/60 hover:border-white/25"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      {/* 
        PREMIUM DYNAMIC IMAGE SEPARATOR
        Uses public/FILLERS/divider2-1.png as the separator,
        carefully styled to be perfectly proportioned and seamless.
      */}
      <img 
        src="/FILLERS/divider2-1.png"
        alt="Heritage Separator Curve"
        className="absolute -bottom-0.5 left-0 w-full overflow-hidden pointer-events-none z-32 h-2.75 sm:h-4 md:h-5.25 lg:h-7 object-fill select-none"
        id="hero-bottom-artwork-separator"
        referrerPolicy="no-referrer"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        width={1600}
        height={64}
      />

      {/* FOREGROUND MAIN TEXT CONTENT - Center-aligned and full width on ultra wide displays */}
      <div className="relative z-40 w-full max-w-none flex flex-col items-center justify-center text-center mx-auto px-4" id="hero-main-content">
        {/* Primary Page Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[12.5vw] sm:text-[12.5vw] md:text-[12vw] lg:text-[12vw] xl:text-[11.5vw] 2xl:text-[15.5rem] font-black tracking-[-0.01em] text-white leading-none block uppercase text-center w-full whitespace-nowrap"
          style={{ fontFamily: "'Cranio', sans-serif" }}
          id="hero-main-headline"
        >
          <span className="inline-block transform scale-y-[1] origin-center text-center w-full">
            TAGBILARAN
          </span>
        </motion.h1>

        {/* Subtitle with elegant Moderniz font inside hero */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-moderniz text-xs sm:text-sm md:text-base font-semibold tracking-widest text-[#32e875] max-w-4xl mx-auto mt-3 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.98)] text-center block w-full uppercase"
          id="hero-subtitle"
        >
          THE CITY OF PEACE AND FRIENDSHIP
        </motion.p>
      </div>
    </section>
  );
}

