import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (project(); as p) {
      <div 
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/85 backdrop-blur-xl animate-fade-in overflow-y-auto"
        role="dialog" 
        aria-modal="true"
        (click)="handleBackdropClick($event)">
        
        <div class="relative w-full max-w-5xl my-auto bg-[#070c24] border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
          
          <!-- Modal Header Bar -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#05091d] sticky top-0 z-20 backdrop-blur-md">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <div>
                <h3 class="text-base sm:text-lg font-bold text-white font-mono">{{ p.title }}</h3>
                <span class="text-xs text-slate-400 font-mono">{{ p.platform }}</span>
              </div>
            </div>

            <button 
              type="button" 
              (click)="close.emit()"
              class="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close Modal">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Modal Scrollable Content -->
          <div class="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            
            <!-- Hero Banner: Title, Subtitle & Stat Pills -->
            <div class="space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <span class="dotr-pill-badge !text-xs !py-1 !px-3">{{ p.category }}</span>
                <span class="text-xs px-3 py-1 rounded-full bg-blue-600/10 text-blue-300 border border-blue-500/20 font-mono">
                  {{ p.architecture }}
                </span>
              </div>

              <h2 class="text-2xl sm:text-3xl font-bold text-white">{{ p.subtitle }}</h2>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">{{ p.description }}</p>

              <!-- Stats Row -->
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                @for (stat of p.stats; track stat.label) {
                  <div class="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5">
                    <div class="text-[11px] font-mono uppercase text-slate-400">{{ stat.label }}</div>
                    <div class="text-sm sm:text-base font-bold text-white font-mono mt-0.5">{{ stat.value }}</div>
                  </div>
                }
              </div>
            </div>

            <!-- Screenshot Gallery Carousel -->
            @if (p.screenshots.length > 0) {
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h4 class="text-xs font-mono uppercase text-slate-300 tracking-wider flex items-center gap-2">
                    <span>📸</span> Production Interface Screenshots
                  </h4>
                  <div class="text-xs font-mono text-blue-400">
                    {{ activeScreenshotIndex() + 1 }} / {{ p.screenshots.length }}
                  </div>
                </div>

                <!-- Active Image in Phone Frame -->
                <div class="relative rounded-2xl bg-slate-950 border border-white/10 p-4 sm:p-8 flex items-center justify-center overflow-hidden min-h-[350px]">
                  <div class="max-w-xs sm:max-w-sm rounded-[32px] overflow-hidden border-[5px] border-slate-800 shadow-2xl relative bg-black">
                    <div class="w-16 h-2.5 bg-slate-900 rounded-b-lg mx-auto mb-1"></div>
                    <img 
                      [src]="p.screenshots[activeScreenshotIndex()].url" 
                      [alt]="p.screenshots[activeScreenshotIndex()].caption"
                      class="w-full h-auto object-contain max-h-[500px] rounded-[24px]" />
                  </div>

                  <!-- Controls -->
                  @if (p.screenshots.length > 1) {
                    <button 
                      type="button" 
                      (click)="prevScreenshot()"
                      class="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/90 border border-white/10 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                      aria-label="Previous Screenshot">
                      &larr;
                    </button>
                    <button 
                      type="button" 
                      (click)="nextScreenshot()"
                      class="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/90 border border-white/10 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                      aria-label="Next Screenshot">
                      &rarr;
                    </button>
                  }
                </div>

                <!-- Caption -->
                <p class="text-center text-xs font-mono text-slate-400">
                  {{ p.screenshots[activeScreenshotIndex()].caption }}
                </p>

                <!-- Thumbnail Ribbon -->
                <div class="flex items-center gap-2 overflow-x-auto pb-2">
                  @for (ss of p.screenshots; track ss.url; let idx = $index) {
                    <button 
                      type="button"
                      (click)="activeScreenshotIndex.set(idx)"
                      class="flex-shrink-0 w-16 h-24 rounded-lg overflow-hidden border-2 transition-all"
                      [class.border-blue-500]="activeScreenshotIndex() === idx"
                      [class.border-transparent]="activeScreenshotIndex() !== idx"
                      [class.opacity-50]="activeScreenshotIndex() !== idx">
                      <img [src]="ss.url" [alt]="ss.caption" class="w-full h-full object-cover" />
                    </button>
                  }
                </div>
              </div>
            }

            <!-- Deep Dive Breakdown -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              
              <!-- Features -->
              <div class="space-y-3">
                <h4 class="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
                  Key Features
                </h4>
                <ul class="space-y-2">
                  @for (feature of p.keyFeatures; track feature) {
                    <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span class="text-blue-400 mt-0.5">›</span>
                      <span>{{ feature }}</span>
                    </li>
                  }
                </ul>
              </div>

              <!-- Contribution -->
              <div class="space-y-3">
                <h4 class="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  Engineering Contribution
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {{ p.myContribution }}
                </p>
                <div class="pt-2">
                  <div class="text-[11px] font-mono text-slate-400 uppercase mb-2">Technologies:</div>
                  <div class="flex flex-wrap gap-1.5">
                    @for (tag of p.tags; track tag) {
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-white/10">
                        {{ tag }}
                      </span>
                    }
                  </div>
                </div>
              </div>

            </div>

            <!-- Challenges & Solutions -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-2xl bg-slate-950/70 border border-white/5">
              <div>
                <div class="text-xs font-mono uppercase text-slate-400 font-semibold mb-1">
                  The Challenge
                </div>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">{{ p.challenges }}</p>
              </div>

              <div>
                <div class="text-xs font-mono uppercase text-blue-400 font-semibold mb-1">
                  The Architectural Solution
                </div>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">{{ p.solution }}</p>
              </div>
            </div>

          </div>

          <!-- Modal Footer CTA -->
          <div class="px-6 py-4 bg-[#05091d] border-t border-white/10 flex items-center justify-between">
            <a 
              [routerLink]="['/projects', p.id]"
              (click)="close.emit()"
              class="text-xs font-mono text-blue-400 hover:text-white flex items-center gap-1.5 transition-colors">
              <span>Open Dedicated Page</span>
              <span>&rarr;</span>
            </a>
            <button 
              type="button" 
              (click)="close.emit()"
              class="dotr-btn-secondary !py-1.5 !px-4 !text-xs">
              Close Details
            </button>
          </div>

        </div>
      </div>
    }
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.2s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }
  `]
})
export class ProjectDetailModalComponent {
  readonly project = input<Project | null>(null);
  readonly close = output<void>();

  readonly activeScreenshotIndex = signal<number>(0);

  handleBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).getAttribute('role') === 'dialog') {
      this.close.emit();
    }
  }

  nextScreenshot(): void {
    const p = this.project();
    if (!p || p.screenshots.length <= 1) return;
    this.activeScreenshotIndex.update(idx => (idx + 1) % p.screenshots.length);
  }

  prevScreenshot(): void {
    const p = this.project();
    if (!p || p.screenshots.length <= 1) return;
    this.activeScreenshotIndex.update(idx => (idx - 1 + p.screenshots.length) % p.screenshots.length);
  }
}
