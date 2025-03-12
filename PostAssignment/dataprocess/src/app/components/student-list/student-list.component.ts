import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentModule } from 'src/app/models/student/student.module';
import { DepartmentServiceService } from 'src/app/services/department-service.service';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

 student: StudentModule[] = [];
 collegename: string | null = null; 
 departmentname: string | null = null; 
 classname:string|null=null;
  
    constructor(
      private route: ActivatedRoute,
      private service: DepartmentServiceService
    ) {}
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.collegename = params.get('collegename');
        this.departmentname = params.get('departmentname');
        this.classname=params.get('classname');
  
        if (this.collegename && this.departmentname && this.classname) {
          this.service.getStudentDetails(this.collegename, this.departmentname,this.classname).subscribe(
            (data: StudentModule[]) => {
              this.student = data;
            },
            error => {
              console.error('Error fetching class details:', error);
            }
          );
        }
      });
    }
  }
  

