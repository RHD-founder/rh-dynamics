"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Video, Calendar, ExternalLink, Loader2, Clock, CheckCircle2 } from "lucide-react";
import { useTheme } from "next-themes";

interface CalBookingModalProps {
  children?: React.ReactNode;
  eventSlug?: string; // "15min" or "30min" or "" for all
  triggerClassName?: string;
  triggerButtonText?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export function CalBookingModal({
  children,
  eventSlug = "15min",
  triggerClassName,
  triggerButtonText = "Schedule 15-Min Google Meet",
  variant = "default",
  size = "lg",
}: CalBookingModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  const calUsername = "hashim-ahmed-p4itsj";
  const calPath = eventSlug ? `${calUsername}/${eventSlug}` : calUsername;
  const calUrl = `https://cal.com/${calPath}`;
  const themeParam = resolvedTheme === "dark" ? "dark" : "light";
  const embedUrl = `https://cal.com/${calPath}?embed=true&theme=${themeParam}`;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button
            variant={variant}
            size={size}
            className={triggerClassName}
          >
            <Video className="w-4 h-4 mr-2 text-emerald-400" />
            {triggerButtonText}
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl w-[96%] max-h-[92vh] h-[780px] p-0 overflow-hidden border border-border/80 bg-background/98 backdrop-blur-xl flex flex-col rounded-3xl shadow-2xl">
        {/* Header Bar */}
        <DialogHeader className="p-4 sm:p-5 border-b border-border/60 flex flex-row items-center justify-between shrink-0 bg-card/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <DialogTitle className="text-base sm:text-lg font-heading font-black text-foreground">
                  Book Technical Discovery
                </DialogTitle>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 uppercase font-bold">
                  Live Sync
                </span>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                <span>With Hashim Ahmed (Founder &amp; Director)</span>
                <span>•</span>
                <span className="flex items-center gap-1 font-mono text-emerald-500 font-medium">
                  <Video className="w-3 h-3" /> Google Meet
                </span>
              </p>
            </div>
          </div>

          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-muted-foreground hover:text-foreground flex items-center gap-1 px-3 py-1.5 rounded-xl border border-border/60 hover:bg-secondary/50 transition-all mr-6 shrink-0"
            title="Open in new window"
          >
            <span className="hidden sm:inline">New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </DialogHeader>

        {/* Embedded Booking Frame */}
        <div className="relative flex-1 w-full h-full bg-background overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background z-10">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <p className="text-xs font-mono text-muted-foreground">
                Connecting to Hashim Ahmed&apos;s live calendar...
              </p>
            </div>
          )}

          <iframe
            src={embedUrl}
            title="Cal.com Booking"
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            allow="camera; microphone; autoplay; clipboard-write; encrypted-media; fullscreen"
          />
        </div>

        {/* Footer Meta */}
        <div className="p-3 border-t border-border/50 bg-secondary/20 flex items-center justify-between text-[11px] font-mono text-muted-foreground px-5 shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Automatic Google Calendar &amp; Meet invite generated upon booking</span>
          </div>
          <span className="hidden sm:inline">Zero Middlemen</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
