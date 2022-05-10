import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'Rentals/getall';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getById(id:number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'Rentals/getbyid?id='+id;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalsByCustomerId(customerId:number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'Rentals/getrentalsbycustomerid?customerid='+customerId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalsByCarId(carId:number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'Rentals/getrentalsbycarid?carid='+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalDetails(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'Rentals/getrentaldetails';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  } 

  add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'Rentals/add',rental);
  }

  update(rental: Rental): Observable<ListResponseModel<Rental>> {
    return this.httpClient.post<ListResponseModel<Rental>>(
      this.apiUrl + 'Rentals/update',rental
    );
  }

  delete(rental: Rental): Observable<SingleResponseModel<Rental>> {
    return this.httpClient.post<SingleResponseModel<Rental>>(
      this.apiUrl + 'Rentals/delete',rental);
  }

  isCarAvailable(rental:Rental): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'Rentals/iscaravailable';
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }

  endRental(rental:Rental): Observable<SingleResponseModel<Rental>> {
    let newApiUrl = this.apiUrl + "Rentals/endrental";
    return this.httpClient.post<SingleResponseModel<Rental>>(newApiUrl, rental);
  }

}