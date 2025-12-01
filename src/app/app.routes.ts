import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'what-we-do', component: WhatWeDoComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
