import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedCompaniesComponent } from './approved-companies.component';

const routes: Routes = [{ path: '', component: ApprovedCompaniesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovedCompaniesRoutingModule { }
