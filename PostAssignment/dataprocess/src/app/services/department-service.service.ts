import { Injectable } from '@angular/core';
import { CollegeModule } from '../models/college/college.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DepartmentModule } from '../models/department/department.module';
import { ClassModule } from '../models/classes/classes.module';
import { StudentModule } from '../models/student/student.module';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {
  baseUrl = 'http://localhost:5001/api/Home'; 

  constructor(private http: HttpClient) {}

  getDepartmentDetails(collegename: string): Observable<DepartmentModule[]> {
  
    const url = `${this.baseUrl}/GetDepartment/${collegename}`;
    return this.http.get<DepartmentModule[]>(url);
  }

  getClassesDetails(collegename: string,departmentname: string): Observable<ClassModule[]> {
  
    const url = `${this.baseUrl}/GetClasses/${collegename}/${departmentname}`;
    return this.http.get<ClassModule[]>(url);
  }

  getStudentDetails(collegename: string,departmentname: string,studentname: string): Observable<StudentModule[]> {
  
    const url = `${this.baseUrl}/GetStudent/${collegename}/${departmentname}/${studentname}`;
    return this.http.get<StudentModule[]>(url);
  }
}

