export class ClassModule {
  classid:number=0;
  classname:string='';
  staffname:string='';
  classcapacity:number=0;
  departmentid:number=0;
 
  constructor(classid:number,classname:string,staffname:string,classcapacity:number,departmentid:number){
    this.classid=classid;
    this.classname=classname;
    this.staffname=staffname;
    this.classcapacity=classcapacity;
    this.departmentid=departmentid;
  }
}