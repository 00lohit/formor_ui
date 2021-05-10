import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ApplynowComponent } from './applynow/applynow.component';
import { AuthGuard } from './auth.guard';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { CreateusersComponent } from './createusers/createusers.component';
import { AddCropComponent } from './crops/add-crop/add-crop.component';
import { CropsComponent } from './crops/crops.component';
import { DetailsComponent } from './details/details.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { FarmerComponent } from './farmer/farmer.component';
import { FarmerformComponent } from './farmerform/farmerform.component';
import { AddFarmComponent } from './farms/add-farm/add-farm.component';
import { FarmsComponent } from './farms/farms.component';
import { FormDataComponent } from './form-data/form-data.component';
import { FormComponent } from './form/form.component';
import { FulltimeDetailsComponent } from './fulltime-details/fulltime-details.component';
import { InternComponent } from './intern/intern.component';
import { InternsDetailsComponent } from './interns-details/interns-details.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MycropsComponent } from './mycrops/mycrops.component';
import { MyfarmsComponent } from './myfarms/myfarms.component';
import { QueriesComponent } from './queries/queries.component';
import { SellerformComponent } from './sellerform/sellerform.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'farmer', component: FarmerformComponent },
  { path: 'customer', component: SellerformComponent },
  { path: 'register', component: ApplynowComponent },
  { path: 'intern', component: InternComponent },
  { path: 'create', component: AdminloginComponent, canActivate: [AuthGuard] },
  { path: 'adduser', component: UserpanelComponent },
  { path: 'verifyotp', component: VerifyotpComponent },
  { path: 'create-farmer', component: FarmerComponent },
  { path: 'farms', component: FarmsComponent },
  { path: 'add-farm', component: AddFarmComponent },
  { path: 'crops', component: CropsComponent },
  { path: 'add-crop', component: AddCropComponent },
  { path: 'myfarms', component: MyfarmsComponent },
  { path: 'mycrops', component: MycropsComponent },
  {
    path: 'users',
    component: CreateusersComponent,
    canActivate: [AuthGuard],
  },
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
