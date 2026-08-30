"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { HeroSlide as HeroSlideData } from "@/lib/types";
import { cn } from "@/lib/utils";

type HeroSlideProps = {
  slide: HeroSlideData;
  active: boolean;
  priority?: boolean;
  allowVideo: boolean;
};

export function HeroSlide({
  slide,
  active,
  priority = false,
  allowVideo,
}: HeroSlideProps) {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const showVideo =
    allowVideo && active && Boolean(slide.videoSrc) && !videoFailed;

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!showVideo) setVideoReady(false);
  }, [showVideo]);

  return (
    <div
      className={cn(
        "hero-media-layer absolute inset-0",
        ready && "is-ready",
        active && "is-active",
      )}
      aria-hidden={!active}
    >
      <Image
        src={slide.poster}
        alt={active ? slide.alt : ""}
        fill
        sizes="100vw"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        className={cn(
          "hero-photo object-cover",
          showVideo && videoReady && "opacity-0",
        )}
        style={
          {
            "--hero-pos": slide.objectPosition ?? "center",
            "--hero-pos-m": slide.mobileObjectPosition ?? "center",
          } as React.CSSProperties
        }
      />
      {showVideo ? (
        <video
          className={cn(
            "absolute inset-0 hidden h-full w-full object-cover transition-opacity duration-700 md:block",
            videoReady ? "opacity-100" : "opacity-0",
          )}
          style={{ objectPosition: slide.objectPosition ?? "center" }}
          autoPlay
          muted
          loop
          playsInline
          poster={slide.poster}
          preload="none"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          <source src={slide.videoSrc} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
