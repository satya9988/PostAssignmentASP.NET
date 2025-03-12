import { Component, OnInit } from '@angular/core';
import { CollegeModule } from 'src/app/models/college/college.module';
import { CollegeServiceService } from 'src/app/services/college-service.service';

@Component({
  selector: 'college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {
  college: CollegeModule[] = [];

  constructor(private service: CollegeServiceService) {}

  ngOnInit(): void {
    this.service.getCollegeDetails().subscribe((data: CollegeModule[]) => {
      this.college = data;
    }, error => {
      console.error('Error fetching college details:', error);
    });
  }
}
