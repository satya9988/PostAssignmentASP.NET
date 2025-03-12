import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentServiceService } from 'src/app/services/department-service.service';
import { ClassModule } from 'src/app/models/classes/classes.module';

@Component({
  selector: 'classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {
  class: ClassModule[] = [];
  collegename: string | null = null; 
  departmentname: string | null = null; 
  

  constructor(
    private route: ActivatedRoute,
    private service: DepartmentServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.collegename = params.get('collegename');
      this.departmentname = params.get('departmentname');

      if (this.collegename && this.departmentname) {
        this.service.getClassesDetails(this.collegename,this.departmentname).subscribe(
          (data: ClassModule[]) => {
            this.class = data;
          },
          error => {
            console.error('Error fetching class details:', error);
          }
        );
      }
    });
  }
}
