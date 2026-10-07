import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Subtitle & Header -->
        <div class="flex flex-col items-start mb-16">
          <div class="cyber-badge mb-3">
            <span class="text-cyan-400 font-mono">// 01. IDENTITY & PHILOSOPHY</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineering Mobile Systems with <span class="text-gradient-cyan">Precision & Scale</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg max-w-3xl mt-4">
            A look into how mathematical background, architectural discipline, and 2.5+ years of commercial mobile production experience shape the software I ship.
          </p>
        </div>

        <!-- Main Grid: Narrative + Pillars -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Column: Biography & Background -->
          <div class="lg:col-span-6 flex flex-col gap-6">
            
            <div class="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <div class="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                The Analytical Approach to Mobile Architecture
              </h3>

              <p class="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                I hold a <strong class="text-white">Master of Computer Application (MCA)</strong> from Government MCA College (GTU), Ahmedabad, alongside a foundation in <strong class="text-white">Mathematics (B.Sc)</strong> from Mohanlal Sukhadia University (MLSU). This dual background allows me to approach mobile software engineering with mathematical rigor—prioritizing deterministic state transitions, efficient memory usage, and zero rounding errors in financial ledgers.
              </p>

              <p class="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                Currently at <strong class="text-cyan-300">TechAbbot</strong> (Ahmedabad), I build and maintain cross-platform mobile applications in <strong class="text-white">Flutter, Dart, and Kotlin</strong>. My work spans high-stakes environments including real-time warehouse picking systems, GST billing solutions, and multi-gateway e-commerce platforms.
              </p>

              <!-- Quick Info Badges -->
              <div class="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                <div class="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <div class="text-[11px] font-mono text-slate-400 uppercase">Current Base</div>
                  <div class="text-sm font-semibold text-slate-200 mt-0.5">Ahmedabad, Gujarat</div>
                </div>
                <div class="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <div class="text-[11px] font-mono text-slate-400 uppercase">Hometown</div>
                  <div class="text-sm font-semibold text-slate-200 mt-0.5">Revdar, Rajasthan</div>
                </div>
              </div>
            </div>

            <!-- Education Snapshot Card -->
            <div class="glass-card p-6 rounded-2xl">
              <h4 class="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <span>🎓 Academic Foundation</span>
              </h4>
              <div class="space-y-4">
                @for (edu of portfolio.education(); track edu.degree) {
                  <div class="flex items-start justify-between gap-4 p-3 rounded-xl bg-slate-900/40 border border-white/5">
                    <div>
                      <div class="font-bold text-sm text-slate-100">{{ edu.degree }}</div>
                      <div class="text-xs text-slate-400">{{ edu.institution }}</div>
                      <div class="text-[11px] text-cyan-400/80 font-mono mt-0.5">{{ edu.location }}</div>
                    </div>
                    <span class="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 whitespace-nowrap">
                      {{ edu.period }}
                    </span>
                  </div>
                }
              </div>
            </div>

          </div>

          <!-- Right Column: 4 Architecture Pillars -->
          <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            <!-- Pillar 1 -->
            <div class="glass-card p-6 rounded-2xl relative group">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h4 class="font-bold text-base text-white mb-2">Clean Architecture & BLoC</h4>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Strict separation of Presentation, Domain, and Data layers. Unidirectional data flow eliminates edge-case race conditions and simplifies automated testing.
              </p>
            </div>

            <!-- Pillar 2 -->
            <div class="glass-card p-6 rounded-2xl relative group">
              <div class="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h4 class="font-bold text-base text-white mb-2">Hardware & Barcode APIs</h4>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Deep experience interfacing with laser barcode scanners (Zebra/Honeywell), thermal receipt printers, and native Kotlin bridges for industrial reliability.
              </p>
            </div>

            <!-- Pillar 3 -->
            <div class="glass-card p-6 rounded-2xl relative group">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h4 class="font-bold text-base text-white mb-2">60 FPS Rendering & Stability</h4>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Profiling widget rebuilds, using compute isolates for intensive tasks (such as PDF generation), maintaining a 99.8% crash-free session benchmark.
              </p>
            </div>

            <!-- Pillar 4 -->
            <div class="glass-card p-6 rounded-2xl relative group">
              <div class="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h4 class="font-bold text-base text-white mb-2">AI-Driven Engineering Velocity</h4>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Applying prompt engineering and modern AI development tools for accelerated component prototyping, mock data pipelines, and rapid bug triaging.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class AboutComponent {
  protected readonly portfolio = inject(PortfolioService);
}
