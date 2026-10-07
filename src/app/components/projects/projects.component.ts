import { Component, inject, signal, computed, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Project } from '../../core/models/portfolio.models';
import { ProjectDetailModalComponent } from '../project-detail-modal/project-detail-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, ProjectDetailModalComponent],
  template: `
    <section id="projects" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-start mb-14">
          <div class="cyber-badge mb-3">
            <span class="text-cyan-400 font-mono">// 04. PRODUCTION PORTFOLIO</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Architected <span class="text-gradient-cyan">Mobile Solutions</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Production apps engineered with Flutter, Dart, Kotlin, and Clean Architecture. Featuring live accounting ledgers, vector PDF billing, and warehouse supply chain systems.
          </p>

          <!-- Category Filter Bar -->
          <div class="flex flex-wrap items-center gap-2 mt-8">
            @for (cat of categories; track cat) {
              <button 
                type="button"
                (click)="selectedCategory.set(cat)"
                class="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200"
                [class.bg-cyan-500]="selectedCategory() === cat"
                [class.text-slate-950]="selectedCategory() === cat"
                [class.font-bold]="selectedCategory() === cat"
                [class.bg-slate-900/60]="selectedCategory() !== cat"
                [class.text-slate-300]="selectedCategory() !== cat"
                [class.border]="selectedCategory() !== cat"
                [class.border-white/10]="selectedCategory() !== cat">
                {{ cat }}
              </button>
            }
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (p of filteredProjects(); track p.id) {
            <article 
              class="project-card glass-card rounded-3xl overflow-hidden flex flex-col group cursor-pointer relative"
              data-cursor="project"
              (click)="openProject(p)">
              
              <!-- Device Preview Header / Mockup Frame -->
              <div class="relative bg-slate-950/80 p-5 overflow-hidden border-b border-white/5 flex items-center justify-center min-h-[260px] group-hover:bg-slate-900/50 transition-colors">
                
                <!-- Ambient Glow on Card Hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <!-- Floating Platform Chip -->
                <div class="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-slate-900/90 border border-white/10 text-[10px] font-mono text-cyan-400">
                  {{ p.platform }}
                </div>

                @if (p.featured) {
                  <div class="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 font-bold">
                    ★ FEATURED
                  </div>
                }

                <!-- Smartphone Bezel Mockup -->
                <div class="relative w-44 rounded-[24px] overflow-hidden border-[4px] border-slate-800 shadow-xl group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 bg-black">
                  <div class="w-12 h-2.5 bg-slate-900 rounded-b-md mx-auto mb-0.5"></div>
                  <img 
                    [src]="p.thumbnail" 
                    [alt]="p.title + ' mobile screen'"
                    class="w-full h-auto object-cover max-h-[220px] rounded-[18px]"
                    loading="lazy" />
                </div>

              </div>

              <!-- Content Body -->
              <div class="p-6 flex flex-col flex-1 justify-between gap-6">
                
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono text-cyan-400 uppercase tracking-wider">{{ p.category }}</span>
                    <span class="text-[11px] font-mono text-slate-500">{{ p.screenshots.length }} Screens</span>
                  </div>

                  <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {{ p.title }}
                  </h3>

                  <p class="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {{ p.description }}
                  </p>

                  <!-- Architecture Pill -->
                  <div class="pt-1">
                    <span class="inline-block text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300">
                      {{ p.architecture }}
                    </span>
                  </div>
                </div>

                <!-- Footer: Tech Tags + CTA Trigger -->
                <div class="space-y-4 pt-4 border-t border-white/5">
                  <div class="flex flex-wrap gap-1.5">
                    @for (tag of p.tags.slice(0, 4); track tag) {
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                        {{ tag }}
                      </span>
                    }
                    @if (p.tags.length > 4) {
                      <span class="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                        +{{ p.tags.length - 4 }}
                      </span>
                    }
                  </div>

                  <div class="flex items-center justify-between pt-1">
                    <button 
                      type="button"
                      (click)="openProject(p)"
                      class="text-xs font-mono text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5 focus:outline-none">
                      <span>Quick Preview</span>
                      <span class="text-xs font-mono">&rarr;</span>
                    </button>

                    <a 
                      [routerLink]="['/projects', p.id]"
                      (click)="$event.stopPropagation()"
                      class="text-[11px] font-mono text-slate-400 hover:text-cyan-300 uppercase px-2 py-1 rounded bg-slate-900 border border-white/5 hover:border-cyan-500/40 transition-colors">
                      Full Case Study &gt;
                    </a>
                  </div>
                </div>

              </div>

            </article>
          }
        </div>

      </div>

      <!-- Project Detail Modal -->
      <app-project-detail-modal
        [project]="selectedProject()"
        (close)="selectedProject.set(null)" />
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class ProjectsComponent {
  protected readonly portfolio = inject(PortfolioService);

  readonly categories = [
    'All Projects',
    'Fintech & Billing',
    'Enterprise & Logistics',
    'Media & Utility',
    'E-Commerce'
  ];

  readonly selectedCategory = signal<string>('All Projects');
  readonly selectedProject = signal<Project | null>(null);

  readonly filteredProjects = computed<Project[]>(() => {
    const cat = this.selectedCategory();
    const all = this.portfolio.projects();
    if (cat === 'All Projects') return all;
    return all.filter(p => p.category === cat);
  });

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }
}
