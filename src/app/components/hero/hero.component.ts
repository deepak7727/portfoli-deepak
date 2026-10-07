import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="relative pt-36 sm:pt-44 pb-20 overflow-hidden text-center z-10">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        
        <!-- Top Pill Badge (dotr.in style) -->
        <div class="inline-flex mb-8">
          <div class="dotr-pill-badge">
            <span class="text-blue-400">✨</span>
            <span>Mobile Engineering &amp; Cross-Platform Architecture</span>
          </div>
        </div>

        <!-- Main Display Headline (dotr.in style) -->
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
          Production Mobile Apps <br class="hidden sm:inline" />
          That <span class="text-blue-500">Scale</span>
        </h1>

        <!-- Subtitle Paragraph -->
        <p class="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          I'm <strong class="text-white font-semibold">Deepak Panchal</strong>, a Mobile App Developer with 2.5+ years of production experience building scalable, high-performance mobile applications using <strong class="text-white font-medium">Flutter, Dart, and Kotlin</strong>. Delivering reliable user experiences with Clean Architecture, BLoC, and hardware-accelerated systems.
        </p>

        <!-- Call to Action Buttons (dotr.in style) -->
        <div class="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a href="#contact" class="dotr-btn-primary">
            <span>Discuss Opportunities</span>
            <span class="text-sm font-mono">&rarr;</span>
          </a>

          <a href="#projects" class="dotr-btn-secondary">
            <span class="text-blue-400">▷</span>
            <span>View Production Work</span>
          </a>

          <a 
            [href]="portfolio.personalInfo().resumePdfUrl" 
            download="Deepak-Panchal-Resume.pdf"
            target="_blank"
            class="dotr-btn-secondary">
            <span>📄</span>
            <span>Download Resume PDF</span>
          </a>
        </div>

        <!-- Developer Profile Card (Clean & Sophisticated, Zero Neon) -->
        <div class="inline-flex items-center gap-4 p-2.5 sm:p-3 pr-6 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-2xl">
          <div class="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
            <img 
              [src]="portfolio.personalInfo().avatarUrl" 
              alt="Deepak Panchal"
              class="w-full h-full object-cover object-top" />
          </div>
          <div class="text-left">
            <div class="flex items-center gap-2">
              <span class="text-sm font-bold text-white">Deepak Panchal</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
                ACTIVE AT TECHABBOT
              </span>
            </div>
            <div class="text-xs text-slate-400 font-mono mt-0.5">
              Ahmedabad, Gujarat • MCA (GTU) &amp; B.Sc Maths
            </div>
          </div>
        </div>

      </div>

      <!-- Infinite Marquee / Ticker Bar (Exact dotr.in style) -->
      <div class="mt-20 w-full bg-[#050b2c] border-y border-white/10 py-3.5 overflow-hidden">
        <div class="animate-marquee items-center gap-8 text-xs sm:text-sm font-medium text-slate-300 whitespace-nowrap">
          @for (repeat of [1, 2]; track repeat) {
            <span class="inline-flex items-center gap-2">
              <span class="text-blue-400">⚡</span> 2.5+ Years Production Experience
            </span>
            <span class="text-slate-600">•</span>
            <span class="inline-flex items-center gap-2">
              <span class="text-blue-400">🛡️</span> 99.8% Crash-Free Session Stability
            </span>
            <span class="text-slate-600">•</span>
            <span class="inline-flex items-center gap-2">
              <span class="text-blue-400">🥞</span> Clean Architecture &amp; BLoC State Management
            </span>
            <span class="text-slate-600">•</span>
            <span class="inline-flex items-center gap-2">
              <span class="text-blue-400">📦</span> Sub-50ms Barcode &amp; Industrial Scanner APIs
            </span>
            <span class="text-slate-600">•</span>
            <span class="inline-flex items-center gap-2">
              <span class="text-blue-400">💳</span> Stripe &amp; Razorpay Payment Integrations
            </span>
            <span class="text-slate-600">•</span>
            <span class="inline-flex items-center gap-2">
              <span class="text-blue-400">🚀</span> Shipped to Google Play Store &amp; Apple App Store
            </span>
            <span class="text-slate-600">•</span>
            <span class="inline-flex items-center gap-2">
              <span class="text-blue-400">🤖</span> AI-Accelerated Engineering &amp; Prompt Workflows
            </span>
            <span class="text-slate-600">•</span>
          }
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  protected readonly portfolio = inject(PortfolioService);
}
