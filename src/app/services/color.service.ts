import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "Colors/GetAll";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  add(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Colors/Add", color);
  }

  getColorById(colorId: number): Observable<SingleResponseModel<Color>> {
    let newPath = this.apiUrl + "Colors/GetById?id=" + colorId;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }
  update(color: Color): Observable<ListResponseModel<Color>> {
    return this.httpClient.post<ListResponseModel<Color>>(this.apiUrl + "Colors/Update", color)
  }

  delete(color: Color): Observable<SingleResponseModel<Color>> {
    return this.httpClient.post<SingleResponseModel<Color>>(this.apiUrl + "Colors/Delete", color)
  }
}
