import { Component, inject, signal, computed } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SkillCategory } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-start mb-14">
          <div class="cyber-badge mb-3">
            <span class="text-cyan-400 font-mono">// 03. TECHNICAL CAPABILITIES</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Specialized <span class="text-gradient-cyan">Skill Architecture</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Production-tested technical competencies across cross-platform mobile frameworks, state management, hardware protocols, and cloud services.
          </p>

          <!-- Category Filter Pills -->
          <div class="flex flex-wrap items-center gap-2 mt-8">
            <button 
              type="button" 
              (click)="selectedCategory.set('All')"
              class="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200"
              [class.bg-cyan-500]="selectedCategory() === 'All'"
              [class.text-slate-950]="selectedCategory() === 'All'"
              [class.font-bold]="selectedCategory() === 'All'"
              [class.bg-slate-900/60]="selectedCategory() !== 'All'"
              [class.text-slate-300]="selectedCategory() !== 'All'"
              [class.border]="selectedCategory() !== 'All'"
              [class.border-white/10]="selectedCategory() !== 'All'">
              All Capabilities
            </button>
            
            @for (cat of portfolio.skills(); track cat.category) {
              <button 
                type="button" 
                (click)="selectedCategory.set(cat.category)"
                class="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200"
                [class.bg-cyan-500]="selectedCategory() === cat.category"
                [class.text-slate-950]="selectedCategory() === cat.category"
                [class.font-bold]="selectedCategory() === cat.category"
                [class.bg-slate-900/60]="selectedCategory() !== cat.category"
                [class.text-slate-300]="selectedCategory() !== cat.category"
                [class.border]="selectedCategory() !== cat.category"
                [class.border-white/10]="selectedCategory() !== cat.category">
                {{ cat.category }}
              </button>
            }
          </div>
        </div>

        <!-- Skills Grid grouped by Category -->
        <div class="space-y-12">
          @for (cat of filteredCategories(); track cat.category) {
            <div class="space-y-5">
              
              <!-- Category Header -->
              <div class="flex items-center gap-3">
                <span class="w-3 h-3 rounded-full bg-cyan-400"></span>
                <h3 class="text-xl font-bold text-white">{{ cat.category }}</h3>
                <span class="text-xs font-mono text-slate-500 hidden sm:inline">— {{ cat.subtitle }}</span>
              </div>

              <!-- Skills Cards -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                @for (skill of cat.skills; track skill.name) {
                  <div 
                    class="glass-card p-5 rounded-2xl relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
                    [class.border-cyan-500/30]="skill.featured">
                    
                    <!-- Top Row: Name & Tag -->
                    <div class="flex items-center justify-between gap-2 mb-3">
                      <span class="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                        {{ skill.name }}
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {{ skill.badge }}
                      </span>
                    </div>

                    <!-- Experience Duration if available -->
                    @if (skill.experienceYears) {
                      <div class="text-[11px] font-mono text-slate-400 mb-3 flex items-center justify-between">
                        <span>Production usage:</span>
                        <span class="text-cyan-400">{{ skill.experienceYears }}</span>
                      </div>
                    }

                    <!-- Progress Bar Track -->
                    <div class="relative w-full h-2 rounded-full bg-slate-800/80 overflow-hidden border border-white/5">
                      <div 
                        class="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 group-hover:from-cyan-400 group-hover:to-violet-500 shadow-[0_0_10px_rgba(0,242,254,0.5)]"
                        [style.width.%]="skill.level">
                      </div>
                    </div>

                    <!-- Level Indicator -->
                    <div class="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
                      <span>Proficiency</span>
                      <span class="text-slate-400 font-semibold">{{ skill.level }}%</span>
                    </div>

                  </div>
                }
              </div>

            </div>
          }
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
export class SkillsComponent {
  protected readonly portfolio = inject(PortfolioService);
  readonly selectedCategory = signal<string>('All');

  readonly filteredCategories = computed<SkillCategory[]>(() => {
    const selected = this.selectedCategory();
    const all = this.portfolio.skills();
    if (selected === 'All') return all;
    return all.filter(c => c.category === selected);
  });
}
