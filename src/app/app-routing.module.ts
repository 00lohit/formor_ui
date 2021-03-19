import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { FormDataComponent } from './form-data/form-data.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'comingsoon', component: ComingsoonComponent },
  { path: '', redirectTo: 'comingsoon', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
