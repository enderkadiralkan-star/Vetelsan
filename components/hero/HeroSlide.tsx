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
  // Defer rendering non-first slides until they are first activated
  const [hasBeenActive, setHasBeenActive] = useState(priority);
  const showVideo =
    allowVideo && active && Boolean(slide.videoSrc) && !videoFailed;

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (active) setHasBeenActive(true);
  }, [active]);

  useEffect(() => {
    if (!showVideo) setVideoReady(false);
  }, [showVideo]);

  const commonImageProps = {
    fill: true as const,
    quality: 80,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    fetchPriority: priority ? ("high" as const) : ("low" as const),
    className: cn(
      "hero-photo object-cover",
      showVideo && videoReady && "opacity-0",
    ),
    style: {
      "--hero-pos": slide.objectPosition ?? "center",
      "--hero-pos-m": slide.mobileObjectPosition ?? "center",
    } as React.CSSProperties,
  };

  return (
    <div
      className={cn(
        "hero-media-layer absolute inset-0",
        ready && "is-ready",
        active && "is-active",
      )}
      aria-hidden={!active}
    >
      {hasBeenActive ? (
        <>
          {/* Mobile image — served below md breakpoint */}
          <Image
            src={slide.mobilePoster ?? slide.poster}
            alt={active ? slide.alt : ""}
            sizes="100vw"
            {...commonImageProps}
            className={cn(commonImageProps.className, "md:hidden")}
          />
          {/* Desktop image — served at md and above */}
          <Image
            src={slide.poster}
            alt={active ? slide.alt : ""}
            sizes="100vw"
            {...commonImageProps}
            className={cn(commonImageProps.className, "hidden md:block")}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#111111]" />
      )}
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
