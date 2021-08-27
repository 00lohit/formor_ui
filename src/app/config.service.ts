import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './app.data';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  dataUrl = environment.apiURL + 'v1/data'; // Main form
  contactUrl = environment.apiURL + 'v1/contact'; // contact form in home page
  farmerUrl = environment.apiURL + 'v1/farmer'; // framer form
  businessUrl = environment.apiURL + 'v1/business'; // business form
  internUrl = environment.apiURL + 'v1/intern'; // intern form
  fullTimeUrl = environment.apiURL + 'v1/fulltime'; // full time form
  fpoLoginUrl = environment.apiURL + 'v1/fpo/login'; // fpo user login
  loginUrl = environment.apiURL + 'v1/user/login';
  verifyOtpUrl = environment.apiURL + 'v1/user/verify-mobile-number';
  addUserUrl = environment.apiURL + 'v1/user/add-user';
  getUsersUrl = environment.apiURL + 'v1/user/get-users';
  updateUserUrl = environment.apiURL + 'v1/user/update-user';
  getFarmersUrl = environment.apiURL + 'v1/user/get-farmers';
  farmersUrl = environment.apiURL + 'v1/farmers';
  farmsUrl = environment.apiURL + 'v1/farms';
  getFarmsUrl = environment.apiURL + 'v1/farms/getfarms';
  cropsUrl = environment.apiURL + 'v1/crops';
  getCropsUrl = environment.apiURL + 'v1/crops/getcrops';
  getVendorsUrl = environment.apiURL + 'v1/user/get-vendors';
  productUrl = environment.apiURL + 'v1/stocks';
  getStoreProductsUrl = environment.apiURL + 'v1/stocks/store-products';
  uploadUrl = environment.apiURL + 'v1/upload';

  constructor(private http: HttpClient) {}

  post(data: Data): any {
    return this.http.post(this.dataUrl, data);
  }

  get(): any {
    return this.http.get(this.dataUrl);
  }

  postContact(data: any): any {
    return this.http.post(this.contactUrl, data);
  }

  getContact(): any {
    return this.http.get(this.contactUrl);
  }

  postFarmer(data: any): any {
    return this.http.post(this.farmerUrl, data);
  }

  getFarmer(): any {
    return this.http.get(this.farmerUrl);
  }

  postBusiness(data: any): any {
    return this.http.post(this.businessUrl, data);
  }

  getBusiness(): any {
    return this.http.get(this.businessUrl);
  }

  postfullTime(data: any): any {
    return this.http.post(this.fullTimeUrl, data);
  }

  getfullTime(): any {
    return this.http.get(this.fullTimeUrl);
  }

  postIntern(data: any): any {
    return this.http.post(this.internUrl, data);
  }

  getIntern(): any {
    return this.http.get(this.internUrl);
  }

  fpoLogin(data: any): any {
    return this.http.post(this.fpoLoginUrl, data);
  }

  login(data: any): any {
    return this.http.post(this.loginUrl, data);
  }

  verify(data: any): any {
    return this.http.post(this.verifyOtpUrl, data);
  }
  addUser(data: any): any {
    return this.http.post(this.addUserUrl, data);
  }
  getUsers(): any {
    return this.http.get(this.getUsersUrl);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getFarmers(): any {
    return this.http.get(this.getFarmersUrl);
  }
  getVendors(): any {
    return this.http.get(this.getVendorsUrl);
  }
  getSearchedFarmer(num: any): any {
    return this.http.post(this.getFarmersUrl, num);
  }

  createFarmer(data: any): any {
    return this.http.post(this.farmersUrl, data);
  }

  updateUser(data: any): any {
    return this.http.post(this.updateUserUrl, data);
  }

  getFarms(id: any): any {
    return this.http.post(this.getFarmsUrl, id);
  }

  createFarms(data: any): any {
    return this.http.post(this.farmsUrl, data);
  }

  getCrops(id: any): any {
    return this.http.post(this.getCropsUrl, id);
  }

  createCrops(data: any): any {
    return this.http.post(this.cropsUrl, data);
  }

  getAllProducts(): any {
    return this.http.get(this.productUrl);
  }
  getStoreProducts(): any {
    return this.http.get(this.getStoreProductsUrl);
  }
  createProduct(data: any): any {
    return this.http.post(this.productUrl, data);
  }

  upload(data: any) {
    return this.http.post(this.uploadUrl, data);
  }
}
