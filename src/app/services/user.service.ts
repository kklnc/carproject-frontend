import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + "Users/GetById?" + id;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }
  getByMail(email: String): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + 'Users/getbymail?email=' + email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }
}
