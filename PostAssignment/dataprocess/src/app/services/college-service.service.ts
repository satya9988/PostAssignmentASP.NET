import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollegeModule } from '../models/college/college.module';

@Injectable({
  providedIn: 'root'
})
export class CollegeServiceService {

  baseUrl="http://localhost:5001/api/Home/";
constructor(private http:HttpClient) {
 }
 getCollegeDetails():Observable<CollegeModule[]>{
  return this.http.get<CollegeModule[]>(this.baseUrl+'GetAllCollege');
 }

}
