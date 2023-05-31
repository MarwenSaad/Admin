import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsTestComponent } from './skills-test.component';

const routes: Routes = [{ path: '', component: SkillsTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsTestRoutingModule { }
