"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: string;
}

export function GlowingEffect({
  children,
  className,
  glowColor = "neon-blue",
  borderRadius = "rounded-xl",
}: GlowingEffectProps) {
  return (
    <motion.div
      className={cn(
        "relative group",
        borderRadius,
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated glowing border */}
      <div
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple rounded-xl opacity-0 group-hover:opacity-75 blur-sm transition duration-500 group-hover:duration-200 animate-pulse-glow",
          borderRadius
        )}
      />

      {/* Content container */}
      <div className={cn("relative", borderRadius)}>
        {children}
      </div>
    </motion.div>
  );
}
