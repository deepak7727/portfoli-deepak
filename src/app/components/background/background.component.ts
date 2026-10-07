import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  template: `
    <div class="futuristic-background-container" aria-hidden="true">
      <!-- Cyber Perspective Grid with Radial Mask -->
      <div class="cyber-grid"></div>
      
      <!-- Ambient Glowing Orbs -->
      <div class="orb orb-cyan"></div>
      <div class="orb orb-violet"></div>
      <div class="orb orb-blue"></div>
      <div class="orb orb-emerald"></div>

      <!-- Subtle Cyber Scan/Wave Lines -->
      <div class="cyber-scanline"></div>

      <!-- Floating Star / Particle Dots -->
      <div class="particles-layer">
        <span class="particle p1"></span>
        <span class="particle p2"></span>
        <span class="particle p3"></span>
        <span class="particle p4"></span>
        <span class="particle p5"></span>
        <span class="particle p6"></span>
        <span class="particle p7"></span>
        <span class="particle p8"></span>
      </div>
    </div>
  `,
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      z-index: 0;
      pointer-events: none;
    }

    .futuristic-background-container {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 20%, #0d1322 0%, #07090e 70%, #040508 100%);
    }

    /* Cyber Grid */
    .cyber-grid {
      position: absolute;
      inset: 0;
      background-size: 50px 50px;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 85%);
      -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 85%);
      opacity: 0.8;
    }

    /* Large Ambient Blurred Glowing Orbs */
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      -webkit-filter: blur(100px);
      opacity: 0.35;
      pointer-events: none;
      will-change: transform;
    }

    .orb-cyan {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, #00f2fe 0%, rgba(0, 242, 254, 0.2) 70%, transparent 100%);
      top: -100px;
      left: -100px;
      animation: floatOrb1 22s ease-in-out infinite alternate;
    }

    .orb-violet {
      width: 550px;
      height: 550px;
      background: radial-gradient(circle, #8b5cf6 0%, rgba(139, 92, 246, 0.2) 70%, transparent 100%);
      top: 25%;
      right: -150px;
      animation: floatOrb2 26s ease-in-out infinite alternate;
    }

    .orb-blue {
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, #1d4ed8 0%, rgba(29, 78, 216, 0.15) 70%, transparent 100%);
      bottom: -150px;
      left: 15%;
      animation: floatOrb3 30s ease-in-out infinite alternate;
    }

    .orb-emerald {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, #10b981 0%, rgba(16, 185, 129, 0.15) 70%, transparent 100%);
      bottom: 20%;
      right: 25%;
      opacity: 0.18;
      animation: floatOrb4 24s ease-in-out infinite alternate;
    }

    /* Subtle Floating Particles */
    .particles-layer {
      position: absolute;
      inset: 0;
    }

    .particle {
      position: absolute;
      border-radius: 50%;
      background: #38bdf8;
      box-shadow: 0 0 10px #38bdf8;
      animation: particleFloat 12s ease-in-out infinite;
    }

    .p1 { width: 3px; height: 3px; top: 15%; left: 20%; animation-delay: 0s; opacity: 0.4; }
    .p2 { width: 4px; height: 4px; top: 35%; left: 75%; animation-delay: 2s; opacity: 0.6; }
    .p3 { width: 2px; height: 2px; top: 60%; left: 40%; animation-delay: 4s; opacity: 0.5; }
    .p4 { width: 3px; height: 3px; top: 80%; left: 85%; animation-delay: 1s; opacity: 0.4; }
    .p5 { width: 2px; height: 2px; top: 25%; left: 60%; animation-delay: 3s; opacity: 0.3; }
    .p6 { width: 4px; height: 4px; top: 70%; left: 15%; animation-delay: 5s; opacity: 0.5; }
    .p7 { width: 3px; height: 3px; top: 45%; left: 90%; animation-delay: 2.5s; opacity: 0.4; }
    .p8 { width: 2px; height: 2px; top: 90%; left: 50%; animation-delay: 4.5s; opacity: 0.6; }

    @keyframes floatOrb1 {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(120px, 80px) scale(1.12); }
      100% { transform: translate(60px, 140px) scale(0.95); }
    }

    @keyframes floatOrb2 {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-100px, 90px) scale(1.1); }
      100% { transform: translate(-50px, -60px) scale(0.9); }
    }

    @keyframes floatOrb3 {
      0% { transform: translate(0, 0) scale(0.95); }
      50% { transform: translate(80px, -90px) scale(1.15); }
      100% { transform: translate(-60px, -40px) scale(1); }
    }

    @keyframes floatOrb4 {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-70px, -70px) scale(1.1); }
      100% { transform: translate(50px, -40px) scale(0.92); }
    }

    @keyframes particleFloat {
      0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
      50% { transform: translateY(-25px) scale(1.3); opacity: 0.8; }
    }

    @media (prefers-reduced-motion: reduce) {
      .orb, .particle {
        animation: none !important;
      }
    }
  `]
})
export class BackgroundComponent {}
