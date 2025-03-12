import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    return this.http.post<any>("http://localhost:5001/api/Account/login",{username:username,password:password});
  }
}
