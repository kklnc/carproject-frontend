import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getCarDto(): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "Cars/GetCarDetailDtos";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "Cars/GetAllByBrandId?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "Cars/GetAllByColorId?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
}
