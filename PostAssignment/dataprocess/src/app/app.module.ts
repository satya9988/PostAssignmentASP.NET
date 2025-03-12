import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { CollegeListComponent } from './components/college-list/college-list.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AuthUserGuard } from './guard/auth-user.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthIncepterServiceService } from './services/auth-incepter-service.service';

const routes: Routes = [
  {
    path: 'home',
    canActivate:[AuthUserGuard],
    component: FileUploadComponent
  },
  {
    path: 'college-list',
    component: CollegeListComponent
  },
  {
    path: 'department-list/:collegename', 
    component: DepartmentListComponent
  },
  {
    path: 'class-list/:collegename/:departmentname', 
    component: ClassesListComponent
  },
  {
    path: 'student-list/:collegename/:departmentname/:classname', 
    component: StudentListComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    CollegeListComponent,
    DepartmentListComponent,
    ClassesListComponent,
    HeaderComponent,
    BodyComponent,
    StudentListComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthIncepterServiceService,
      multi:true
    }
  ],
  bootstrap: [AppComponent] 
})
export class AppModule {}
