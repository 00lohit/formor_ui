import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplynowComponent } from './applynow/applynow.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { FarmerformComponent } from './farmerform/farmerform.component';
import { FormDataComponent } from './form-data/form-data.component';
import { FormComponent } from './form/form.component';
import { InternComponent } from './intern/intern.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SellerformComponent } from './sellerform/sellerform.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'farmer', component: FarmerformComponent },
  { path: 'customer', component: SellerformComponent },
  { path: 'register', component: ApplynowComponent },
  { path: 'intern', component: InternComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
