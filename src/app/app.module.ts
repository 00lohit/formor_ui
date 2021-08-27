import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormDataComponent } from './form-data/form-data.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PeopleComponent } from './people/people.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { BuysellComponent } from './buysell/buysell.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FarmerformComponent } from './farmerform/farmerform.component';
import { SellerformComponent } from './sellerform/sellerform.component';
import { ApplynowComponent } from './applynow/applynow.component';
import { InternComponent } from './intern/intern.component';
import { LoaderComponent } from './loader/loader.component';
import { DetailsComponent } from './details/details.component';
import { QueriesComponent } from './queries/queries.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { InternsDetailsComponent } from './interns-details/interns-details.component';
import { FulltimeDetailsComponent } from './fulltime-details/fulltime-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { CreateusersComponent } from './createusers/createusers.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { FarmerComponent } from './farmer/farmer.component';
import { FarmsComponent } from './farms/farms.component';
import { AddFarmComponent } from './farms/add-farm/add-farm.component';
import { CropsComponent } from './crops/crops.component';
import { AddCropComponent } from './crops/add-crop/add-crop.component';
import { MyfarmsComponent } from './myfarms/myfarms.component';
import { MycropsComponent } from './mycrops/mycrops.component';
import { SearchpipePipe } from './searchpipe.pipe';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { FarmerInfoComponent } from './farmer-info/farmer-info.component';
import { RegisterComponent } from './register/register.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorNavComponent } from './vendors/vendor-nav/vendor-nav.component';
import { OrderInputsComponent } from './vendors/order-inputs/order-inputs.component';
import { ProductsComponent } from './vendors/products/products.component';
import { DashdoardComponent } from './vendors/dashdoard/dashdoard.component';
import { AddProductComponent } from './vendors/add-product/add-product.component';
import { UplaodsComponent } from './uplaods/uplaods.component';
import { PrivacyComponent } from './privacy/privacy.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormDataComponent,
    ComingsoonComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    PeopleComponent,
    CareersComponent,
    ContactComponent,
    BuysellComponent,
    LoginComponent,
    MainComponent,
    FarmerformComponent,
    SellerformComponent,
    ApplynowComponent,
    InternComponent,
    LoaderComponent,
    DetailsComponent,
    QueriesComponent,
    FarmerDetailsComponent,
    BusinessDetailsComponent,
    InternsDetailsComponent,
    FulltimeDetailsComponent,
    AdminloginComponent,
    UserpanelComponent,
    VerifyotpComponent,
    CreateusersComponent,
    FarmerComponent,
    FarmsComponent,
    AddFarmComponent,
    CropsComponent,
    AddCropComponent,
    MyfarmsComponent,
    MycropsComponent,
    SearchpipePipe,
    UpdateuserComponent,
    FarmerInfoComponent,
    RegisterComponent,
    VendorsComponent,
    VendorNavComponent,
    OrderInputsComponent,
    ProductsComponent,
    DashdoardComponent,
    AddProductComponent,
    UplaodsComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function createHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
