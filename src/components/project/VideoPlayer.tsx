"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

/**
 * Lightweight custom video player used inside the device frames.
 * Click-to-play, looping, muted-by-default (so autoplay-style previews work),
 * with minimal controls overlaid.
 */
export function VideoPlayer({ src, poster, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div
      className={cn(
        "group/video relative h-full w-full overflow-hidden bg-bg",
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted={muted}
        playsInline
        preload="metadata"
        onClick={togglePlay}
        onEnded={() => setPlaying(false)}
        className="h-full w-full cursor-pointer object-cover"
      />

      {/* Big center play button when paused */}
      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 grid place-items-center bg-black/30 transition-colors hover:bg-black/20"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/90 text-white shadow-lg shadow-primary/40 transition-transform group-hover/video:scale-110">
            <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
          </span>
        </button>
      )}

      {/* Bottom-right controls when playing */}
      {playing && (
        <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 transition-opacity group-hover/video:opacity-100">
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black/80"
          >
            {muted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Pause"
            className="grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black/80"
          >
            <Pause className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
