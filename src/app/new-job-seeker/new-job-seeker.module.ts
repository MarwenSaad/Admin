import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewJobSeekerRoutingModule } from './new-job-seeker-routing.module';
import { NewJobSeekerComponent } from './new-job-seeker.component';


@NgModule({
  declarations: [
    NewJobSeekerComponent
  ],
  imports: [
    CommonModule,
    NewJobSeekerRoutingModule
  ]
})
export class NewJobSeekerModule { }
