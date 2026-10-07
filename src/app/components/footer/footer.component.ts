import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          
          <!-- Brand Column -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <div class="flex items-center gap-3">
              <div class="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 font-mono font-bold text-xs">
                &lt;DP/&gt;
              </div>
              <span class="text-lg font-bold text-white">{{ portfolio.personalInfo().name }}</span>
            </div>
            <p class="text-xs text-slate-400 font-mono mt-2 max-w-sm">
              Mobile App Developer specializing in Flutter, Dart, Kotlin, and Clean Architecture systems.
            </p>
          </div>

          <!-- Navigation Links -->
          <div class="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#hero" class="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" class="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" class="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" class="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" class="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#resume" class="hover:text-cyan-400 transition-colors">Resume</a>
            <a href="#contact" class="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <!-- Back to Top Button -->
          <button 
            type="button" 
            (click)="scrollToTop()"
            class="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center transition-all group"
            aria-label="Scroll to Top">
            <svg class="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </button>

        </div>

        <!-- Bottom Copyright Row -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {{ currentYear }} {{ portfolio.personalInfo().name }}. All rights reserved.
          </div>

          <div class="flex items-center gap-2">
            <span>Built with</span>
            <span class="text-rose-500">❤</span>
            <span>in Angular &amp; TypeScript</span>
          </div>

          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All systems nominal</span>
          </div>
        </div>

      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class FooterComponent {
  protected readonly portfolio = inject(PortfolioService);
  readonly currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
