import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicProfileContenentComponent } from './public-profile-contenent.component';

const routes: Routes = [{ path: '', component: PublicProfileContenentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicProfileContenentRoutingModule { }
