"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid hydration mismatch and layout shift with equal dimensions placeholder
    return (
      <div 
        className={cn(
          "w-9 h-9 rounded-full border border-border/50 bg-secondary/30 flex items-center justify-center",
          className
        )}
        aria-hidden="true"
      >
        <span className="w-4 h-4 rounded-full bg-muted-foreground/20" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.button
      type="button"
      onClick={handleToggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      aria-label={isDark ? "Switch to day mode (Light)" : "Switch to night mode (Dark)"}
      title={isDark ? "Switch to day mode" : "Switch to night mode"}
      className={cn(
        "relative w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 overflow-hidden shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        isDark 
          ? "bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 shadow-indigo-500/10" 
          : "bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-600 shadow-amber-500/10",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          // Night Mode Animation: Rising Crescent Moon with Twinkling Star
          <motion.div
            key="dark-mode-icon"
            initial={{ opacity: 0, rotate: -60, scale: 0.4, y: 6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, rotate: 60, scale: 0.4, y: -6 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.35,
            }}
            className="relative flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-indigo-300 stroke-[2.2]" />
            
            {/* Micro Twinkling Starlight Particle */}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.25, 0.8], 
                opacity: [0.6, 1, 0.6] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: "easeInOut" 
              }}
              className="absolute -top-1 -right-1 text-[8px] text-indigo-300 pointer-events-none"
            >
              ✦
            </motion.span>
          </motion.div>
        ) : (
          // Day Mode Animation: Radiant Golden Sun with Expanding Rays
          <motion.div
            key="light-mode-icon"
            initial={{ opacity: 0, rotate: 90, scale: 0.4 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.4 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 20,
              duration: 0.35,
            }}
            className="relative flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-amber-500 stroke-[2.2]" />
            
            {/* Gentle Radiant Sunray Pulse Glow */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-amber-400/20 blur-[2px] pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}