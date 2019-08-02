import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})

export class PagesModule { }
