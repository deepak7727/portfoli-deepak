import { Component, OnInit, OnDestroy, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    @if (isEnabled()) {
      <div 
        class="custom-cursor-dot" 
        [style.transform]="'translate3d(' + dotX() + 'px, ' + dotY() + 'px, 0)'"
        [class.hidden]="!isVisible()">
      </div>
      <div 
        class="custom-cursor-ring"
        [class.is-hovering]="cursorState() === 'hover'"
        [class.is-project]="cursorState() === 'project'"
        [class.hidden]="!isVisible()"
        [style.transform]="'translate3d(' + ringX() + 'px, ' + ringY() + 'px, 0)'">
        @if (cursorState() === 'project') {
          <span class="view-tag">VIEW</span>
        }
      </div>
    }
  `,
  styles: [`
    :host {
      pointer-events: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999999;
      pointer-events: none;
    }

    .custom-cursor-dot {
      position: fixed;
      top: -4px;
      left: -4px;
      width: 8px;
      height: 8px;
      background: #00f2fe;
      border-radius: 50%;
      pointer-events: none;
      z-index: 999999;
      box-shadow: 0 0 10px #00f2fe, 0 0 20px rgba(0, 242, 254, 0.6);
      transition: opacity 0.15s ease, transform 0.02s linear;
      will-change: transform;
    }

    .custom-cursor-ring {
      position: fixed;
      top: -20px;
      left: -20px;
      width: 40px;
      height: 40px;
      border: 1.5px solid rgba(0, 242, 254, 0.55);
      border-radius: 50%;
      pointer-events: none;
      z-index: 999998;
      box-shadow: 0 0 15px rgba(0, 242, 254, 0.15);
      transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                  height 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                  border-color 0.25s ease,
                  background-color 0.25s ease,
                  box-shadow 0.25s ease,
                  opacity 0.15s ease;
      will-change: transform;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .custom-cursor-ring.is-hovering {
      top: -28px;
      left: -28px;
      width: 56px;
      height: 56px;
      border-color: rgba(56, 189, 248, 0.9);
      background-color: rgba(0, 242, 254, 0.08);
      box-shadow: 0 0 25px rgba(0, 242, 254, 0.35);
    }

    .custom-cursor-ring.is-project {
      top: -38px;
      left: -38px;
      width: 76px;
      height: 76px;
      border-color: #8b5cf6;
      background-color: rgba(139, 92, 246, 0.18);
      box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
      backdrop-filter: blur(2px);
    }

    .view-tag {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: #ffffff;
      text-shadow: 0 0 8px rgba(139, 92, 246, 0.9);
      pointer-events: none;
      animation: pulseText 1.5s ease-in-out infinite alternate;
    }

    @keyframes pulseText {
      from { transform: scale(0.95); opacity: 0.85; }
      to { transform: scale(1.05); opacity: 1; }
    }

    .hidden {
      opacity: 0;
    }
  `]
})
export class CursorComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  
  readonly isEnabled = signal<boolean>(false);
  readonly isVisible = signal<boolean>(false);
  readonly cursorState = signal<'default' | 'hover' | 'project'>('default');
  
  readonly dotX = signal<number>(0);
  readonly dotY = signal<number>(0);
  readonly ringX = signal<number>(0);
  readonly ringY = signal<number>(0);

  private targetX = 0;
  private targetY = 0;
  private currentRingX = 0;
  private currentRingY = 0;
  private animationFrameId: number | null = null;
  private listeners: (() => void)[] = [];

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Check touch and reduced motion
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      this.isEnabled.set(false);
      return;
    }

    this.isEnabled.set(true);

    const onMouseMove = (e: MouseEvent) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
      this.dotX.set(this.targetX);
      this.dotY.set(this.targetY);
      this.isVisible.set(true);

      const target = e.target as HTMLElement | null;
      if (!target) {
        this.cursorState.set('default');
        return;
      }

      const isProject = !!target.closest('.project-card, [data-cursor="project"]');
      if (isProject) {
        this.cursorState.set('project');
        return;
      }

      const isClickable = !!target.closest('a, button, input, textarea, select, .cyber-btn-primary, .cyber-btn-secondary, [role="button"], [data-cursor="hover"]');
      if (isClickable) {
        this.cursorState.set('hover');
        return;
      }

      this.cursorState.set('default');
    };

    const onMouseLeave = () => {
      this.isVisible.set(false);
    };

    const onMouseEnter = () => {
      this.isVisible.set(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    this.listeners.push(
      () => window.removeEventListener('mousemove', onMouseMove),
      () => document.body.removeEventListener('mouseleave', onMouseLeave),
      () => document.body.removeEventListener('mouseenter', onMouseEnter)
    );

    // Smooth lerp loop for the outer ring
    const renderLoop = () => {
      // Lerp factor
      const ease = 0.16;
      this.currentRingX += (this.targetX - this.currentRingX) * ease;
      this.currentRingY += (this.targetY - this.currentRingY) * ease;

      this.ringX.set(Math.round(this.currentRingX * 10) / 10);
      this.ringY.set(Math.round(this.currentRingY * 10) / 10);

      this.animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();
  }

  ngOnDestroy(): void {
    this.listeners.forEach(remove => remove());
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
