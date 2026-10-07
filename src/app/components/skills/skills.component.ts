import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

interface DepartmentPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="capabilities" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Centered Section Header (dotr.in style) -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex mb-4">
            <div class="dotr-pill-badge">
              <span>Engineering Capabilities</span>
            </div>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Production Capabilities
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            6 Specialized Mobile Pillars, One Proven Cross-Platform Engineer
          </p>
        </div>

        <!-- 6 Pillars Grid (dotr.in departments card layout) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          @for (pillar of pillars; track pillar.id) {
            <div class="dotr-card p-7 sm:p-8 flex flex-col justify-between group">
              <div>
                <!-- Squircle Icon Box (dotr.in style) -->
                <div class="dotr-icon-box mb-6 group-hover:border-blue-500/50 group-hover:scale-105 transition-all duration-300">
                  @switch (pillar.id) {
                    @case ('mobile') {
                      <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                    }
                    @case ('architecture') {
                      <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                      </svg>
                    }
                    @case ('native') {
                      <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                    }
                    @case ('hardware') {
                      <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                      </svg>
                    }
                    @case ('cloud') {
                      <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                      </svg>
                    }
                    @case ('devops') {
                      <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    }
                  }
                </div>

                <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {{ pillar.title }}
                </h3>

                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                  {{ pillar.description }}
                </p>
              </div>

              <!-- Pill tags at card bottom -->
              <div class="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                @for (tag of pillar.tags; track tag) {
                  <span class="text-xs px-2.5 py-1 rounded-md bg-slate-900/90 border border-white/10 text-slate-300 font-mono">
                    {{ tag }}
                  </span>
                }
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class SkillsComponent {
  protected readonly portfolio = inject(PortfolioService);

  readonly pillars: DepartmentPillar[] = [
    {
      id: 'mobile',
      title: 'Cross-Platform Mobile',
      subtitle: 'Flutter & Dart Engine',
      description: 'Building multi-platform iOS and Android applications from single, deterministic codebases with 60fps rendering, responsive layouts, and native fidelity.',
      tags: ['Flutter', 'Dart', 'ScreenUtil', 'Material & Cupertino', 'Responsive UI']
    },
    {
      id: 'architecture',
      title: 'Architecture & State',
      subtitle: 'Predictable & Tested Systems',
      description: 'Enforcing Clean Architecture (Presentation, Domain, Data) and robust state machines using BLoC/Cubit, Riverpod, and MVVM to eliminate memory leaks and race conditions.',
      tags: ['BLoC / Cubit', 'Clean Architecture', 'Riverpod', 'GetX', 'Dependency Injection']
    },
    {
      id: 'native',
      title: 'Native Android & SDKs',
      subtitle: 'Platform-Level Hardware Access',
      description: 'Bridging Kotlin and Android SDK capabilities for platform-specific hardware operations, foreground services, and battery-optimized background execution.',
      tags: ['Kotlin', 'Android SDK', 'Jetpack', 'Platform Channels', 'Java']
    },
    {
      id: 'hardware',
      title: 'Hardware & Barcode APIs',
      subtitle: 'Industrial & Billing Integrations',
      description: 'Direct integration with Zebra/Honeywell rugged laser barcode scanners, thermal receipt printers, and vector PDF compilation engines with sub-50ms latency.',
      tags: ['Laser Barcode SDK', 'Thermal POS', 'Vector PDF Engine', 'Offline SQLite']
    },
    {
      id: 'cloud',
      title: 'Cloud, APIs & Payments',
      subtitle: 'Fintech & Realtime Sync',
      description: 'End-to-end integration with RESTful APIs, Firebase services (Auth, Firestore, FCM, Crashlytics), Supabase, WebSockets, and secure payment processing with Stripe and Razorpay.',
      tags: ['Stripe', 'Razorpay', 'Firebase FCM', 'Supabase', 'RESTful APIs']
    },
    {
      id: 'devops',
      title: 'Store Deployments & CI/CD',
      subtitle: 'Production Delivery Pipelines',
      description: 'Managing store release tracks, signing certificates, Play Console & App Store Connect submissions, crash monitoring, and AI-accelerated development workflows.',
      tags: ['Google Play Console', 'App Store Connect', 'Git & GitHub', 'CI/CD Pipelines']
    }
  ];
}
