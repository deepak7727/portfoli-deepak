import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section id="contact" class="py-24 relative z-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <!-- Big CTA Header (Exact dotr.in ready-to-scale style) -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex mb-4">
            <div class="dotr-pill-badge">
              <span>Direct Transmission</span>
            </div>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Ready to Build Scalable <br class="hidden sm:inline" />
            <span class="text-blue-500">Mobile Applications?</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Let's discuss senior mobile engineering roles, cross-platform architecture, or commercial projects.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Column: Direct Communication Channels -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="dotr-card p-7 sm:p-8">
              <h3 class="text-xl font-bold text-white mb-2">Direct Reach</h3>
              <p class="text-slate-400 text-sm mb-6">
                Connect directly via email or phone. I respond within 24 business hours.
              </p>

              <div class="space-y-4">
                
                <!-- Email -->
                <a 
                  [href]="'mailto:' + portfolio.personalInfo().email"
                  class="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-blue-500/40 hover:bg-slate-900 transition-all group">
                  <div class="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                    <div class="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {{ portfolio.personalInfo().email }}
                    </div>
                  </div>
                </a>

                <!-- Phone -->
                <a 
                  [href]="'tel:' + portfolio.personalInfo().phone"
                  class="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-blue-500/40 hover:bg-slate-900 transition-all group">
                  <div class="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-[11px] font-mono text-slate-400 uppercase">Direct Phone</div>
                    <div class="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {{ portfolio.personalInfo().phone }}
                    </div>
                  </div>
                </a>

                <!-- Location -->
                <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div class="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                    <div class="text-sm font-semibold text-white">
                      {{ portfolio.personalInfo().location }}, India
                    </div>
                  </div>
                </div>

              </div>

              <!-- LinkedIn -->
              <div class="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs font-mono uppercase text-slate-400">Professional Network</span>
                <a 
                  [href]="portfolio.personalInfo().linkedin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/10 text-blue-400 hover:text-white hover:bg-blue-600 border border-blue-500/30 transition-all text-xs font-medium">
                  <span>LinkedIn</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

          </div>

          <!-- Right Column: Intake Form (dotr.in style) -->
          <div class="lg:col-span-7">
            <div class="dotr-card p-7 sm:p-10">
              
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p class="text-slate-400 text-sm mb-8">
                Provide your project details or job specification below.
              </p>

              <!-- Success Banner -->
              @if (contactService.sendSuccess()) {
                <div class="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-3 mb-6 animate-fade-in">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">🚀</span>
                    <div>
                      <h4 class="font-bold text-base text-white">Message Transmitted Successfully!</h4>
                      <p class="text-xs sm:text-sm text-emerald-300">
                        Thank you for reaching out. Deepak will get back to you promptly.
                      </p>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    (click)="resetForm()"
                    class="dotr-btn-secondary !py-1.5 !px-3 !text-xs mt-2">
                    Send Another Message
                  </button>
                </div>
              }

              <!-- Error Banner -->
              @if (contactService.errorMessage(); as errorMsg) {
                <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs mb-6 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{{ errorMsg }}</span>
                </div>
              }

              @if (!contactService.sendSuccess()) {
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-5" novalidate>
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <!-- Name -->
                    <div class="space-y-1.5">
                      <label for="contact-name" class="block text-xs font-medium text-slate-300">
                        Your Name *
                      </label>
                      <input 
                        id="contact-name"
                        type="text" 
                        formControlName="name"
                        placeholder="John Doe"
                        class="w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                        [class.border-slate-800]="!isFieldInvalid('name')"
                        [class.border-rose-500]="isFieldInvalid('name')" />
                      @if (isFieldInvalid('name')) {
                        <span class="text-[11px] text-rose-400 font-mono">Please enter your name (min 2 chars).</span>
                      }
                    </div>

                    <!-- Email -->
                    <div class="space-y-1.5">
                      <label for="contact-email" class="block text-xs font-medium text-slate-300">
                        Email Address *
                      </label>
                      <input 
                        id="contact-email"
                        type="email" 
                        formControlName="email"
                        placeholder="john@company.com"
                        class="w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                        [class.border-slate-800]="!isFieldInvalid('email')"
                        [class.border-rose-500]="isFieldInvalid('email')" />
                      @if (isFieldInvalid('email')) {
                        <span class="text-[11px] text-rose-400 font-mono">Please enter a valid email address.</span>
                      }
                    </div>

                  </div>

                  <!-- Subject -->
                  <div class="space-y-1.5">
                    <label for="contact-subject" class="block text-xs font-medium text-slate-300">
                      Subject / Role *
                    </label>
                    <input 
                      id="contact-subject"
                      type="text" 
                      formControlName="subject"
                      placeholder="Senior Flutter Developer Position / App Project"
                      class="w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                      [class.border-slate-800]="!isFieldInvalid('subject')"
                      [class.border-rose-500]="isFieldInvalid('subject')" />
                    @if (isFieldInvalid('subject')) {
                      <span class="text-[11px] text-rose-400 font-mono">Subject is required (min 3 chars).</span>
                    }
                  </div>

                  <!-- Message -->
                  <div class="space-y-1.5">
                    <label for="contact-message" class="block text-xs font-medium text-slate-300">
                      Project Requirements / Message *
                    </label>
                    <textarea 
                      id="contact-message"
                      rows="5"
                      formControlName="message"
                      placeholder="Describe your application requirements, timeline, or engineering opportunity..."
                      class="w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all resize-y"
                      [class.border-slate-800]="!isFieldInvalid('message')"
                      [class.border-rose-500]="isFieldInvalid('message')"></textarea>
                    @if (isFieldInvalid('message')) {
                      <span class="text-[11px] text-rose-400 font-mono">Message is required (min 10 chars).</span>
                    }
                  </div>

                  <!-- Submit Button -->
                  <div class="pt-2">
                    <button 
                      type="submit" 
                      [disabled]="contactService.isSending()"
                      class="dotr-btn-primary !w-full !py-3.5 flex items-center justify-center gap-2">
                      @if (contactService.isSending()) {
                        <span>Delivering Message...</span>
                      } @else {
                        <span>Send Message</span>
                        <span class="text-sm">&rarr;</span>
                      }
                    </button>
                  </div>

                </form>
              }

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly contactService = inject(ContactService);
  protected readonly portfolio = inject(PortfolioService);

  readonly contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const val = this.contactForm.value;
    const res = await this.contactService.sendMessage(val);
    if (res.success) {
      this.contactForm.reset();
    }
  }

  resetForm(): void {
    this.contactService.resetStatus();
    this.contactForm.reset();
  }
}
