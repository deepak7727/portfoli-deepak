import { Component, OnInit, OnDestroy, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    @if (isEnabled()) {
      <div 
        class="dotr-cursor-dot" 
        [style.transform]="'translate3d(' + dotX() + 'px, ' + dotY() + 'px, 0)'"
        [class.hidden]="!isVisible()">
      </div>
      <div 
        class="dotr-cursor-ring"
        [class.is-hovering]="cursorState() === 'hover'"
        [class.is-project]="cursorState() === 'project'"
        [class.hidden]="!isVisible()"
        [style.transform]="'translate3d(' + ringX() + 'px, ' + ringY() + 'px, 0)'">
        @if (cursorState() === 'project') {
          <span class="project-indicator">VIEW</span>
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
    }

    .dotr-cursor-dot {
      position: fixed;
      top: -3px;
      left: -3px;
      width: 6px;
      height: 6px;
      background: #3b82f6;
      border-radius: 50%;
      pointer-events: none;
      z-index: 999999;
      box-shadow: 0 0 8px rgba(59, 130, 246, 0.8);
      transition: opacity 0.15s ease;
      will-change: transform;
    }

    .dotr-cursor-ring {
      position: fixed;
      top: -18px;
      left: -18px;
      width: 36px;
      height: 36px;
      border: 1.5px solid rgba(59, 130, 246, 0.7);
      background: rgba(59, 130, 246, 0.12);
      border-radius: 50%;
      pointer-events: none;
      z-index: 999998;
      backdrop-filter: blur(1px);
      transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                  height 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                  top 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                  left 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                  border-color 0.2s ease,
                  background-color 0.2s ease,
                  opacity 0.15s ease;
      will-change: transform;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dotr-cursor-ring.is-hovering {
      top: -24px;
      left: -24px;
      width: 48px;
      height: 48px;
      border-color: rgba(96, 165, 250, 0.9);
      background: rgba(59, 130, 246, 0.2);
    }

    .dotr-cursor-ring.is-project {
      top: -32px;
      left: -32px;
      width: 64px;
      height: 64px;
      border-color: #60a5fa;
      background: rgba(29, 78, 216, 0.3);
    }

    .project-indicator {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: #ffffff;
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

      if (target.closest('.project-card, [data-cursor="project"]')) {
        this.cursorState.set('project');
        return;
      }

      if (target.closest('a, button, input, textarea, select, .dotr-btn-primary, .dotr-btn-secondary, [role="button"]')) {
        this.cursorState.set('hover');
        return;
      }

      this.cursorState.set('default');
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', () => this.isVisible.set(false));
    document.body.addEventListener('mouseenter', () => this.isVisible.set(true));

    const renderLoop = () => {
      const ease = 0.18;
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
