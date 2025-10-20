'use client';

import React, { useEffect, useRef } from 'react';

export default function Rain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Raindrop class
    class Raindrop {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.length = Math.random() * 15 + 10;
        this.speed = Math.random() * 3 + 2;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -this.length;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;

        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
        gradient.addColorStop(0, `rgba(0, 212, 255, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(0, 212, 255, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
      }
    }

    // Create raindrops (reduced number for drizzle effect)
    const raindrops: Raindrop[] = [];
    for (let i = 0; i < 100; i++) {
      raindrops.push(new Raindrop());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      raindrops.forEach((drop) => {
        drop.fall();
        drop.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
