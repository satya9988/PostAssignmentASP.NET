export class CollegeModule {
  public collegeid?: number;
  public collegename: string;
  public collegeaddress: string;

  constructor(collegeid?: number, collegename: string = "", collegeaddress: string = "") {
    this.collegeid = collegeid;
    this.collegename = collegename;
    this.collegeaddress = collegeaddress;
  }
}
