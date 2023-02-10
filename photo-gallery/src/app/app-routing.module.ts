import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './pages/auth/register/register.page';
import { LandingMainPage } from './pages/landing/landing-main/landing-main.page';
import { Step1Page } from './pages/landing/step1/step1.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'rules',
    loadChildren: () => import('./pages/rules/rules.module').then( m => m.RulesPageModule)
  },

  {
    path: 'secondary-header',
    loadChildren: () => import('./pages/headers/secondary-header/secondary-header.module').then( m => m.SecondaryHeaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'landing-main',
    loadChildren: () => import('./pages/landing/landing-main/landing-main.module').then( m => m.LandingMainPageModule)
  },
  {
    path: 'step1',
    loadChildren: () => import('./pages/landing/step1/step1.module').then( m => m.Step1PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LandingMainPage },
      { path: 'register', component: RegisterPage },
      { path: 'step1', component: Step1Page },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
