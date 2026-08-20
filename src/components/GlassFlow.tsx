import { useEffect, useRef } from "react";

interface GlassFlowProps {
  className?: string;
}

export default function GlassFlow({ className = "" }: GlassFlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Glass blobs configuration
    const blobs = [
      { x: 0.2, y: 0.3, radius: 300, speed: 0.0003, offset: 0, color: "rgba(65, 174, 172, 0.08)" },
      { x: 0.8, y: 0.6, radius: 250, speed: 0.0004, offset: 2, color: "rgba(33, 150, 243, 0.06)" },
      { x: 0.5, y: 0.8, radius: 350, speed: 0.0002, offset: 4, color: "rgba(161, 233, 224, 0.05)" },
      { x: 0.3, y: 0.5, radius: 280, speed: 0.00035, offset: 1, color: "rgba(65, 174, 172, 0.04)" },
    ];

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        const cx = canvas.width * blob.x + Math.sin(time * blob.speed + blob.offset) * 100;
        const cy = canvas.height * blob.y + Math.cos(time * blob.speed * 0.8 + blob.offset) * 80;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, blob.radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Glass streaks - diagonal flowing lines
      for (let i = 0; i < 5; i++) {
        const y = ((time * 0.5 + i * 200) % (canvas.height + 400)) - 200;
        const gradient = ctx.createLinearGradient(0, y, canvas.width, y + 100);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.01)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.02)");
        gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.01)");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y + 60);
        ctx.lineTo(canvas.width, y + 100);
        ctx.lineTo(0, y + 40);
        ctx.closePath();
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: "blur(60px)" }}
      />
      {/* Overlay to blend with background */}
      <div className="absolute inset-0 bg-[#0a0e1a]/40" />
    </div>
  );
}
