import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from '../add-questions/add-questions.component';
import { ApprovedCompaniesComponent } from '../approved-companies/approved-companies.component';
import { ApprovedJobSeekerComponent } from '../approved-job-seeker/approved-job-seeker.component';
import { BrowseCompaniesComponent } from '../browse-companies/browse-companies.component';
import { BrowseJobSeekerComponent } from '../browse-job-seeker/browse-job-seeker.component';
import { LayoutComponent } from '../Component/layout/layout.component';
import { LoginComponent } from '../login/login.component';
import { ManageSkillsComponent } from '../manage-skills/manage-skills.component';
import { NewCompaniesComponent } from '../new-companies/new-companies.component';
import { NewJobSeekerComponent } from '../new-job-seeker/new-job-seeker.component';
import { ProfileComponent } from '../profile/profile.component';
import { PublicProfileContenentComponent } from '../public-profile-contenent/public-profile-contenent.component';
import { PublicProfileComponent } from '../public-profile/public-profile.component';
import { SkillsTestComponent } from '../skills-test/skills-test.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  
  {path: '', component: HomeComponent,children:[
     {path:'',component:LayoutComponent},
     {path:'Login',component:LoginComponent},
     {path:'Profile',component:ProfileComponent},
     {path:'Login',component:LoginComponent},
     {path:'BrowseCompanies',component:BrowseCompaniesComponent},
     {path:'ApprovedCompanies',component:ApprovedCompaniesComponent},
     {path:'NewCompanies',component:NewCompaniesComponent},
     {path:'BrowseJobSeeker',component:BrowseJobSeekerComponent},
     {path:'ApprovedJobSeeker',component:ApprovedJobSeekerComponent},
     {path:'NewJobSeeker',component:NewJobSeekerComponent},
     {path:'PublicProfile/:Id/:Role',component:PublicProfileComponent},
     {path:'MangeSkills',component:ManageSkillsComponent},
     {path:'SkillsTest/:Id/:SkillsName',component:SkillsTestComponent},
     {path:'AddQuestions/:Id',component:AddQuestionsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
