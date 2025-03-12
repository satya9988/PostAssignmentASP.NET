import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  selectedFile: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  // Method triggered when a file is selected
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Method to upload the selected file
  uploadFile() {
    if (!this.selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:5001/api/Home/upload-json', formData).subscribe(
      response => {
        alert('File uploaded successfully');
        this.router.navigate(['/college-list']); 
      },
      error => {
        console.error('File upload failed:', error);
        alert('File upload failed. Please try again.');
      }
    );
  }
}
