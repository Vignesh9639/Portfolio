"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  alpha: number;
};

type Trail = {
  x: number;
  y: number;
  alpha: number;
};

export function AboutNeonMachine() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;

    const particles: Particle[] = [];
    const trails: Trail[] = [];

    let startTime = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    /*
     * ---------------------------------------------------------
     * Helpers
     * ---------------------------------------------------------
     */

    const glowStroke = (
      points: { x: number; y: number }[],
      color: string,
      lineWidth: number,
      blur: number,
    ) => {
      if (points.length < 2) return;

      ctx.save();

      ctx.beginPath();

      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.shadowColor = color;
      ctx.shadowBlur = blur;

      ctx.stroke();

      ctx.restore();
    };

    /*
     * ---------------------------------------------------------
     * Perspective floor
     * ---------------------------------------------------------
     */

    const drawPerspectiveTrack = (time: number) => {
      const horizon = height * 0.67;

      ctx.save();

      /*
       * Horizon glow
       */
      const horizonGlow = ctx.createLinearGradient(
        0,
        horizon - 40,
        0,
        horizon + 70,
      );

      horizonGlow.addColorStop(
        0,
        "rgba(0, 190, 210, 0)",
      );

      horizonGlow.addColorStop(
        0.5,
        "rgba(0, 190, 210, 0.035)",
      );

      horizonGlow.addColorStop(
        1,
        "rgba(0, 190, 210, 0)",
      );

      ctx.fillStyle = horizonGlow;

      ctx.fillRect(
        0,
        horizon - 40,
        width,
        110,
      );

      /*
       * Horizontal perspective lines
       */
      for (let i = 0; i < 9; i++) {
        const raw =
          (i + 1) / 9;

        const curve =
          Math.pow(raw, 2.4);

        const y =
          horizon +
          curve * (height - horizon);

        ctx.beginPath();

        ctx.moveTo(0, y);
        ctx.lineTo(width, y);

        ctx.strokeStyle = `rgba(0, 180, 200, ${
          0.018 + raw * 0.025
        })`;

        ctx.lineWidth = 0.5;

        ctx.stroke();
      }

      /*
       * Perspective rays
       */
      const vanishingX = width * 0.54;

      for (let i = -12; i <= 12; i++) {
        const bottomX =
          vanishingX +
          i * (width * 0.085);

        ctx.beginPath();

        ctx.moveTo(
          vanishingX,
          horizon,
        );

        ctx.lineTo(
          bottomX,
          height,
        );

        ctx.strokeStyle =
          "rgba(0, 170, 190, 0.025)";

        ctx.lineWidth = 0.5;

        ctx.stroke();
      }

      /*
       * Animated track lines
       */
      const offset =
        (time * 0.00025) % 1;

      for (let i = 0; i < 7; i++) {
        const progress =
          (i / 7 + offset) % 1;

        const y =
          horizon +
          Math.pow(progress, 2.2) *
            (height - horizon);

        const alpha =
          Math.sin(progress * Math.PI) *
          0.06;

        ctx.beginPath();

        ctx.moveTo(
          width * 0.08,
          y,
        );

        ctx.lineTo(
          width * 0.92,
          y,
        );

        ctx.strokeStyle = `rgba(0, 215, 235, ${alpha})`;

        ctx.lineWidth =
          0.6 + progress * 0.8;

        ctx.stroke();
      }

      ctx.restore();
    };

    /*
     * ---------------------------------------------------------
     * Particles
     * ---------------------------------------------------------
     */

    const spawnParticle = () => {
      particles.push({
        x: width * 0.52 +
          (Math.random() - 0.5) *
            width *
            0.45,

        y:
          height * 0.35 +
          Math.random() *
            height *
            0.45,

        size:
          Math.random() *
            1.5 +
          0.3,

        speed:
          Math.random() *
            1.8 +
          0.5,

        alpha:
          Math.random() *
            0.35 +
          0.08,
      });
    };

    const drawParticles = () => {
      if (particles.length < 70) {
        spawnParticle();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.x -= particle.speed;

        if (particle.x < -10) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2,
        );

        ctx.fillStyle =
          `rgba(120, 235, 245, ${particle.alpha})`;

        ctx.shadowColor =
          "#00d9ee";

        ctx.shadowBlur = 8;

        ctx.fill();
      }
    };

    /*
     * ---------------------------------------------------------
     * Energy wheel
     * ---------------------------------------------------------
     */

    const drawWheel = (
      x: number,
      y: number,
      radius: number,
      rotation: number,
      opacity: number,
    ) => {
      ctx.save();

      ctx.translate(x, y);
      ctx.rotate(rotation);

      /*
       * Outer bloom
       */
      ctx.beginPath();

      ctx.arc(
        0,
        0,
        radius,
        0,
        Math.PI * 2,
      );

      ctx.strokeStyle =
        `rgba(0, 225, 240, ${opacity * 0.85})`;

      ctx.lineWidth = 2;

      ctx.shadowColor =
        "#00e5f5";

      ctx.shadowBlur = 24;

      ctx.stroke();

      /*
       * Secondary ring
       */
      ctx.beginPath();

      ctx.arc(
        0,
        0,
        radius * 0.72,
        0,
        Math.PI * 2,
      );

      ctx.strokeStyle =
        `rgba(0, 180, 205, ${opacity * 0.45})`;

      ctx.lineWidth = 1;

      ctx.shadowBlur = 10;

      ctx.stroke();

      /*
       * Energy segments
       */
      for (let i = 0; i < 8; i++) {
        const start =
          i * (Math.PI / 4) +
          0.08;

        const end =
          start + 0.18;

        ctx.beginPath();

        ctx.arc(
          0,
          0,
          radius * 0.9,
          start,
          end,
        );

        ctx.strokeStyle =
          `rgba(120, 245, 255, ${
            opacity * 0.55
          })`;

        ctx.lineWidth = 1;

        ctx.stroke();
      }

      /*
       * Core
       */
      ctx.beginPath();

      ctx.arc(
        0,
        0,
        radius * 0.12,
        0,
        Math.PI * 2,
      );

      ctx.fillStyle =
        "#d9fcff";

      ctx.shadowColor =
        "#00eaff";

      ctx.shadowBlur = 18;

      ctx.fill();

      ctx.restore();
    };

    /*
     * ---------------------------------------------------------
     * Vehicle
     * ---------------------------------------------------------
     */

    const drawVehicle = (
      x: number,
      y: number,
      scale: number,
      rotation: number,
      speed: number,
      opacity: number,
    ) => {
      ctx.save();

      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);

      const rearWheel = {
        x: -62,
        y: 18,
      };

      const frontWheel = {
        x: 66,
        y: 8,
      };

      /*
       * Ground shadow
       */
      ctx.beginPath();

      ctx.ellipse(
        0,
        40,
        105,
        6,
        0,
        0,
        Math.PI * 2,
      );

      ctx.fillStyle =
        `rgba(0, 200, 220, ${
          opacity * 0.07
        })`;

      ctx.shadowColor =
        "#00d9ee";

      ctx.shadowBlur = 30;

      ctx.fill();

      /*
       * Main silhouette
       */
      const body = [
        { x: -66, y: 8 },
        { x: -40, y: 1 },
        { x: -17, y: -15 },
        { x: 8, y: -24 },
        { x: 32, y: -17 },
        { x: 54, y: -2 },
        { x: 70, y: 7 },
        { x: 48, y: 12 },
        { x: 23, y: 7 },
        { x: 2, y: 5 },
        { x: -19, y: 15 },
        { x: -44, y: 21 },
      ];

      glowStroke(
        body,
        `rgba(50, 235, 245, ${opacity})`,
        2,
        20,
      );

      /*
       * Inner chassis
       */
      const chassis = [
        { x: -42, y: 8 },
        { x: -12, y: -9 },
        { x: 15, y: -12 },
        { x: 39, y: 2 },
        { x: 10, y: 3 },
        { x: -12, y: 10 },
        { x: -42, y: 8 },
      ];

      glowStroke(
        chassis,
        `rgba(0, 185, 210, ${
          opacity * 0.7
        })`,
        1.1,
        10,
      );

      /*
       * Cockpit
       */
      const cockpit = [
        { x: -12, y: -10 },
        { x: -2, y: -31 },
        { x: 17, y: -28 },
        { x: 27, y: -12 },
      ];

      glowStroke(
        cockpit,
        `rgba(120, 250, 255, ${
          opacity * 0.9
        })`,
        1.6,
        16,
      );

      /*
       * Rider visor
       */
      ctx.beginPath();

      ctx.moveTo(-2, -26);
      ctx.lineTo(12, -27);

      ctx.strokeStyle =
        `rgba(230, 255, 255, ${
          opacity * 0.85
        })`;

      ctx.lineWidth = 1.5;

      ctx.shadowColor =
        "#00eaff";

      ctx.shadowBlur = 12;

      ctx.stroke();

      /*
       * Energy spine
       */
      ctx.beginPath();

      ctx.moveTo(-20, 0);
      ctx.lineTo(42, 0);

      ctx.strokeStyle =
        `rgba(0, 230, 245, ${
          opacity * 0.7
        })`;

      ctx.lineWidth = 1;

      ctx.shadowColor =
        "#00d9ee";

      ctx.shadowBlur = 10;

      ctx.stroke();

      /*
       * Wheels
       */
      drawWheel(
        rearWheel.x,
        rearWheel.y,
        25,
        speed * 0.02,
        opacity,
      );

      drawWheel(
        frontWheel.x,
        frontWheel.y,
        25,
        speed * 0.02,
        opacity,
      );

      /*
       * Front beam
       */
      ctx.beginPath();

      ctx.moveTo(
        frontWheel.x + 24,
        frontWheel.y,
      );

      ctx.lineTo(
        frontWheel.x + 125,
        frontWheel.y,
      );

      ctx.strokeStyle =
        `rgba(0, 235, 245, ${
          opacity * 0.65
        })`;

      ctx.lineWidth = 1;

      ctx.shadowColor =
        "#00eaff";

      ctx.shadowBlur = 14;

      ctx.stroke();

      ctx.restore();
    };

    /*
     * ---------------------------------------------------------
     * Main animation
     * ---------------------------------------------------------
     */

    const render = (time: number) => {
      if (!width || !height) return;

      const elapsed =
        time - startTime;

      const duration = 9000;

      const progress =
        (elapsed % duration) /
        duration;

      /*
       * Cinematic entrance.
       */
      let vehicleProgress = 0;

      if (progress < 0.12) {
        vehicleProgress =
          progress / 0.12;

        vehicleProgress =
          vehicleProgress *
          vehicleProgress *
          (3 - 2 * vehicleProgress);
      } else if (progress < 0.88) {
        vehicleProgress =
          (progress - 0.12) / 0.76;
      } else {
        const exitProgress =
          (progress - 0.88) / 0.12;

        vehicleProgress =
          1 +
          exitProgress *
          0.18;
      }

      /*
       * Horizontal path.
       */
      const startX =
        -180;

      const endX =
        width + 180;

      const x =
        startX +
        (endX - startX) *
          vehicleProgress;

      /*
       * Slight cinematic arc.
       */
      const baseY =
        height * 0.68;

      const y =
        baseY -
        Math.sin(
          vehicleProgress * Math.PI,
        ) *
          height *
          0.09;

      /*
       * Speed.
       */
      const speed =
        5 +
        Math.sin(
          Math.min(vehicleProgress, 1) *
            Math.PI,
        ) *
          15;

      /*
       * Vehicle angle.
       */
      const rotation =
        -0.035 +
        Math.sin(
          vehicleProgress * Math.PI,
        ) *
          -0.025;

      /*
       * Responsive scale.
       */
      const scale =
        Math.min(
          width / 1100,
          1,
        ) * 1.15;

      /*
       * Opacity.
       */
      let opacity = 1;

      if (progress < 0.08) {
        opacity =
          progress / 0.08;
      }

      if (progress > 0.91) {
        opacity =
          1 -
          (progress - 0.91) /
            0.09;
      }

      /*
       * Clear.
       */
      ctx.clearRect(
        0,
        0,
        width,
        height,
      );

      /*
       * Environment.
       */
      drawPerspectiveTrack(time);

      drawParticles();

      /*
       * Vehicle trails.
       */
      trails.push({
        x,
        y,
        alpha: opacity,
      });

      if (trails.length > 70) {
        trails.shift();
      }

      for (
        let i = 0;
        i < trails.length - 1;
        i++
      ) {
        const point =
          trails[i];

        const next =
          trails[i + 1];

        const trailProgress =
          i / trails.length;

        const alpha =
          trailProgress *
          0.42 *
          opacity;

        ctx.beginPath();

        ctx.moveTo(
          point.x,
          point.y + 24,
        );

        ctx.lineTo(
          next.x,
          next.y + 24,
        );

        ctx.strokeStyle =
          `rgba(0, 225, 240, ${alpha})`;

        ctx.lineWidth =
          0.7 +
          trailProgress * 3;

        ctx.shadowColor =
          "#00dff5";

        ctx.shadowBlur = 14;

        ctx.stroke();
      }

      /*
       * Secondary speed streaks.
       */
      for (let i = 0; i < 9; i++) {
        const streakOffset =
          ((time * 0.0005 *
            (i + 1)) %
            1) *
          width;

        const streakX =
          streakOffset -
          width *
            0.15;

        const streakY =
          height *
            (0.48 + i * 0.025);

        ctx.beginPath();

        ctx.moveTo(
          streakX,
          streakY,
        );

        ctx.lineTo(
          streakX + 60 + i * 18,
          streakY,
        );

        ctx.strokeStyle =
          `rgba(0, 190, 210, ${
            0.018 +
            i * 0.003
          })`;

        ctx.lineWidth = 0.6;

        ctx.stroke();
      }

      /*
       * Vehicle.
       */
      if (
        progress > 0.015 &&
        progress < 0.98
      ) {
        drawVehicle(
          x,
          y,
          scale,
          rotation,
          speed,
          opacity,
        );
      }

      /*
       * Scanner beam.
       */
      const scannerX =
        x + 140 * scale;

      if (
        scannerX > -200 &&
        scannerX < width + 200
      ) {
        const gradient =
          ctx.createLinearGradient(
            scannerX - 220,
            0,
            scannerX + 220,
            0,
          );

        gradient.addColorStop(
          0,
          "rgba(0,220,240,0)",
        );

        gradient.addColorStop(
          0.5,
          `rgba(0,220,240,${
            0.025 * opacity
          })`,
        );

        gradient.addColorStop(
          1,
          "rgba(0,220,240,0)",
        );

        ctx.fillStyle =
          gradient;

        ctx.fillRect(
          scannerX - 220,
          0,
          440,
          height,
        );
      }

      frame =
        requestAnimationFrame(render);
    };

    resize();

    const observer =
      new ResizeObserver(resize);

    observer.observe(canvas);

    frame =
      requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}