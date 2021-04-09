import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplynowComponent } from './applynow/applynow.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { DetailsComponent } from './details/details.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { FarmerformComponent } from './farmerform/farmerform.component';
import { FormDataComponent } from './form-data/form-data.component';
import { FormComponent } from './form/form.component';
import { FulltimeDetailsComponent } from './fulltime-details/fulltime-details.component';
import { InternComponent } from './intern/intern.component';
import { InternsDetailsComponent } from './interns-details/interns-details.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { QueriesComponent } from './queries/queries.component';
import { SellerformComponent } from './sellerform/sellerform.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'farmer', component: FarmerformComponent },
  { path: 'customer', component: SellerformComponent },
  { path: 'register', component: ApplynowComponent },
  { path: 'intern', component: InternComponent },
  {
    path: 'details',
    component: DetailsComponent,
    children: [
      { path: 'farmers', component: FarmerDetailsComponent },
      { path: 'business', component: BusinessDetailsComponent },
      { path: 'fulltime', component: FulltimeDetailsComponent },
      { path: 'interns', component: InternsDetailsComponent },
      { path: 'queries', component: QueriesComponent },
    ],
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
