"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Home, Phone, Activity, Database, Volume2, 
  VolumeX, RotateCcw, Bug, Sparkles 
} from "lucide-react";
import { LottiePlayer } from "@/components/ui/lottie-player";
import { GlitchModal } from "@/components/ui/glitch-modal";

const AUDIO_SRC = "/audio/404-voice.mp3";
const FALLBACK_SPEECH_TEXT = "Hey! The page you are looking for does not exist. Let's get you back on track.";

export function NotFoundClient() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAttemptedRef = useRef(false);

  // Initialize and Autoplay Studio AI Voice
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Create HTML5 Audio instance
    const audio = new Audio(AUDIO_SRC);
    audio.preload = "auto";
    audioRef.current = audio;

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);
    audio.onended = () => setIsPlaying(false);
    audio.onerror = () => {
      console.warn("[Voice Engine] MP3 playback failed, falling back to Web Speech API.");
      fallbackSpeak();
    };

    const attemptAutoplay = async () => {
      if (hasAttemptedRef.current) return;
      hasAttemptedRef.current = true;

      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err: any) {
        // Browser Autoplay Policy: requires user interaction
        console.log("[Voice Engine] Autoplay deferred until user interaction.");

        const handleUserGesture = async () => {
          if (audioRef.current && !hasInteracted) {
            setHasInteracted(true);
            try {
              await audioRef.current.play();
              setIsPlaying(true);
            } catch {
              fallbackSpeak();
            }
          }
          cleanupGestureListeners();
        };

        const cleanupGestureListeners = () => {
          window.removeEventListener("click", handleUserGesture);
          window.removeEventListener("touchstart", handleUserGesture);
          window.removeEventListener("keydown", handleUserGesture);
          window.removeEventListener("scroll", handleUserGesture);
        };

        window.addEventListener("click", handleUserGesture, { once: true });
        window.addEventListener("touchstart", handleUserGesture, { once: true });
        window.addEventListener("keydown", handleUserGesture, { once: true });
        window.addEventListener("scroll", handleUserGesture, { once: true });
      }
    };

    // Slight delay for smooth initial transition
    const timer = setTimeout(attemptAutoplay, 600);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Web Speech API Fallback
  const fallbackSpeak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(FALLBACK_SPEECH_TEXT);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    } catch {
      setIsPlaying(false);
    }
  };

  const playVoice = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        fallbackSpeak();
      });
    } else {
      fallbackSpeak();
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setIsMuted(true);
      } else {
        setIsMuted(false);
        playVoice();
      }
    } else if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsMuted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center relative overflow-hidden px-4 py-16 sm:py-24">
      {/* Dynamic Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10 w-full">
        
        {/* Status Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/50 text-muted-foreground mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          404 // Lost Route Telemetry
        </div>

        {/* Lottie Animation Display */}
        <div className="relative my-2">
          <LottiePlayer animationPath="/404-lottie.json" className="w-64 h-64 sm:w-80 sm:h-80 mx-auto" />
        </div>

        {/* Studio AI Female Voice Audio Bar */}
        <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/70 border border-primary/30 backdrop-blur-md shadow-lg shadow-primary/5">
          <div className="flex items-center gap-2.5">
            {isPlaying ? (
              <>
                {/* Dancing Equalizer Waves */}
                <div className="flex items-end gap-0.5 h-3.5">
                  <span className="w-1 bg-primary rounded-full animate-pulse h-2" />
                  <span className="w-1 bg-primary rounded-full animate-ping h-3.5" />
                  <span className="w-1 bg-primary rounded-full animate-pulse h-2.5" />
                  <span className="w-1 bg-primary rounded-full animate-ping h-3" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-mono font-bold text-foreground block leading-tight">
                    Voice Guide Active
                  </span>
                  <span className="text-xs text-primary font-mono">
                    Studio Neural AI Voice
                  </span>
                </div>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-primary" />
                <div className="text-left">
                  <span className="text-xs font-mono text-muted-foreground block leading-tight">
                    Studio AI Voice Audio
                  </span>
                  <span className="text-xs text-muted-foreground/70 font-mono">
                    Autoplay Enabled
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center gap-1.5 pl-3 border-l border-border/80">
            {isPlaying ? (
              <button
                onClick={toggleMute}
                className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-background border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-all flex items-center gap-1"
                title="Stop audio"
              >
                <VolumeX className="w-3 h-3" />
                Stop
              </button>
            ) : (
              <button
                onClick={playVoice}
                className="px-3 py-1 text-[11px] font-mono font-bold rounded-full bg-primary/10 border border-primary/30 hover:bg-primary/20 text-primary transition-all flex items-center gap-1.5 shadow-sm"
                title="Replay Voice Announcement"
              >
                <RotateCcw className="w-3 h-3" />
                Play Voice
              </button>
            )}
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight mb-3 text-foreground">
          Lost in <span className="text-gradient">Production?</span>
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-8 max-w-lg mx-auto">
          The page or module you are looking for does not exist at RH Dynamics. Don&apos;t worry — our systems are fully operational and ready to guide you back.
        </p>

        {/* Core Product Fast-Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
          <Link
            href="/hsms"
            className="p-4 rounded-xl border border-border/70 bg-card/60 hover:bg-card hover:border-primary/50 transition-all flex items-center gap-3 group shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <strong className="text-xs font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                  RH CORE™ Suite
                </strong>
                <span className="text-[9px] font-mono px-1.5 py-0.2 bg-emerald-500/10 text-emerald-500 rounded border border-emerald-500/20">
                  v1.0 Live
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground font-light block">
                Hospital &amp; Clinical LIS Platform
              </span>
            </div>
          </Link>

          <Link
            href="/custom-software"
            className="p-4 rounded-xl border border-border/70 bg-card/60 hover:bg-card hover:border-primary/50 transition-all flex items-center gap-3 group shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Database className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <strong className="text-xs font-bold font-heading text-foreground block group-hover:text-primary transition-colors">
                Custom Cloud ERP &amp; SCM
              </strong>
              <span className="text-[11px] text-muted-foreground font-light block">
                Multi-Branch Workflows &amp; APIs
              </span>
            </div>
          </Link>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link href="/">
            <Button size="lg" className="rounded-full px-6 text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" size="lg" className="rounded-full px-6 text-xs font-mono font-medium uppercase tracking-wider border-border/80">
              <Phone className="mr-2 h-4 w-4 text-primary" />
              Contact Support
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => setReportModalOpen(true)}
            className="rounded-full px-5 text-xs font-mono font-medium text-muted-foreground hover:text-foreground"
          >
            <Bug className="mr-1.5 h-3.5 w-3.5 text-red-500" />
            Report Broken Route
          </Button>
        </div>
      </div>

      {/* Glitch Report Modal */}
      <GlitchModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        error={{
          message: "User encountered a 404 Route Not Found link.",
        }}
        pageUrl={typeof window !== "undefined" ? window.location.href : "404 Page"}
      />
    </div>
  );
}
