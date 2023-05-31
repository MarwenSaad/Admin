import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageSkillsComponent } from './manage-skills.component';

const routes: Routes = [{ path: '', component: ManageSkillsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageSkillsRoutingModule { }
