import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Copy & Actions -->
          <div class="lg:col-span-7 flex flex-col items-start text-left">
            
            <!-- Futuristic Status Pill -->
            <div class="cyber-badge mb-6 flex items-center gap-2">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Mobile Engineering Roles 2026</span>
            </div>

            <!-- Developer Name -->
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
              Hello, I'm <br class="hidden sm:inline" />
              <span class="text-gradient-cyan">{{ portfolio.personalInfo().name }}</span>
            </h1>

            <!-- Professional Subtitle -->
            <div class="flex items-center gap-2 mb-6 text-xl sm:text-2xl font-medium text-slate-300">
              <span class="text-cyan-400 font-mono">&gt;</span>
              <span>{{ portfolio.personalInfo().role }}</span>
              <span class="hidden sm:inline text-slate-500">|</span>
              <span class="hidden sm:inline text-slate-400 text-lg">Flutter & Android Architect</span>
            </div>

            <!-- Professional Bio -->
            <p class="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {{ portfolio.personalInfo().bio }}
            </p>

            <!-- Quick Key Metrics Row -->
            <div class="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg mb-9 p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md">
              <div>
                <div class="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">2.5+</div>
                <div class="text-xs text-slate-400 mt-0.5">Years Experience</div>
              </div>
              <div class="border-l border-white/10 pl-3 sm:pl-6">
                <div class="text-2xl sm:text-3xl font-bold font-mono text-violet-400">6+</div>
                <div class="text-xs text-slate-400 mt-0.5">Shipped Apps</div>
              </div>
              <div class="border-l border-white/10 pl-3 sm:pl-6">
                <div class="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">99.8%</div>
                <div class="text-xs text-slate-400 mt-0.5">Crash-Free Rate</div>
              </div>
            </div>

            <!-- Action CTAs -->
            <div class="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a href="#projects" class="cyber-btn-primary flex-1 sm:flex-initial">
                <span>View My Work</span>
                <svg class="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>

              <a 
                [href]="portfolio.personalInfo().resumePdfUrl" 
                download="Deepak-Panchal-Resume.pdf"
                target="_blank"
                class="cyber-btn-secondary flex-1 sm:flex-initial">
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span>Download Resume</span>
              </a>

              <a href="#contact" class="px-5 py-3 rounded-xl text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors flex items-center gap-2">
                <span>Let's Talk</span>
                <span class="text-xs">&rarr;</span>
              </a>
            </div>

            <!-- Core Technologies Mini-Pill Bar -->
            <div class="mt-8 flex items-center gap-2 flex-wrap">
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 mr-2">Core Stack:</span>
              @for (tech of ['Flutter', 'Dart', 'Kotlin', 'BLoC / Cubit', 'Clean Architecture', 'Firebase', 'REST APIs']; track tech) {
                <span class="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300 font-mono">
                  {{ tech }}
                </span>
              }
            </div>

          </div>

          <!-- Right Column: Holographic Profile Showcase -->
          <div class="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div class="relative w-72 sm:w-84 md:w-96 aspect-square max-w-full">
              
              <!-- Ambient Halo Glow Behind Avatar -->
              <div class="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-violet-600/25 to-blue-600/25 blur-2xl opacity-70 animate-pulse-subtle"></div>
              
              <!-- Cyber Circular Rings / Orbits -->
              <div class="absolute -inset-6 rounded-full border border-dashed border-cyan-500/20 animate-spin-slow pointer-events-none"></div>
              <div class="absolute -inset-12 rounded-full border border-violet-500/15 pointer-events-none"></div>

              <!-- Hologram Frame -->
              <div class="relative w-full h-full rounded-3xl overflow-hidden p-1.5 bg-gradient-to-br from-cyan-500/40 via-white/10 to-violet-500/30 backdrop-blur-xl shadow-2xl">
                <div class="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950/80">
                  
                  <img 
                    [src]="portfolio.personalInfo().avatarUrl" 
                    alt="Deepak Panchal - Senior Mobile Developer"
                    class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 select-none"
                    loading="eager" />

                  <!-- Cyber Gradient Overlay at the base -->
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  <!-- Name Plate in Frame -->
                  <div class="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div class="font-bold text-sm text-white">Deepak Panchal</div>
                      <div class="text-[11px] font-mono text-cyan-400">MCA • GTU | Mobile Eng</div>
                    </div>
                    <div class="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                      <span>VERIFIED</span>
                    </div>
                  </div>

                </div>
              </div>

              <!-- Floating Interactive Cyber Badges -->
              <!-- Badge 1: Experience -->
              <div class="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md shadow-lg shadow-cyan-500/10 flex items-center gap-2.5 animate-float-slow">
                <div class="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold">
                  ⚡
                </div>
                <div>
                  <div class="text-[10px] font-mono uppercase text-slate-400">Experience</div>
                  <div class="text-xs font-bold text-white font-mono">2.5+ Years</div>
                </div>
              </div>

              <!-- Badge 2: TechAbbot Production -->
              <div class="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-violet-500/40 backdrop-blur-md shadow-lg shadow-violet-500/10 flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-sm">
                  🏢
                </div>
                <div>
                  <div class="text-[10px] font-mono uppercase text-slate-400">Current Role</div>
                  <div class="text-xs font-bold text-white">TechAbbot</div>
                </div>
              </div>

              <!-- Badge 3: Cross Platform -->
              <div class="absolute -bottom-2 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/40 backdrop-blur-md shadow-lg shadow-emerald-500/10 flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">
                  📱
                </div>
                <div>
                  <div class="text-[10px] font-mono uppercase text-slate-400">Platform</div>
                  <div class="text-xs font-bold text-white">iOS & Android</div>
                </div>
              </div>

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
export class HeroComponent {
  protected readonly portfolio = inject(PortfolioService);
}
