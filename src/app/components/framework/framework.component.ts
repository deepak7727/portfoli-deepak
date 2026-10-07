import { Component } from '@angular/core';

@Component({
  selector: 'app-framework',
  standalone: true,
  template: `
    <section id="solutions" class="py-24 relative z-10">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        
        <!-- Section Header (dotr.in style) -->
        <div class="text-center mb-16">
          <div class="inline-flex mb-4">
            <div class="dotr-pill-badge">
              <span>Engineering Philosophy</span>
            </div>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Why Architecture Matters
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Bridging the gap between fragile prototypes and resilient enterprise mobile systems.
          </p>
        </div>

        <!-- Vertical Problem -> Impact -> Solution Flow (Exact dotr.in style) -->
        <div class="space-y-6">
          
          <!-- Card 1: The Problem (Soft Red/Rose Tint) -->
          <div class="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-rose-500/30 backdrop-blur-md shadow-lg">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <div class="space-y-2">
                <h3 class="text-lg sm:text-xl font-bold text-white">The Common Mobile Bottleneck</h3>
                <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Many mobile applications suffer from unstructured state management, memory leaks from heavy document generation, and jittery hardware scanner latency. Offline drops result in lost transactions and inconsistent ledger records.
                </p>
              </div>
            </div>
          </div>

          <!-- Down Arrow -->
          <div class="flex justify-center text-slate-500 text-xl font-mono">
            <span>&darr;</span>
          </div>

          <!-- Card 2: Why It Matters (Soft Amber Tint) -->
          <div class="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-amber-500/30 backdrop-blur-md shadow-lg">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="space-y-2">
                <h3 class="text-lg sm:text-xl font-bold text-white">Why It Impacts Business Outcomes</h3>
                <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Every crashed payment flow or slow warehouse dispatch line costs money, frustrates customers, and degrades app store rankings. Quick hacks lead to technical debt that slows down feature releases by months.
                </p>
              </div>
            </div>
          </div>

          <!-- Down Arrow -->
          <div class="flex justify-center text-slate-500 text-xl font-mono">
            <span>&darr;</span>
          </div>

          <!-- Card 3: The Solution (Soft Royal Blue Tint) -->
          <div class="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-blue-500/40 backdrop-blur-md shadow-xl shadow-blue-950/20">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <div class="space-y-2">
                <h3 class="text-lg sm:text-xl font-bold text-white">The Engineering Solution</h3>
                <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Deepak applies deterministic BLoC state isolation, compute isolates for intensive tasks, offline SQLite conflict resolution, and native Kotlin platform bridges. The result is <strong class="text-blue-300 font-semibold">99.8% crash-free stability</strong>, sub-50ms hardware scanner response, and reliable 60fps experiences.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class FrameworkComponent {}
