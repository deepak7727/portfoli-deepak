import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-start mb-16">
          <div class="cyber-badge mb-3">
            <span class="text-cyan-400 font-mono">// 02. CAREER CHRONOLOGY</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Commercial Production <span class="text-gradient-cyan">Experience</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Hands-on commercial impact building high-availability mobile platforms for enterprise, commerce, and fintech.
          </p>
        </div>

        <!-- Futuristic Timeline Container -->
        <div class="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/20 ml-2 sm:ml-4 space-y-12">
          
          @for (exp of portfolio.experience(); track exp.company) {
            <div class="relative group">
              
              <!-- Glowing Timeline Node -->
              <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <div class="relative flex items-center justify-center w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.6)]">
                  <div class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                  <div class="w-2 h-2 rounded-full bg-cyan-400 absolute"></div>
                </div>
              </div>

              <!-- Main Experience Card -->
              <div class="glass-card p-6 sm:p-8 rounded-2xl relative">
                
                <!-- Card Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                  <div>
                    <div class="flex items-center gap-3 flex-wrap">
                      <h3 class="text-xl sm:text-2xl font-bold text-white">{{ exp.role }}</h3>
                      @if (exp.current) {
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                          CURRENT ROLE
                        </span>
                      }
                    </div>
                    
                    <div class="flex items-center gap-2 mt-1.5 text-cyan-400 font-medium text-sm sm:text-base">
                      <span>{{ exp.company }}</span>
                      <span class="text-slate-600">•</span>
                      <span class="text-slate-400 text-xs sm:text-sm font-normal">{{ exp.location }}</span>
                    </div>
                  </div>

                  <div class="flex sm:flex-col items-start sm:items-end justify-between gap-1">
                    <span class="text-xs sm:text-sm font-mono text-slate-300 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                      {{ exp.period }}
                    </span>
                    <span class="text-[11px] font-mono text-cyan-400/80">
                      {{ exp.duration }}
                    </span>
                  </div>
                </div>

                <!-- Summary -->
                <p class="text-slate-300 text-sm sm:text-base leading-relaxed my-6">
                  {{ exp.summary }}
                </p>

                <!-- Responsibilities Bullet Points -->
                <div class="space-y-3 mb-8">
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400">Key Responsibilities & Deliverables:</div>
                  <ul class="space-y-2.5">
                    @for (item of exp.responsibilities; track item) {
                      <li class="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <span class="text-cyan-400 mt-1 font-bold">›</span>
                        <span class="leading-relaxed">{{ item }}</span>
                      </li>
                    }
                  </ul>
                </div>

                <!-- Key Outcomes Highlights -->
                <div class="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 mb-8">
                  <div class="text-xs font-mono uppercase text-cyan-400 mb-2 font-semibold flex items-center gap-2">
                    <span>⚡ Quantifiable Impact:</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    @for (outcome of exp.keyOutcomes; track outcome) {
                      <div class="text-xs text-slate-300 flex items-start gap-2">
                        <span class="text-emerald-400 font-bold">✓</span>
                        <span>{{ outcome }}</span>
                      </div>
                    }
                  </div>
                </div>

                <!-- Technologies Used in Production -->
                <div>
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Technologies Leveraged:</div>
                  <div class="flex flex-wrap gap-2">
                    @for (tech of exp.techStack; track tech) {
                      <span class="text-xs px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 font-mono hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">
                        {{ tech }}
                      </span>
                    }
                  </div>
                </div>

              </div>

            </div>
          }

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
export class ExperienceComponent {
  protected readonly portfolio = inject(PortfolioService);
}
