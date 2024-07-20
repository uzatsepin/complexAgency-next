'use client'

import { useCallback, useRef } from "react";

import { useMousePosition } from "@/hooks/useMousePosition";

import Image from "next/image";

function calculateCardRotation({
  currentX,
  currentY,
  centerX,
  centerY,
  maxRotationX,
  maxRotationY,
}: {
  currentX: number;
  currentY: number;
  centerX: number;
  centerY: number;
  maxRotationX: number;
  maxRotationY: number;
}) {
  // Calculate the distance from the center
  const deltaX = currentX - centerX;
  const deltaY = currentY - centerY;

  // Calculate the maximum distance (assuming a rectangular area)
  const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
  // Calculate the actual distance
  const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  // Calculate the rotation factor (0 to 1)
  const rotationFactor = distance / maxDistance;

  // Calculate rotations (inverted for natural tilt effect)
  const rotationY = ((-deltaX / centerX) * maxRotationY * rotationFactor).toFixed(2);
  const rotationX = ((deltaY / centerY) * maxRotationX * rotationFactor).toFixed(2);
  return { rotationX, rotationY };
}

interface GithubCardSkewProps {
    title: string;
    text: string;
    image: string;
  }

export default function GithubCardSkew({title, text, image}:GithubCardSkewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<NodeJS.Timeout>();

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!containerRef.current) {
      return;
    }

    const { width, height } = containerRef.current.getBoundingClientRect();
    const { rotationX, rotationY } = calculateCardRotation({
      centerX: width / 2,
      centerY: height / 2,
      currentX: x,
      currentY: y,
      maxRotationX: 4,
      maxRotationY: 6,
    });
    containerRef.current.style.setProperty("--x", `${rotationX}deg`);
    containerRef.current.style.setProperty("--y", `${rotationY}deg`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef}
      className="flex max-w-full md:max-w-[400px] transform-gpu flex-col gap-4 rounded-3xl border border-zinc-500 bg-zinc-900 p-10 text-zinc-200 transition-transform ease-linear will-change-transform relative shadow-[0px 0px 150px rgba(59, 95, 150, 0.35)]"
      style={{
        transform: "perspective(400px) rotateX(var(--x)) rotateY(var(--y))",
        transitionDuration: "50ms",
      }}
      onMouseEnter={() => {
        resetRef.current = setTimeout(() => {
          if (!containerRef.current) {
            return;
          }

          // Reset the transition duration to 0 so that the mouse movement is smooth
          containerRef.current.style.transitionDuration = "0ms";
        }, 300);
      }}
      onMouseLeave={() => {
        clearTimeout(resetRef.current);
        if (!containerRef.current) {
          return;
        }

        containerRef.current.style.transitionDuration = "50ms";
        containerRef.current.style.setProperty("--x", "0deg");
        containerRef.current.style.setProperty("--y", "0deg");
      }}
    >
      <h1 className=" text-2xl font-bold tracking-tight">{title}</h1>

      <p className="text-lg text-[#FFFFFF]/80 pb-30">{text}</p>

      <Image src={image} width={150} height={150} alt={title} className="absolute right-0 bottom-0 -z-10 opacity-30"/>
    </div>
  );
}

