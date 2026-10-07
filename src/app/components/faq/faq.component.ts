import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  template: `
    <section id="faq" class="py-24 relative z-10">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        
        <!-- Section Header (dotr.in FAQ style) -->
        <div class="text-center mb-16">
          <div class="inline-flex mb-4">
            <div class="dotr-pill-badge">
              <span>FAQ</span>
            </div>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Direct answers on mobile architecture, tech stack, and engineering collaboration.
          </p>
        </div>

        <!-- Accordion List (dotr.in style) -->
        <div class="divide-y divide-white/10 border-y border-white/10">
          @for (item of faqs; track item.question; let idx = $index) {
            <div class="py-5">
              <button 
                type="button" 
                (click)="toggleFaq(idx)"
                class="w-full flex items-center justify-between text-left gap-4 py-2 text-base sm:text-lg font-semibold text-white hover:text-blue-400 transition-colors focus:outline-none">
                <span>{{ item.question }}</span>
                <span 
                  class="w-6 h-6 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xs text-slate-400 flex-shrink-0 transition-transform duration-200"
                  [class.rotate-180]="openIndex() === idx">
                  &darr;
                </span>
              </button>

              @if (openIndex() === idx) {
                <div class="pt-3 pb-2 text-sm sm:text-base text-slate-300 leading-relaxed animate-fade-in">
                  {{ item.answer }}
                </div>
              }
            </div>
          }
        </div>

      </div>
    </section>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.2s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class FaqComponent {
  readonly openIndex = signal<number | null>(0);

  readonly faqs: FaqItem[] = [
    {
      question: 'What is your core mobile tech stack and experience level?',
      answer: 'My primary stack is Flutter, Dart, and Kotlin with 2.5+ years of commercial production experience at TechAbbot. I have architected and deployed apps across fintech, inventory logistics, GST billing, and e-commerce.'
    },
    {
      question: 'How do you ensure 60 FPS performance and avoid UI stuttering?',
      answer: 'I isolate heavy computation—such as multi-page vector PDF generation or large image processing—into Flutter background compute isolates. For state management, I use BLoC/Cubit to minimize unnecessary widget rebuilds, and profile rendering passes with the Flutter DevTools.'
    },
    {
      question: 'Have you integrated industrial hardware like laser barcode scanners and POS printers?',
      answer: 'Yes. I have direct experience writing native Kotlin platform bridges for Zebra and Honeywell rugged laser scanners, enabling sub-50ms barcode interrupts, as well as integrating thermal receipt printers via Bluetooth and USB protocols.'
    },
    {
      question: 'What state management and architecture patterns do you follow?',
      answer: 'I adhere strictly to Clean Architecture (Presentation, Domain, and Data separation) with unidirectional BLoC/Cubit state machines. I am also proficient with Riverpod, GetX, and standard MVVM repository patterns.'
    },
    {
      question: 'Can you handle end-to-end store releases on Google Play and Apple App Store?',
      answer: 'Yes. I manage the entire release lifecycle on Google Play Console and Apple App Store Connect, including bundle building, keystore management, provisioning profiles, store listing assets, and Crashlytics telemetry.'
    },
    {
      question: 'Are you open to full-time engineering roles or consulting opportunities?',
      answer: 'Yes, I am actively exploring senior mobile engineering roles, cross-platform architecture positions, and select high-impact software consulting initiatives.'
    }
  ];

  toggleFaq(index: number): void {
    this.openIndex.update(curr => (curr === index ? null : index));
  }
}
