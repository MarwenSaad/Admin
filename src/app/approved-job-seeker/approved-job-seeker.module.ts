import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovedJobSeekerRoutingModule } from './approved-job-seeker-routing.module';
import { ApprovedJobSeekerComponent } from './approved-job-seeker.component';


@NgModule({
  declarations: [
    ApprovedJobSeekerComponent
  ],
  imports: [
    CommonModule,
    ApprovedJobSeekerRoutingModule
  ]
})
export class ApprovedJobSeekerModule { }
