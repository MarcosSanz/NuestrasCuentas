import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

// ng2-charts
// import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    AccountSettingsComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    // ChartsModule
  ]
})

export class PagesModule { }
