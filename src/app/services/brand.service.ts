import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }


  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "Brands/GetAll";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  getBrandById(brandId: number): Observable<SingleResponseModel<Brand>> {
    let newPath = this.apiUrl + 'Brands/GetById?id=' + brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }

  add(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Brands/Add", brand)
  }

  update(brand: Brand): Observable<ListResponseModel<Brand>> {
    return this.httpClient.post<ListResponseModel<Brand>>(this.apiUrl + "Brands/Update", brand)
  }

  delete(brand: Brand): Observable<SingleResponseModel<Brand>> {
    return this.httpClient.post<SingleResponseModel<Brand>>(this.apiUrl + "Brands/Delete", brand)
  }

}
