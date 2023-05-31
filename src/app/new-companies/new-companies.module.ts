import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCompaniesRoutingModule } from './new-companies-routing.module';
import { NewCompaniesComponent } from './new-companies.component';


@NgModule({
  declarations: [
    NewCompaniesComponent
  ],
  imports: [
    CommonModule,
    NewCompaniesRoutingModule
  ]
})
export class NewCompaniesModule { }
