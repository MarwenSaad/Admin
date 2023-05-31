import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsTestRoutingModule } from './skills-test-routing.module';
import { SkillsTestComponent } from './skills-test.component';
import { ModalModule } from 'ngb-modal';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SkillsTestComponent
  ],
  imports: [
    CommonModule,
    SkillsTestRoutingModule,
    ModalModule,
    ReactiveFormsModule
  ]
})
export class SkillsTestModule { }
