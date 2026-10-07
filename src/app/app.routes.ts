import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Deepak Panchal | Senior Mobile & Flutter App Developer'
  },
  {
    path: 'projects/:id',
    component: ProjectPageComponent,
    title: 'Project Case Study | Deepak Panchal'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
