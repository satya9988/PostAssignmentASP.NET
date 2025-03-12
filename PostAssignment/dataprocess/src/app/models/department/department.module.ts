export class DepartmentModule {
  public departmentid?: number;
  public departmentname: string ;
  public hod: string;

  constructor(departmentid?: number, departmentname: string = "", hod: string = "") {
    this.departmentid = departmentid;
    this.departmentname = departmentname;
    this.hod = hod;
  }
}
