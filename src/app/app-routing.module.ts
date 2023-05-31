import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
 { path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
 { path: 'Profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }, 
 { path: 'BrowseCompanies', loadChildren: () => import('./browse-companies/browse-companies.module').then(m => m.BrowseCompaniesModule) }, 
 { path: 'ApprovedCompanies', loadChildren: () => import('./approved-companies/approved-companies.module').then(m => m.ApprovedCompaniesModule) }, 
 { path: 'NewCompanies', loadChildren: () => import('./new-companies/new-companies.module').then(m => m.NewCompaniesModule) }, 
 { path: 'PublicProfile', loadChildren: () => import('./public-profile/public-profile.module').then(m => m.PublicProfileModule) }, 
 { path: 'PublicProfileContenet', loadChildren: () => import('./public-profile-contenent/public-profile-contenent.module').then(m => m.PublicProfileContenentModule) }, 
 { path: 'ManageSkills', loadChildren: () => import('./manage-skills/manage-skills.module').then(m => m.ManageSkillsModule) }, 
 { path: 'SkillsTest', loadChildren: () => import('./skills-test/skills-test.module').then(m => m.SkillsTestModule) },
 { path: 'BrowseJobSeeker', loadChildren: () => import('./browse-job-seeker/browse-job-seeker.module').then(m => m.BrowseJobSeekerModule) },
 { path: 'ApprovedJobSeeker', loadChildren: () => import('./approved-job-seeker/approved-job-seeker.module').then(m => m.ApprovedJobSeekerModule) },
 { path: 'NewJobSeeker', loadChildren: () => import('./new-job-seeker/new-job-seeker.module').then(m => m.NewJobSeekerModule) },
 { path: 'AddQuestions', loadChildren: () => import('./add-questions/add-questions.module').then(m => m.AddQuestionsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
