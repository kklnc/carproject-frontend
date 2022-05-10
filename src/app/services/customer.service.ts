import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "Customers/GetAll";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  getCustomerDetails(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "Customers/GetCustomerDetails"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  getCustomerByUserId(userId: number): Observable<SingleResponseModel<Customer>> {
    let newPath = this.apiUrl + "Customers/GetByUserId?userId=" + userId
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }

  getById(id: number): Observable<SingleResponseModel<Customer>> {
    let newPath = this.apiUrl + 'Customers/GetById?id=' + id;
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }
}
