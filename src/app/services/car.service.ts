// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ListResponseModel } from '../models/listResponseModel';
// import { Car } from '../models/car';
// @Injectable({
//   providedIn: 'root'
// })
// export class CarService {
//   apiUrl="https://localhost:44383/api/Cars/GetAll";
//   constructor(private httpClient:HttpClient) { }

//   getCars():Observable<ListResponseModel<Car>>{
//     return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
//   }


// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/GetCarDetailDtos"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/GetAllByBrandId?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/GetAllByColorId?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandIdAndColorId(brandId: number, colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/getcarsbybrandidandcolorid?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsById(carId: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getcardetailsbyid?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

   add(car:Car):Observable<ResponseModel>{
     return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
   }

   update(car:Car):Observable<ListResponseModel<Car>>{
     return this.httpClient.post<ListResponseModel<Car>>(this.apiUrl+"cars/update",car)
   }

   delete(car:Car):Observable<SingleResponseModel<Car>>{
     return this.httpClient.post<SingleResponseModel<Car>>(this.apiUrl+"cars/delete",car)
   }
}
