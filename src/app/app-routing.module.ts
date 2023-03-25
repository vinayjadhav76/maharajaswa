import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBComponent } from './forms/form-b/form-b.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path:'forms', loadChildren:() => import('./forms/forms.module').then(m=> m.FormsModule) }
  // { path:'form-b' , component:FormBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
