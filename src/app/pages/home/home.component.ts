import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ResumeComponent } from '../../components/resume/resume.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent
  ],
  template: `
    <main class="relative z-10">
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
      <app-resume />
      <app-contact />
    </main>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class HomeComponent {}
