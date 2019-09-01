import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { CreateComponent } from 'src/app/create/create.component';

const routes: Routes = [
  {path:'', component:SignComponent},
  {path:'sign', component:SignComponent},
  {path:'creat', component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
