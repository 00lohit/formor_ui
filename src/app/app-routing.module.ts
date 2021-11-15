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
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { AdmindashComponent } from './dashboard/admindash/admindash.component';
import { ApprovalsComponent } from './dashboard/approvals/approvals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { PrivacyComponent } from './privacy/privacy.component';
import { QueriesComponent } from './queries/queries.component';
import { RedirectComponent } from './redirect/redirect.component';
import { RegisterComponent } from './register/register.component';
import { SelectLoginComponent } from './select-login/select-login.component';
import { SellerformComponent } from './sellerform/sellerform.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UplaodsComponent } from './uplaods/uplaods.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { AddProductComponent } from './vendors/add-product/add-product.component';
import { DashdoardComponent } from './vendors/dashdoard/dashdoard.component';
import { OrderInputsComponent } from './vendors/order-inputs/order-inputs.component';
import { ProductsComponent } from './vendors/products/products.component';
import { VendorNavComponent } from './vendors/vendor-nav/vendor-nav.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'app', component: RedirectComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'selectLogin', component: SelectLoginComponent },
  { path: 'dashboardLogin', component: DashboardLoginComponent },
  {
    path: 'admindashboard',
    component: DashboardComponent,
    children: [
      { path: 'dash', component: AdmindashComponent },
      { path: 'approvals', component: ApprovalsComponent },
    ],
  },
  { path: 'farmer', component: FarmerformComponent },
  { path: 'customer', component: SellerformComponent },
  { path: 'apply', component: ApplynowComponent },
  { path: 'intern', component: InternComponent },
  { path: 'create', component: AdminloginComponent, canActivate: [AuthGuard] },
  { path: 'adduser', component: UserpanelComponent },
  { path: 'verifyotp', component: VerifyotpComponent },
  { path: 'create-farmer', component: UpdateuserComponent },
  { path: 'farms', component: FarmsComponent },
  { path: 'add-farm', component: AddFarmComponent },
  { path: 'crops', component: CropsComponent },
  { path: 'add-crop', component: AddCropComponent },
  { path: 'myfarms', component: MyfarmsComponent },
  { path: 'mycrops', component: MycropsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'vendor', component: VendorsComponent },
  { path: 'vendor-nav', component: VendorNavComponent },
  { path: 'order-inputs', component: OrderInputsComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'dashboard', component: DashdoardComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'upload', component: UplaodsComponent },
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

  { path: 'privacypolicy', component: PrivacyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
