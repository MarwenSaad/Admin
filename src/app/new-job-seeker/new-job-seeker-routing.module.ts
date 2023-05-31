import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewJobSeekerComponent } from './new-job-seeker.component';

const routes: Routes = [{ path: '', component: NewJobSeekerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewJobSeekerRoutingModule { }
