import { Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { GpsSummaryComponent } from './page/gps-summary/gps-summary.component';
import { GpsDetailComponent } from './page/gps-detail/gps-detail.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'gps-summary', component: GpsSummaryComponent },
  { path: 'gps-detail', component: GpsDetailComponent },
];
