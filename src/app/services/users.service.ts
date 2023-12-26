import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, IPassenger, ResponseModel } from '../models/station';
import { environment } from 'src/environments/environment';
import { CONSTANT } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiEndPoint:string='';
  constructor(private http:HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint;
   }

  createPassenger(obj:IPassenger):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.apiEndPoint+CONSTANT.ENDPOINTS.ADD_UPDATE_PASSENGER,obj)
  }

  isUserLoggedin(loginObj:ILogin):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.apiEndPoint+CONSTANT.ENDPOINTS.LOGIN,loginObj)
  }
}
