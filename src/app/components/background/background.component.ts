import { Component, ElementRef, OnInit, OnDestroy, viewChild, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Dot {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  parallaxFactor: number;
}

@Component({
  selector: 'app-background',
  standalone: true,
  template: `
    <div class="dotr-background-wrap" aria-hidden="true">
      <!-- Ambient Edge Vignette (like dotr.in) -->
      <div class="dotr-ambient-aura"></div>
      
      <!-- Interactive Constellation Particle Canvas -->
      <canvas #particleCanvas class="dotr-particle-canvas"></canvas>
    </div>
  `,
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
    }

    .dotr-background-wrap {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 90% 70% at 50% 20%, #060b26 0%, #020617 75%, #010410 100%);
    }

    .dotr-particle-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  `]
})
export class BackgroundComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  readonly canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('particleCanvas');

  private animationFrameId: number | null = null;
  private dots: Dot[] = [];
  private mouseX = 0;
  private mouseY = 0;
  private targetMouseX = 0;
  private targetMouseY = 0;
  private resizeListener: (() => void) | null = null;
  private mouseListener: ((e: MouseEvent) => void) | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      this.initCanvas();
    }, 50);
  }

  private initCanvas(): void {
    const canvasEl = this.canvasRef()?.nativeElement;
    if (!canvasEl) return;

    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;

    const updateDimensions = () => {
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
      this.createDots(canvasEl.width, canvasEl.height);
    };

    updateDimensions();

    this.resizeListener = () => updateDimensions();
    window.addEventListener('resize', this.resizeListener, { passive: true });

    this.mouseListener = (e: MouseEvent) => {
      this.targetMouseX = (e.clientX - window.innerWidth / 2) * 0.05;
      this.targetMouseY = (e.clientY - window.innerHeight / 2) * 0.05;
    };
    window.addEventListener('mousemove', this.mouseListener, { passive: true });

    const render = () => {
      // Lerp mouse offset
      this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
      this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

      for (const dot of this.dots) {
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        // Wrap around bounds
        if (dot.x < 0) dot.x = canvasEl.width;
        if (dot.x > canvasEl.width) dot.x = 0;
        if (dot.y < 0) dot.y = canvasEl.height;
        if (dot.y > canvasEl.height) dot.y = 0;

        const renderX = dot.x + this.mouseX * dot.parallaxFactor;
        const renderY = dot.y + this.mouseY * dot.parallaxFactor;

        ctx.beginPath();
        ctx.arc(renderX, renderY, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 200, 240, ${dot.opacity})`;
        ctx.fill();
      }

      this.animationFrameId = requestAnimationFrame(render);
    };

    render();
  }

  private createDots(width: number, height: number): void {
    const count = Math.min(Math.floor((width * height) / 8000), 120);
    this.dots = [];

    for (let i = 0; i < count; i++) {
      this.dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() < 0.8 ? Math.random() * 1.5 + 0.6 : Math.random() * 2.5 + 1.2,
        opacity: Math.random() * 0.45 + 0.15,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        parallaxFactor: Math.random() * 0.8 + 0.2
      });
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
    if (this.mouseListener) {
      window.removeEventListener('mousemove', this.mouseListener);
    }
  }
}
