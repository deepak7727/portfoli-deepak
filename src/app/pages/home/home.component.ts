import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { FrameworkComponent } from '../../components/framework/framework.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { NumbersComponent } from '../../components/numbers/numbers.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { AboutComponent } from '../../components/about/about.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { ResumeComponent } from '../../components/resume/resume.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SkillsComponent,
    FrameworkComponent,
    ProjectsComponent,
    NumbersComponent,
    ExperienceComponent,
    AboutComponent,
    FaqComponent,
    ResumeComponent,
    ContactComponent
  ],
  template: `
    <main class="relative z-10">
      <app-hero />
      <app-skills />
      <app-framework />
      <app-projects />
      <app-numbers />
      <app-experience />
      <app-about />
      <app-faq />
      <app-resume />
      <app-contact />
    </main>
  `
})
export class HomeComponent {}
