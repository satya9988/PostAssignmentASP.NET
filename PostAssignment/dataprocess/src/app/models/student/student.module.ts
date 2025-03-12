export class StudentModule {
  studentid:number=0;
  studentname:string='';
  studentdateOfBirth:string='';
  classid:number=0;
 
  constructor(studentid:number,studentname:string,studentdateOfBirth:string,classid:number){
    this.studentid=studentid;
    this.studentname=studentname;
    this.studentdateOfBirth=studentdateOfBirth;
    this.classid=classid;
  }
 }