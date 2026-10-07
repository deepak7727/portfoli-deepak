import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section id="contact" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-start mb-16">
          <div class="cyber-badge mb-3">
            <span class="text-cyan-400 font-mono">// 06. INITIATE CONTACT</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Let's Build Something <span class="text-gradient-cyan">Exceptional</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Available for senior mobile engineering positions, cross-platform architecture consultations, and high-impact software initiatives.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column: Direct Communication Channels -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div class="absolute -top-10 -right-10 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 class="text-xl font-bold text-white mb-2">Direct Reach</h3>
              <p class="text-slate-400 text-sm mb-6">
                Reach out directly via email, phone, or LinkedIn. I typically respond within 24 hours.
              </p>

              <div class="space-y-4">
                
                <!-- Email -->
                <a 
                  [href]="'mailto:' + portfolio.personalInfo().email"
                  class="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900 transition-all group">
                  <div class="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                    <div class="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {{ portfolio.personalInfo().email }}
                    </div>
                  </div>
                </a>

                <!-- Phone -->
                <a 
                  [href]="'tel:' + portfolio.personalInfo().phone"
                  class="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-violet-500/40 hover:bg-slate-900 transition-all group">
                  <div class="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-[11px] font-mono text-slate-400 uppercase">Direct Phone</div>
                    <div class="text-sm sm:text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {{ portfolio.personalInfo().phone }}
                    </div>
                  </div>
                </a>

                <!-- Location -->
                <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                  <div class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-[11px] font-mono text-slate-400 uppercase">Base of Operation</div>
                    <div class="text-sm font-semibold text-white">
                      {{ portfolio.personalInfo().location }}, India
                    </div>
                    <div class="text-[11px] text-slate-500 font-mono">Hometown: Revdar, Rajasthan</div>
                  </div>
                </div>

              </div>

              <!-- Professional Social Presence -->
              <div class="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs font-mono uppercase text-slate-400">Professional Profile</span>
                <a 
                  [href]="portfolio.personalInfo().linkedin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600 transition-colors text-xs font-mono">
                  <span>LinkedIn Profile</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            <!-- Architecture Compatibility Notice -->
            <div class="p-4 rounded-2xl bg-slate-900/40 border border-cyan-500/20 text-xs text-slate-400 leading-relaxed font-mono">
              <span class="text-cyan-400 font-bold">INFO:</span> Form is pre-configured with a modular service adapter for EmailJS, Formspree, or custom REST APIs.
            </div>

          </div>

          <!-- Right Column: Interactive Reactive Form -->
          <div class="lg:col-span-7">
            <div class="glass-card p-6 sm:p-10 rounded-3xl relative">
              
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Send an Instant Message</h3>
              <p class="text-slate-400 text-sm mb-8">
                Fill in the details below and I'll receive your transmission directly.
              </p>

              <!-- Success Alert Banner -->
              @if (contactService.sendSuccess()) {
                <div class="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-3 mb-6 animate-fade-in">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">🚀</span>
                    <div>
                      <h4 class="font-bold text-base text-white">Message Transmitted Successfully!</h4>
                      <p class="text-xs sm:text-sm text-emerald-300">
                        Thank you for reaching out. I'll get back to you promptly.
                      </p>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    (click)="resetForm()"
                    class="cyber-btn-secondary !py-1.5 !px-3 !text-xs mt-2">
                    Send Another Message
                  </button>
                </div>
              }

              <!-- Error Alert Banner -->
              @if (contactService.errorMessage(); as errorMsg) {
                <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs mb-6 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{{ errorMsg }}</span>
                </div>
              }

              @if (!contactService.sendSuccess()) {
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-5" novalidate>
                  
                  <!-- Name & Email Row -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <!-- Name Field -->
                    <div class="space-y-1.5">
                      <label for="contact-name" class="block text-xs font-mono uppercase tracking-wider text-slate-300">
                        Your Name <span class="text-cyan-400">*</span>
                      </label>
                      <input 
                        id="contact-name"
                        type="text" 
                        formControlName="name"
                        placeholder="e.g. John Doe"
                        class="w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm transition-all"
                        [class.border-slate-800]="!isFieldInvalid('name')"
                        [class.border-rose-500]="isFieldInvalid('name')" />
                      @if (isFieldInvalid('name')) {
                        <span class="text-[11px] text-rose-400 font-mono">Please enter your name (min 2 characters).</span>
                      }
                    </div>

                    <!-- Email Field -->
                    <div class="space-y-1.5">
                      <label for="contact-email" class="block text-xs font-mono uppercase tracking-wider text-slate-300">
                        Email Address <span class="text-cyan-400">*</span>
                      </label>
                      <input 
                        id="contact-email"
                        type="email" 
                        formControlName="email"
                        placeholder="e.g. john@company.com"
                        class="w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm transition-all"
                        [class.border-slate-800]="!isFieldInvalid('email')"
                        [class.border-rose-500]="isFieldInvalid('email')" />
                      @if (isFieldInvalid('email')) {
                        <span class="text-[11px] text-rose-400 font-mono">Please enter a valid email address.</span>
                      }
                    </div>

                  </div>

                  <!-- Subject Field -->
                  <div class="space-y-1.5">
                    <label for="contact-subject" class="block text-xs font-mono uppercase tracking-wider text-slate-300">
                      Subject <span class="text-cyan-400">*</span>
                    </label>
                    <input 
                      id="contact-subject"
                      type="text" 
                      formControlName="subject"
                      placeholder="e.g. Mobile Developer Role / Project Consultation"
                      class="w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm transition-all"
                      [class.border-slate-800]="!isFieldInvalid('subject')"
                      [class.border-rose-500]="isFieldInvalid('subject')" />
                    @if (isFieldInvalid('subject')) {
                      <span class="text-[11px] text-rose-400 font-mono">Subject is required (min 3 characters).</span>
                    }
                  </div>

                  <!-- Message Field -->
                  <div class="space-y-1.5">
                    <label for="contact-message" class="block text-xs font-mono uppercase tracking-wider text-slate-300">
                      Message Content <span class="text-cyan-400">*</span>
                    </label>
                    <textarea 
                      id="contact-message"
                      rows="5"
                      formControlName="message"
                      placeholder="Tell me about your application requirements, timeline, or engineering opportunity..."
                      class="w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm transition-all resize-y"
                      [class.border-slate-800]="!isFieldInvalid('message')"
                      [class.border-rose-500]="isFieldInvalid('message')"></textarea>
                    @if (isFieldInvalid('message')) {
                      <span class="text-[11px] text-rose-400 font-mono">Message is required (min 10 characters).</span>
                    }
                  </div>

                  <!-- Submit Button -->
                  <div class="pt-2">
                    <button 
                      type="submit" 
                      [disabled]="contactService.isSending()"
                      class="cyber-btn-primary !w-full !py-3.5 flex items-center justify-center gap-2">
                      @if (contactService.isSending()) {
                        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Transmitting Message...</span>
                      } @else {
                        <span>Send Message</span>
                        <svg class="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
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
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
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
