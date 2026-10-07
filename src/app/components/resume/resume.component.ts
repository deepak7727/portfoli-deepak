import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  template: `
    <section id="resume" class="py-24 relative z-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <!-- Section Header (dotr.in style) -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex mb-4">
            <div class="dotr-pill-badge">
              <span>Official Documentation</span>
            </div>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Curriculum Vitae
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Direct access to official employment credentials, education, and technical certifications.
          </p>

          <!-- Download Action Pills -->
          <div class="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a 
              [href]="portfolio.personalInfo().resumePdfUrl" 
              download="Deepak-Panchal-Resume.pdf"
              target="_blank"
              class="dotr-btn-primary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              <span>Download Official Resume (PDF)</span>
            </a>

            <a 
              [href]="portfolio.personalInfo().resumePdfUrl" 
              target="_blank"
              class="dotr-btn-secondary">
              <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              <span>View in Fullscreen</span>
            </a>
          </div>
        </div>

        <!-- Clean Resume Sheet Card -->
        <div class="dotr-card p-8 sm:p-12 relative overflow-hidden">
          
          <!-- Top Sheet Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-2xl sm:text-3xl font-bold text-white">{{ portfolio.personalInfo().name }}</h3>
                <span class="text-xs px-3 py-1 rounded-full bg-blue-600/15 text-blue-300 font-mono border border-blue-500/20 font-semibold">
                  MCA • 2.5+ Yrs Exp
                </span>
              </div>
              <p class="text-sm sm:text-base text-blue-400 font-medium mt-1">
                {{ portfolio.personalInfo().role }} • Flutter &amp; Android Specialist
              </p>
              <div class="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3">
                <span>📍 {{ portfolio.personalInfo().location }}</span>
                <span>✉️ {{ portfolio.personalInfo().email }}</span>
                <span>📞 {{ portfolio.personalInfo().phone }}</span>
              </div>
            </div>

            <!-- PDF File Badge -->
            <div class="p-4 rounded-2xl bg-slate-900 border border-white/10 flex items-center gap-3 self-start sm:self-auto">
              <div class="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">
                PDF
              </div>
              <div>
                <div class="text-xs font-bold text-white">Deepak Panchal - Resume.pdf</div>
                <div class="text-[11px] font-mono text-slate-400">Verified Document &bull; 91.2 KB</div>
              </div>
            </div>
          </div>

          <!-- Multi-Section Layout -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            <!-- Left: Summary & Experience -->
            <div class="lg:col-span-8 space-y-8">
              
              <!-- Summary -->
              <div>
                <h4 class="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-3">
                  Professional Summary
                </h4>
                <p class="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-5 rounded-2xl border border-white/5">
                  Mobile App Developer with 2.5+ years of hands-on experience building scalable, performance-focused mobile applications using Flutter, Dart, and Kotlin. Skilled in BLoC/Cubit, GetX, Riverpod, REST APIs, Firebase, responsive UI, and third-party integrations. Experienced in business, inventory, e-commerce, and real-time applications, including payments, barcode scanning, and mobile deployments.
                </p>
              </div>

              <!-- Experience -->
              <div>
                <h4 class="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-3">
                  Commercial Experience
                </h4>
                
                <div class="bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-4">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <div class="text-base font-bold text-white">Flutter / Android Developer</div>
                      <div class="text-xs text-blue-400 font-mono">TechAbbot &bull; Ahmedabad, Gujarat</div>
                    </div>
                    <span class="text-xs font-mono text-slate-300 px-3 py-1 rounded-full bg-slate-800">
                      Jan 2024 - Present (2 Yrs 9 Mos)
                    </span>
                  </div>

                  <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li class="flex items-start gap-2">
                      <span class="text-blue-400 mt-1 font-bold">›</span>
                      <span>Developed cross-platform mobile apps in Flutter, Dart, and Kotlin for logistics, inventory, e-commerce, and real-time use cases.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-blue-400 mt-1 font-bold">›</span>
                      <span>Implemented application architecture and state management using BLoC/Cubit, GetX, and Riverpod.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-blue-400 mt-1 font-bold">›</span>
                      <span>Integrated RESTful APIs, Firebase (Auth, Firestore, FCM, Crashlytics), Supabase, and payment gateways (Stripe &amp; Razorpay).</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-blue-400 mt-1 font-bold">›</span>
                      <span>Engineered laser barcode scanning, thermal printing, and offline SQLite synchronization for warehouse management systems.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <!-- Right: Education & Core Skills -->
            <div class="lg:col-span-4 space-y-8">
              
              <!-- Education -->
              <div>
                <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Academic Education
                </h4>
                
                <div class="space-y-3">
                  @for (edu of portfolio.education(); track edu.degree) {
                    <div class="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                      <div class="text-xs font-bold text-white">{{ edu.degree }}</div>
                      <div class="text-xs text-slate-400 mt-0.5">{{ edu.institution }}</div>
                      <div class="flex items-center justify-between text-[11px] font-mono text-blue-400 mt-2">
                        <span>{{ edu.period }}</span>
                        <span>{{ edu.location }}</span>
                      </div>
                    </div>
                  }
                </div>
              </div>

              <!-- Tech Matrix -->
              <div>
                <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Key Technical Competencies
                </h4>
                
                <div class="flex flex-wrap gap-2">
                  @for (tech of [
                    'Flutter & Dart', 'Kotlin Native', 'BLoC / Cubit', 'Riverpod',
                    'GetX', 'Clean Architecture', 'MVVM', 'Firebase Auth',
                    'FCM Push', 'Firestore', 'Supabase', 'RESTful APIs',
                    'Stripe & Razorpay', 'Barcode SDKs', 'Play Console',
                    'App Store Connect', 'Git & CI/CD', 'Prompt Engineering'
                  ]; track tech) {
                    <span class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-slate-300">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ResumeComponent {
  protected readonly portfolio = inject(PortfolioService);
}
