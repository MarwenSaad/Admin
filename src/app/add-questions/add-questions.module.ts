import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddQuestionsRoutingModule } from './add-questions-routing.module';
import { AddQuestionsComponent } from './add-questions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngb-modal';


@NgModule({
  declarations: [
    AddQuestionsComponent
  ],
  imports: [
    CommonModule,
    AddQuestionsRoutingModule,
    ReactiveFormsModule,
    ModalModule
  ]
})
export class AddQuestionsModule { }
