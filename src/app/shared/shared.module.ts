import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent
  ],
  exports: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent
  ]
})

export class SharedModule { }
