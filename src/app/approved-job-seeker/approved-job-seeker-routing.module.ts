import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedJobSeekerComponent } from './approved-job-seeker.component';

const routes: Routes = [{ path: '', component: ApprovedJobSeekerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovedJobSeekerRoutingModule { }
