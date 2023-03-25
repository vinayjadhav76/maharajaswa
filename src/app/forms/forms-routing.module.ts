import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBComponent } from './form-b/form-b.component';

const routes: Routes = [
  {path:'form-b' , component:FormBComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
