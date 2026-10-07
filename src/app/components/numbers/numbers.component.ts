import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-numbers',
  standalone: true,
  template: `
    <section id="numbers" class="py-20 relative z-10 bg-[#040822] border-y border-white/10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        <div class="mb-14">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-2">
            By the Numbers
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Quantifiable engineering impact delivered in commercial environments
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          @for (metric of metrics; track metric.label) {
            <div class="dotr-card p-6 sm:p-8 flex flex-col items-center text-center">
              <div class="text-4xl sm:text-5xl font-bold font-mono text-white mb-2">
                {{ metric.value }}
              </div>
              <div class="text-sm font-semibold text-blue-400 mb-1">
                {{ metric.label }}
              </div>
              <p class="text-xs text-slate-400 max-w-[200px]">
                {{ metric.desc }}
              </p>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class NumbersComponent {
  protected readonly portfolio = inject(PortfolioService);

  readonly metrics = [
    {
      value: '2.5+',
      label: 'Years Experience',
      desc: 'Hands-on commercial mobile engineering at TechAbbot'
    },
    {
      value: '6+',
      label: 'Production Apps',
      desc: 'Shipped to Google Play Store and Apple App Store'
    },
    {
      value: '99.8%',
      label: 'Crash-Free Rate',
      desc: 'Maintained across all production release cycles'
    },
    {
      value: '35%',
      label: 'Efficiency Gain',
      desc: 'Warehouse picking speed boosted with laser barcode API'
    }
  ];
}
