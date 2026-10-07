import { Component, HostListener, signal, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.scrolled-header]="isScrolled()"
      [class.py-5]="!isScrolled()"
      [class.py-3]="isScrolled()">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          
          <!-- Brand Logo / Monogram -->
          <a href="#hero" (click)="scrollToSection($event, 'hero')" class="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1">
            <div class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/90 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_18px_rgba(0,242,254,0.4)] transition-all duration-300">
              <span class="font-mono font-bold text-sm tracking-tighter text-cyan-400 group-hover:text-white transition-colors">&lt;DP/&gt;</span>
              <div class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75"></div>
              <div class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            </div>
            <div class="hidden sm:flex flex-col">
              <span class="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
                {{ portfolio.personalInfo().name }}
              </span>
              <span class="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Senior Mobile Engineer
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Menu -->
          <nav class="hidden md:flex items-center gap-1 bg-slate-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 shadow-inner" aria-label="Main Navigation">
            @for (item of navItems; track item.id) {
              <a 
                [href]="'#' + item.id" 
                (click)="scrollToSection($event, item.id)"
                class="relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200"
                [class.text-cyan-400]="activeSection() === item.id"
                [class.text-slate-300]="activeSection() !== item.id"
                [class.hover:text-white]="activeSection() !== item.id"
                [class.bg-cyan-500/10]="activeSection() === item.id"
                [class.border]="activeSection() === item.id"
                [class.border-cyan-500/30]="activeSection() === item.id">
                {{ item.label }}
              </a>
            }
          </nav>

          <!-- Right Action CTA -->
          <div class="hidden md:flex items-center gap-3">
            <a 
              [href]="portfolio.personalInfo().resumePdfUrl" 
              download="Deepak-Panchal-Resume.pdf"
              target="_blank"
              class="cyber-btn-secondary !py-2 !px-3.5 !text-xs !rounded-lg flex items-center gap-2 group">
              <svg class="w-3.5 h-3.5 text-cyan-400 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              <span>Resume PDF</span>
            </a>
            <a 
              href="#contact" 
              (click)="scrollToSection($event, 'contact')"
              class="cyber-btn-primary !py-2 !px-4 !text-xs !rounded-lg">
              <span>Let's Talk</span>
            </a>
          </div>

          <!-- Mobile Hamburger Button -->
          <button 
            type="button" 
            (click)="toggleMobileMenu()" 
            class="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
            [attr.aria-expanded]="mobileMenuOpen()">
            @if (!mobileMenuOpen()) {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            } @else {
              <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            }
          </button>

        </div>
      </div>

      <!-- Mobile Full-Screen Dropdown / Drawer -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 shadow-2xl transition-all duration-300">
          <div class="flex flex-col gap-2">
            @for (item of navItems; track item.id) {
              <a 
                [href]="'#' + item.id" 
                (click)="scrollToSection($event, item.id)"
                class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors"
                [class.bg-cyan-500/10]="activeSection() === item.id"
                [class.text-cyan-400]="activeSection() === item.id"
                [class.text-slate-300]="activeSection() !== item.id">
                <span>{{ item.label }}</span>
                <span class="text-xs font-mono text-cyan-400/60">&rarr;</span>
              </a>
            }
            <div class="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-3">
              <a 
                [href]="portfolio.personalInfo().resumePdfUrl" 
                download="Deepak-Panchal-Resume.pdf"
                class="cyber-btn-secondary !w-full !py-3 text-center justify-center">
                Download Resume PDF
              </a>
              <a 
                href="#contact" 
                (click)="scrollToSection($event, 'contact')"
                class="cyber-btn-primary !w-full !py-3 text-center justify-center">
                Contact Deepak
              </a>
            </div>
          </div>
        </div>
      }
    </header>
  `,
  styles: [`
    .scrolled-header {
      background: rgba(7, 9, 14, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);
    }
  `]
})
export class NavbarComponent implements OnInit {
  protected readonly portfolio = inject(PortfolioService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly isScrolled = signal<boolean>(false);
  readonly activeSection = signal<string>('hero');
  readonly mobileMenuOpen = signal<boolean>(false);

  readonly navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.handleScroll();
    }
  }

  @HostListener('window:scroll')
  handleScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const scrollY = window.scrollY;
    this.isScrolled.set(scrollY > 25);

    // Track active section
    const sections = this.navItems.map(item => document.getElementById(item.id));
    const scrollPosition = scrollY + 180;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        this.activeSection.set(this.navItems[i].id);
        break;
      }
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.mobileMenuOpen.set(false);
    if (!isPlatformBrowser(this.platformId)) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      this.activeSection.set(sectionId);
    }
  }
}
