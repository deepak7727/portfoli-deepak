import { Component, HostListener, signal, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <!-- Floating Pill Nav Island (dotr.in style) -->
        <div class="flex items-center justify-between px-5 sm:px-7 py-3 rounded-full bg-slate-900/85 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30">
          
          <!-- Brand Logo / Monogram -->
          <a href="#hero" (click)="scrollToSection($event, 'hero')" class="flex items-center gap-3 group focus:outline-none">
            <div class="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-mono font-bold text-xs shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
              DP
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-sm text-white group-hover:text-blue-400 transition-colors">
                {{ portfolio.personalInfo().name }}
              </span>
              <span class="text-[10px] text-slate-400 font-mono hidden sm:inline">
                Mobile App Developer
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Menu -->
          <nav class="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            @for (item of navItems; track item.id) {
              <a 
                [href]="'#' + item.id" 
                (click)="scrollToSection($event, item.id)"
                class="text-xs lg:text-sm font-medium transition-colors relative py-1"
                [class.text-blue-400]="activeSection() === item.id"
                [class.text-slate-300]="activeSection() !== item.id"
                [class.hover:text-white]="activeSection() !== item.id">
                {{ item.label }}
                @if (activeSection() === item.id) {
                  <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                }
              </a>
            }
          </nav>

          <!-- Right Action: Resume & Contact -->
          <div class="hidden md:flex items-center gap-3">
            <a 
              [href]="portfolio.personalInfo().resumePdfUrl" 
              download="Deepak-Panchal-Resume.pdf"
              target="_blank"
              class="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/25 transition-all">
              Resume PDF
            </a>

            <a 
              href="#contact" 
              (click)="scrollToSection($event, 'contact')"
              class="dotr-btn-primary !py-2 !px-4 !text-xs">
              <span>Contact Me</span>
              <span class="text-xs">&rarr;</span>
            </a>
          </div>

          <!-- Mobile Hamburger Button -->
          <button 
            type="button" 
            (click)="toggleMobileMenu()" 
            class="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu">
            @if (!mobileMenuOpen()) {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            } @else {
              <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            }
          </button>

        </div>

      </div>

      <!-- Mobile Full-Screen Dropdown -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden fixed inset-x-4 top-20 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl">
          <div class="flex flex-col gap-3">
            @for (item of navItems; track item.id) {
              <a 
                [href]="'#' + item.id" 
                (click)="scrollToSection($event, item.id)"
                class="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                [class.bg-blue-600/15]="activeSection() === item.id"
                [class.text-blue-400]="activeSection() === item.id"
                [class.text-slate-300]="activeSection() !== item.id">
                <span>{{ item.label }}</span>
                <span class="text-xs text-slate-500">&rarr;</span>
              </a>
            }
            <div class="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <a 
                [href]="portfolio.personalInfo().resumePdfUrl" 
                download="Deepak-Panchal-Resume.pdf"
                class="dotr-btn-secondary !w-full !py-2.5 text-center justify-center !text-xs">
                Download Resume PDF
              </a>
              <a 
                href="#contact" 
                (click)="scrollToSection($event, 'contact')"
                class="dotr-btn-primary !w-full !py-2.5 text-center justify-center !text-xs">
                Get in Touch &rarr;
              </a>
            </div>
          </div>
        </div>
      }
    </header>
  `
})
export class NavbarComponent implements OnInit {
  protected readonly portfolio = inject(PortfolioService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly activeSection = signal<string>('hero');
  readonly mobileMenuOpen = signal<boolean>(false);

  readonly navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'solutions', label: 'Framework' },
    { id: 'projects', label: 'Work' },
    { id: 'numbers', label: 'Impact' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
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
    const scrollY = window.scrollY + 180;
    const sections = this.navItems.map(item => document.getElementById(item.id));

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollY) {
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

    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 85;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      this.activeSection.set(sectionId);
    }
  }
}
