import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="py-24 relative z-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <!-- Section Header (dotr.in style) -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex mb-4">
            <div class="dotr-pill-badge">
              <span>Career History</span>
            </div>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Commercial Experience
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Track record of shipping production-grade applications in commercial team environments.
          </p>
        </div>

        <div class="space-y-10">
          @for (exp of portfolio.experience(); track exp.company) {
            <div class="dotr-card p-7 sm:p-10 relative">
              
              <!-- Card Header -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div class="flex items-center gap-3 flex-wrap">
                    <h3 class="text-xl sm:text-2xl font-bold text-white">{{ exp.role }}</h3>
                    @if (exp.current) {
                      <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-600/20 text-blue-300 border border-blue-500/30">
                        ACTIVE ROLE
                      </span>
                    }
                  </div>
                  
                  <div class="flex items-center gap-2 mt-1.5 text-blue-400 font-medium text-sm sm:text-base">
                    <span>{{ exp.company }}</span>
                    <span class="text-slate-600">•</span>
                    <span class="text-slate-400 text-xs sm:text-sm font-normal">{{ exp.location }}</span>
                  </div>
                </div>

                <div class="flex sm:flex-col items-start sm:items-end justify-between gap-1">
                  <span class="text-xs sm:text-sm font-mono text-slate-200 px-3 py-1 rounded-full bg-slate-900 border border-white/10">
                    {{ exp.period }}
                  </span>
                  <span class="text-[11px] font-mono text-slate-400">
                    {{ exp.duration }}
                  </span>
                </div>
              </div>

              <!-- Summary -->
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed my-6">
                {{ exp.summary }}
              </p>

              <!-- Responsibilities -->
              <div class="space-y-3 mb-8">
                <div class="text-xs font-mono uppercase tracking-wider text-slate-400">Key Engineering Responsibilities:</div>
                <ul class="space-y-2.5">
                  @for (item of exp.responsibilities; track item) {
                    <li class="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span class="text-blue-400 mt-1 font-bold">›</span>
                      <span class="leading-relaxed">{{ item }}</span>
                    </li>
                  }
                </ul>
              </div>

              <!-- Quantifiable Outcomes -->
              <div class="p-4 rounded-2xl bg-[#050920] border border-white/5 mb-8">
                <div class="text-xs font-mono uppercase text-blue-400 mb-2 font-semibold">
                  ⚡ Quantifiable Results &amp; Impact:
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  @for (outcome of exp.keyOutcomes; track outcome) {
                    <div class="text-xs text-slate-300 flex items-start gap-2">
                      <span class="text-blue-400 font-bold">✓</span>
                      <span>{{ outcome }}</span>
                    </div>
                  }
                </div>
              </div>

              <!-- Tech Stack -->
              <div>
                <div class="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Technologies Leveraged in Production:</div>
                <div class="flex flex-wrap gap-2">
                  @for (tech of exp.techStack; track tech) {
                    <span class="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-slate-300 font-mono">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent {
  protected readonly portfolio = inject(PortfolioService);
}
