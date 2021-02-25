import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDataComponent } from './form-data/form-data.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'data', component: FormComponent },
  { path: 'formdata', component: FormDataComponent },
  { path: '', redirectTo: 'data', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
