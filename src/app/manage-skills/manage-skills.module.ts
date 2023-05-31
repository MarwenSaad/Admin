import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageSkillsRoutingModule } from './manage-skills-routing.module';
import { ManageSkillsComponent } from './manage-skills.component';


@NgModule({
  declarations: [
    ManageSkillsComponent
  ],
  imports: [
    CommonModule,
    ManageSkillsRoutingModule
  ]
})
export class ManageSkillsModule { }
