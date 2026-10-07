import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  template: `
    <section id="resume" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-start mb-14">
          <div class="cyber-badge mb-3">
            <span class="text-cyan-400 font-mono">// 05. OFFICIAL CREDENTIALS</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Curriculum <span class="text-gradient-cyan">Vitae</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Direct access to official resume documentation, employment history, academic verification, and technical achievements.
          </p>

          <!-- Download Action Bar -->
          <div class="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto">
            <a 
              [href]="portfolio.personalInfo().resumePdfUrl" 
              download="Deepak-Panchal-Resume.pdf"
              target="_blank"
              class="cyber-btn-primary flex items-center gap-2.5">
              <svg class="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              <span>Download Official Resume (PDF)</span>
            </a>

            <a 
              [href]="portfolio.personalInfo().resumePdfUrl" 
              target="_blank"
              class="cyber-btn-secondary flex items-center gap-2">
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              <span>View PDF in Fullscreen</span>
            </a>
          </div>
        </div>

        <!-- Glass Interactive Resume Overview Sheet -->
        <div class="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 relative overflow-hidden">
          
          <div class="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <!-- Top Sheet Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-2xl sm:text-3xl font-bold text-white">{{ portfolio.personalInfo().name }}</h3>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 font-mono border border-cyan-500/30">
                  MCA • 2.5+ Yrs Exp
                </span>
              </div>
              <p class="text-sm sm:text-base text-cyan-400 font-mono mt-1">
                {{ portfolio.personalInfo().role }} • Flutter & Android Specialist
              </p>
              <div class="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3">
                <span class="flex items-center gap-1.5">
                  <span>📍</span> {{ portfolio.personalInfo().location }}
                </span>
                <span class="flex items-center gap-1.5">
                  <span>✉️</span> {{ portfolio.personalInfo().email }}
                </span>
                <span class="flex items-center gap-1.5">
                  <span>📞</span> {{ portfolio.personalInfo().phone }}
                </span>
              </div>
            </div>

            <!-- PDF File Badge -->
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center gap-3 self-start sm:self-auto">
              <div class="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">
                PDF
              </div>
              <div>
                <div class="text-xs font-bold text-white">Deepak Panchal - Resume.pdf</div>
                <div class="text-[11px] font-mono text-slate-400">Verified Document • 91.2 KB</div>
              </div>
            </div>
          </div>

          <!-- Multi-Section Layout matching Resume content -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            <!-- Left Column: Summary & Experience -->
            <div class="lg:col-span-8 space-y-8">
              
              <!-- Professional Summary -->
              <div>
                <h4 class="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <span>📄 Professional Summary</span>
                </h4>
                <p class="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-white/5">
                  Mobile App Developer with 2.5+ years of hands-on experience building scalable, performance-focused mobile applications using Flutter, Dart, and Kotlin. Skilled in BLoC/Cubit, GetX, Riverpod, REST APIs, Firebase, responsive UI, and third-party integrations. Experienced in business, inventory, e-commerce, and real-time applications, including payments, barcode scanning, and mobile deployments. Focused on clean architecture, reusable components, debugging, performance optimization, and delivering reliable user experiences.
                </p>
              </div>

              <!-- Work Experience Summary -->
              <div>
                <h4 class="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <span>💼 Commercial Experience</span>
                </h4>
                
                <div class="bg-slate-950/40 p-5 rounded-xl border border-white/5 space-y-4">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <div class="text-base font-bold text-white">Flutter / Android Developer</div>
                      <div class="text-xs text-cyan-400 font-mono">TechAbbot • Ahmedabad, Gujarat</div>
                    </div>
                    <span class="text-xs font-mono text-slate-400 px-2.5 py-1 rounded bg-slate-800">
                      Jan 2024 - Present (2 Yrs 9 Mos)
                    </span>
                  </div>

                  <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li class="flex items-start gap-2">
                      <span class="text-cyan-400 mt-1">›</span>
                      <span>Developed cross-platform mobile apps using Flutter, Dart, and Kotlin for business, inventory, e-commerce, and real-time use cases.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-cyan-400 mt-1">›</span>
                      <span>Implemented application architecture and state management using BLoC/Cubit, GetX, and Riverpod.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-cyan-400 mt-1">›</span>
                      <span>Integrated RESTful APIs, Firebase (Auth, Firestore, Push Notifications, Crashlytics), Supabase, and payment gateways (Stripe & Razorpay).</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-cyan-400 mt-1">›</span>
                      <span>Engineered laser barcode scanning, thermal printing, and offline/local data caching for warehouse management systems.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-cyan-400 mt-1">›</span>
                      <span>Deployed and maintained releases on Google Play Store and Apple App Store.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <!-- Right Column: Education & Core Competencies -->
            <div class="lg:col-span-4 space-y-8">
              
              <!-- Education Section -->
              <div>
                <h4 class="text-sm font-mono uppercase tracking-wider text-violet-400 font-semibold mb-3 flex items-center gap-2">
                  <span>🎓 Education</span>
                </h4>
                
                <div class="space-y-3">
                  @for (edu of portfolio.education(); track edu.degree) {
                    <div class="p-4 rounded-xl bg-slate-950/40 border border-white/5">
                      <div class="text-xs font-bold text-white">{{ edu.degree }}</div>
                      <div class="text-xs text-slate-400 mt-0.5">{{ edu.institution }}</div>
                      <div class="flex items-center justify-between text-[11px] font-mono text-cyan-400 mt-2">
                        <span>{{ edu.period }}</span>
                        <span>{{ edu.location }}</span>
                      </div>
                    </div>
                  }
                </div>
              </div>

              <!-- Key Competencies Pills -->
              <div>
                <h4 class="text-sm font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <span>🛠️ Core Tech Matrix</span>
                </h4>
                
                <div class="flex flex-wrap gap-2">
                  @for (tech of [
                    'Flutter & Dart', 'Kotlin Native', 'BLoC / Cubit', 'Riverpod',
                    'GetX', 'Clean Architecture', 'MVVM', 'Firebase Auth',
                    'FCM Push', 'Firestore', 'Supabase', 'RESTful APIs',
                    'Stripe & Razorpay', 'Barcode SDKs', 'Play Console',
                    'App Store Connect', 'Git & CI/CD', 'Prompt Engineering'
                  ]; track tech) {
                    <span class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>

              <!-- Direct PDF Access Widget -->
              <div class="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-center">
                <p class="text-xs text-slate-300 mb-3">
                  Need a print-ready copy for your hiring pipeline?
                </p>
                <a 
                  [href]="portfolio.personalInfo().resumePdfUrl" 
                  download="Deepak-Panchal-Resume.pdf"
                  class="cyber-btn-primary !w-full !py-2.5 !text-xs justify-center">
                  Download PDF
                </a>
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
export class ResumeComponent {
  protected readonly portfolio = inject(PortfolioService);
}
