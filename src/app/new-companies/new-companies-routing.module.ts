import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompaniesComponent } from './new-companies.component';

const routes: Routes = [{ path: '', component: NewCompaniesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCompaniesRoutingModule { }
