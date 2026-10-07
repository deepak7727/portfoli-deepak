import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="relative z-10 border-t border-white/10 bg-[#030617] py-14">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          <!-- Brand -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <div class="flex items-center gap-3">
              <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-mono font-bold text-xs">
                DP
              </div>
              <span class="text-base font-bold text-white">{{ portfolio.personalInfo().name }}</span>
            </div>
            <p class="text-xs text-slate-400 font-mono mt-2 max-w-sm">
              Mobile App Developer specializing in Flutter, Dart, Kotlin, and Clean Architecture.
            </p>
          </div>

          <!-- Quick Navigation -->
          <div class="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#hero" class="hover:text-blue-400 transition-colors">Home</a>
            <a href="#capabilities" class="hover:text-blue-400 transition-colors">Capabilities</a>
            <a href="#solutions" class="hover:text-blue-400 transition-colors">Framework</a>
            <a href="#projects" class="hover:text-blue-400 transition-colors">Work</a>
            <a href="#numbers" class="hover:text-blue-400 transition-colors">Impact</a>
            <a href="#experience" class="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#about" class="hover:text-blue-400 transition-colors">About</a>
            <a href="#faq" class="hover:text-blue-400 transition-colors">FAQ</a>
            <a href="#contact" class="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <!-- Back to Top Button (dotr.in bottom-right floating or footer button) -->
          <button 
            type="button" 
            (click)="scrollToTop()"
            class="w-9 h-9 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-blue-600 flex items-center justify-center transition-all"
            aria-label="Scroll to Top">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </button>

        </div>

        <!-- Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {{ currentYear }} {{ portfolio.personalInfo().name }}. All rights reserved.
          </div>

          <div class="flex items-center gap-2">
            <span>Built in Angular 22 &amp; TypeScript</span>
          </div>

          <div class="flex items-center gap-1.5 text-blue-400">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>Production Ready</span>
          </div>
        </div>

      </div>
    </footer>
  `
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
