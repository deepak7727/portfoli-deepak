import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Project } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (project(); as p) {
      <main class="min-h-screen pt-28 pb-20 relative z-10">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          
          <!-- Back Navigation Bar -->
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <a 
              routerLink="/" 
              fragment="projects"
              class="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-white transition-colors">
              <span>&larr;</span>
              <span>Back to All Work</span>
            </a>

            <div class="flex items-center gap-2">
              <span class="dotr-pill-badge !text-xs !py-1 !px-3">{{ p.category }}</span>
              <span class="text-xs font-mono text-slate-400">{{ p.platform }}</span>
            </div>
          </div>

          <!-- Hero Details -->
          <div class="space-y-6 mb-12">
            <h1 class="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {{ p.title }}
            </h1>
            <p class="text-lg sm:text-2xl text-blue-400 font-medium">
              {{ p.subtitle }}
            </p>
            <p class="text-slate-300 text-base sm:text-lg max-w-4xl leading-relaxed">
              {{ p.description }}
            </p>

            <!-- Metrics / Stats Bar -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              @for (stat of p.stats; track stat.label) {
                <div class="dotr-card p-5">
                  <div class="text-xs font-mono text-slate-400 uppercase">{{ stat.label }}</div>
                  <div class="text-xl font-bold text-white font-mono mt-0.5">{{ stat.value }}</div>
                </div>
              }
            </div>
          </div>

          <!-- Production Screenshots Showcase -->
          @if (p.screenshots.length > 0) {
            <section class="mb-16">
              <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>📸</span> Production Interface Showcase
              </h2>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                @for (ss of p.screenshots; track ss.url) {
                  <div class="dotr-card p-5 flex flex-col group">
                    <div class="relative rounded-2xl overflow-hidden bg-black/60 p-3 flex items-center justify-center">
                      <img 
                        [src]="ss.url" 
                        [alt]="ss.caption" 
                        class="w-full h-auto max-h-[440px] object-contain rounded-xl group-hover:scale-105 transition-transform duration-500" 
                        loading="lazy" />
                    </div>
                    <p class="text-xs font-mono text-slate-300 text-center mt-3">
                      {{ ss.caption }}
                    </p>
                  </div>
                }
              </div>
            </section>
          }

          <!-- Architectural Breakdown -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            <!-- Features -->
            <div class="dotr-card p-7 sm:p-8 space-y-4">
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span class="text-blue-400">⚡</span> Key Features
              </h3>
              <ul class="space-y-3">
                @for (feat of p.keyFeatures; track feat) {
                  <li class="flex items-start gap-2.5 text-sm text-slate-300">
                    <span class="text-blue-400 mt-0.5 font-bold">›</span>
                    <span>{{ feat }}</span>
                  </li>
                }
              </ul>
            </div>

            <!-- Engineering Role & Stack -->
            <div class="dotr-card p-7 sm:p-8 space-y-5">
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span>🛠️</span> Architectural Contribution
              </h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                {{ p.myContribution }}
              </p>
              
              <div class="pt-2">
                <div class="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used:</div>
                <div class="flex flex-wrap gap-2">
                  @for (t of p.tags; track t) {
                    <span class="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300">
                      {{ t }}
                    </span>
                  }
                </div>
              </div>
            </div>

          </div>

          <!-- Problem & Solution -->
          <div class="dotr-card p-7 sm:p-8 space-y-6 mb-16">
            <h3 class="text-lg font-bold text-white flex items-center gap-2">
              <span class="text-blue-400">💡</span> Problem &amp; Engineering Solution
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-5 rounded-2xl bg-slate-950/80 border border-white/5">
                <div class="text-xs font-mono uppercase text-slate-400 mb-1 font-bold">The Challenge</div>
                <p class="text-sm text-slate-300 leading-relaxed">{{ p.challenges }}</p>
              </div>

              <div class="p-5 rounded-2xl bg-slate-950/80 border border-white/5">
                <div class="text-xs font-mono uppercase text-blue-400 mb-1 font-bold">The Solution</div>
                <p class="text-sm text-slate-300 leading-relaxed">{{ p.solution }}</p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA -->
          <div class="p-8 rounded-3xl bg-[#050920] border border-blue-500/20 text-center space-y-4">
            <h3 class="text-xl font-bold text-white">Interested in discussing this mobile architecture?</h3>
            <p class="text-sm text-slate-400 max-w-xl mx-auto">
              Get in touch with Deepak Panchal for mobile engineering opportunities or technical consultations.
            </p>
            <div class="pt-2">
              <a routerLink="/" fragment="contact" class="dotr-btn-primary">
                <span>Contact Deepak</span>
                <span class="text-sm">&rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </main>
    } @else {
      <div class="min-h-screen flex items-center justify-center p-6 text-center">
        <div class="dotr-card p-10 space-y-4 max-w-md">
          <h2 class="text-2xl font-bold text-white">Project Not Found</h2>
          <p class="text-sm text-slate-400">The requested project could not be located in the catalog.</p>
          <a routerLink="/" class="dotr-btn-primary inline-flex">Return to Home</a>
        </div>
      </div>
    }
  `
})
export class ProjectPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly portfolio = inject(PortfolioService);

  readonly project = signal<Project | null>(null);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const found = this.portfolio.getProjectById(id);
        if (found) {
          this.project.set(found);
          window.scrollTo(0, 0);
        } else {
          this.project.set(null);
        }
      }
    });
  }
}
