import { Component, OnInit } from '@angular/core';
import { DepartmentModule } from 'src/app/models/department/department.module';
import { DepartmentServiceService } from 'src/app/services/department-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  department: DepartmentModule[] = [];
  collegename: string | null = null; 

  constructor(
    private service: DepartmentServiceService,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
     this.collegename = params.get('collegename'); 
      if (this.collegename) {
        this.service.getDepartmentDetails(this.collegename).subscribe(
          (data: DepartmentModule[]) => {
            this.department = data;
          },
          error => {
            console.error('Error fetching department details:', error);
          }
        );
      }
    });
  }
}
