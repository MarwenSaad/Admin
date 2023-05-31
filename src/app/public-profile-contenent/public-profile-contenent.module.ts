import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicProfileContenentRoutingModule } from './public-profile-contenent-routing.module';
import { PublicProfileContenentComponent } from './public-profile-contenent.component';


@NgModule({
  declarations: [
    PublicProfileContenentComponent
  ],
  imports: [
    CommonModule,
    PublicProfileContenentRoutingModule
  ]
})
export class PublicProfileContenentModule { }
