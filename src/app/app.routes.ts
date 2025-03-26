import { Routes } from '@angular/router';
import { LandingPageComponent } from './composants/landing-page/landing-page.component';
import { ServicesComponent } from './composants/services/services.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { ProjetsComponent } from './composants/projets/projets.component';
import { ContactFormComponent } from './composants/contact-form/contact-form.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'projets', component: ProjetsComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: '**', component: NotFoundComponent }
];
