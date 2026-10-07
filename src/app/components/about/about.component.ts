import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-24 relative z-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <!-- Section Header (dotr.in style) -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex mb-4">
            <div class="dotr-pill-badge">
              <span>About Deepak</span>
            </div>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Behind the Architecture
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Mathematical analytical grounding meets 2.5+ years of commercial mobile production experience.
          </p>
        </div>

        <!-- Big Highlight Statement (dotr.in About statement style) -->
        <div class="dotr-card p-8 sm:p-12 mb-12 text-center max-w-4xl mx-auto">
          <div class="text-3xl text-blue-400 font-serif mb-4">“</div>
          <p class="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed max-w-3xl mx-auto">
            Great mobile development isn't just about rendering UI—it's about deterministic state, sub-second latency, offline resiliency, and code that scales reliably in production.
          </p>
          <div class="mt-6 text-xs font-mono text-slate-400 uppercase tracking-widest">
            — Deepak Panchal • Mobile App Developer
          </div>
        </div>

        <!-- Grid: Background Narrative & Academic Foundation -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Column 1: Background Narrative -->
          <div class="dotr-card p-8 space-y-4">
            <h3 class="text-xl font-bold text-white mb-2">The Engineering Journey</h3>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              I specialize in cross-platform mobile architecture with <strong class="text-white">Flutter, Dart, and Kotlin</strong>. Currently contributing at <strong class="text-blue-400">TechAbbot</strong> (Ahmedabad), I build and optimize business-critical systems ranging from warehouse picking applications to billing engines and fintech platforms.
            </p>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              My mathematical background (B.Sc in Mathematics) gives me an analytical edge when designing financial transaction models, deterministic state machines with BLoC, and multi-tenant warehouse workflows where precision is paramount.
            </p>
            <div class="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Current Town: Ahmedabad, Gujarat</span>
              <span>Home: Revdar, Rajasthan</span>
            </div>
          </div>

          <!-- Column 2: Academic Degrees -->
          <div class="dotr-card p-8 space-y-6">
            <h3 class="text-xl font-bold text-white mb-2">Academic Foundation</h3>
            <div class="space-y-4">
              @for (edu of portfolio.education(); track edu.degree) {
                <div class="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div class="flex items-center justify-between">
                    <h4 class="text-sm font-bold text-white">{{ edu.degree }}</h4>
                    <span class="text-xs font-mono text-blue-400">{{ edu.period }}</span>
                  </div>
                  <div class="text-xs text-slate-400 mt-1">{{ edu.institution }}</div>
                  <div class="text-[11px] font-mono text-slate-500 mt-0.5">{{ edu.location }}</div>
                </div>
              }
            </div>
            <div class="p-4 rounded-2xl bg-[#040822] border border-blue-500/20 text-xs text-slate-300 leading-relaxed font-mono">
              <span class="text-blue-400 font-bold">FOCUS:</span> Applied Mathematics &bull; Computer Applications &bull; Mobile Systems Design
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class AboutComponent {
  protected readonly portfolio = inject(PortfolioService);
}
