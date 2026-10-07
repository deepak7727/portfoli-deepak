import { Component, inject, signal, computed } from '@angular/core';
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
        
        <!-- Section Header (dotr.in style) -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex mb-4">
            <div class="dotr-pill-badge">
              <span>Production Portfolio</span>
            </div>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Selected Production Work
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Real-world mobile applications deployed across fintech, enterprise logistics, billing, and multimedia.
          </p>

          <!-- Category Filter Pills (dotr.in style) -->
          <div class="flex flex-wrap items-center justify-center gap-2 mt-8">
            @for (cat of categories; track cat) {
              <button 
                type="button"
                (click)="selectedCategory.set(cat)"
                class="px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200"
                [class.bg-blue-600]="selectedCategory() === cat"
                [class.text-white]="selectedCategory() === cat"
                [class.font-semibold]="selectedCategory() === cat"
                [class.bg-slate-900/70]="selectedCategory() !== cat"
                [class.text-slate-300]="selectedCategory() !== cat"
                [class.border]="selectedCategory() !== cat"
                [class.border-white/10]="selectedCategory() !== cat">
                {{ cat }}
              </button>
            }
          </div>
        </div>

        <!-- Projects Grid (dotr.in case studies layout) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (p of filteredProjects(); track p.id) {
            <article 
              class="project-card dotr-card overflow-hidden flex flex-col group cursor-pointer"
              data-cursor="project"
              (click)="openProject(p)">
              
              <!-- Clean Screenshot Frame -->
              <div class="relative bg-slate-950 p-6 overflow-hidden border-b border-white/5 flex items-center justify-center min-h-[280px]">
                
                <!-- Category Badge -->
                <div class="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-900/90 border border-white/10 text-[11px] font-mono text-slate-300">
                  {{ p.category }}
                </div>

                @if (p.featured) {
                  <div class="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-[10px] font-mono text-blue-300 font-bold">
                    PRODUCTION
                  </div>
                }

                <!-- Phone Frame Preview (Zero Neon, Clean Slate) -->
                <div class="relative w-48 rounded-[28px] overflow-hidden border-[4px] border-slate-800 shadow-2xl group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 bg-black">
                  <div class="w-14 h-2.5 bg-slate-900 rounded-b-md mx-auto mb-0.5"></div>
                  <img 
                    [src]="p.thumbnail" 
                    [alt]="p.title + ' mobile screen'"
                    class="w-full h-auto object-cover max-h-[240px] rounded-[22px]"
                    loading="lazy" />
                </div>

              </div>

              <!-- Card Body Content -->
              <div class="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-6">
                
                <div class="space-y-3">
                  <div class="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{{ p.platform }}</span>
                    <span>{{ p.screenshots.length }} Screens</span>
                  </div>

                  <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {{ p.title }}
                  </h3>

                  <p class="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {{ p.description }}
                  </p>

                  <div class="pt-1">
                    <span class="inline-block text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300">
                      {{ p.architecture }}
                    </span>
                  </div>
                </div>

                <!-- Footer: Tags & Action -->
                <div class="space-y-4 pt-4 border-t border-white/5">
                  <div class="flex flex-wrap gap-1.5">
                    @for (tag of p.tags.slice(0, 4); track tag) {
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-slate-400">
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
                    <span class="text-xs font-medium text-blue-400 group-hover:text-blue-300 flex items-center gap-1.5">
                      <span>View Case Study</span>
                      <span class="text-xs">&rarr;</span>
                    </span>

                    <a 
                      [routerLink]="['/projects', p.id]"
                      (click)="$event.stopPropagation()"
                      class="text-[11px] font-mono text-slate-400 hover:text-white uppercase px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 hover:border-white/20 transition-colors">
                      Full Page &gt;
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
  `
})
export class ProjectsComponent {
  protected readonly portfolio = inject(PortfolioService);

  readonly categories = [
    'All Work',
    'Fintech & Billing',
    'Enterprise & Logistics',
    'Media & Utility',
    'E-Commerce'
  ];

  readonly selectedCategory = signal<string>('All Work');
  readonly selectedProject = signal<Project | null>(null);

  readonly filteredProjects = computed<Project[]>(() => {
    const cat = this.selectedCategory();
    const all = this.portfolio.projects();
    if (cat === 'All Work') return all;
    return all.filter(p => p.category === cat);
  });

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }
}
