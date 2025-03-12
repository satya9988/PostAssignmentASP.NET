using System.Security.Claims;
using System.Text.Json.Serialization;
using System.Text.Json;
using Newtonsoft.Json;

namespace DataProcessor.Model
{
    public class DataDAL : IDataDAL
    {
        private readonly DataDBContext ctx;

        public DataDAL(DataDBContext ctx)
        {
            this.ctx = ctx;
        }

        public void addcollege(College college, string jsonContent)
        {

            var collegeEntity = new College
            {
                collegeid = college.collegeid,
                collegename = college.collegename,
                collegeaddress = college.collegeaddress,
                Department = college.Department.Select(department => new Department
                {
                    
                    departmentname = department.departmentname,
                    hod = department.hod,
                    
                    Classlist = department.Classlist.Select(cls => new Classes
                    {
                       
                        classname =cls.classname,
                        staffname=cls.staffname,
                        classcapacity=cls.classcapacity,

                       Studentlist =cls.Studentlist.Select(std=>new Student
                       {
                          
                           studentname=std.studentname,
                           studentdateOfBirth=std.studentdateOfBirth
                       }).ToList()
                      

                    }).ToList()
                
                }).ToList()
            };

            ctx.College.Add(collegeEntity);
            ctx.SaveChanges();

        }   
      public void adddepartment(Department department)
        {
           
            var departmentEntity = new Department
            {
                departmentname = department.departmentname,
                hod = department.hod
            };

            // Add Department to the database
            ctx.Department.Add(departmentEntity);
            ctx.SaveChanges();
        }

        public void addclasses(Classes cls)
        {

            var classesEntity = new Classes
            {
                classname = cls.classname,
                staffname = cls.staffname,
                classcapacity = cls.classcapacity

            };

            // Add Department to the database
            ctx.Classes.Add(classesEntity);
            ctx.SaveChanges();
        }

        public void addstudent(Student std)
        {

            var studentEntity = new Student
            {
                studentname = std.studentname,
                studentdateOfBirth = std.studentdateOfBirth

            };

            // Add Department to the database
            ctx.Students.Add(studentEntity);
            ctx.SaveChanges();
        }

        public List<College> GetCollege()
        {
            return ctx.College.ToList();
        }

        public List<Department> GetDepartment(string collegename)
        {
            
            College record = ctx.College.FirstOrDefault(k1 => k1.collegename == collegename);

           
            if (record == null)
            {
                return new List<Department>(); 
            }

            List<Department> dept = ctx.Department.Where(k => k.collegeid == record.collegeid).ToList();

            return dept;
        }


        public List<Classes> GetClasses(string collegename, string departmentname)
        {
           
            College collegeRecord = ctx.College.FirstOrDefault(c => c.collegename == collegename);

            if (collegeRecord == null)
            {
               
                return new List<Classes>();
            }

            
            Department departmentRecord = ctx.Department.FirstOrDefault(d =>
                d.departmentname == departmentname && d.collegeid == collegeRecord.collegeid);

            if (departmentRecord == null)
            {
               
                return new List<Classes>();
            }

          
            List<Classes> classes = ctx.Classes.Where(cl => cl.departmentid == departmentRecord.departmentid).ToList();

            return classes;
        }




        public List<Student> GetStudent(string collegename, string departmentname, string classname)
        {
            // Fetch the college ID based on the college name
            int? collegeId = ctx.College
                .Where(c => c.collegename == collegename)
                .Select(c => c.collegeid)
                .FirstOrDefault();

            if (collegeId == null)
            {
                return new List<Student>();
            }

            // Fetch the department ID based on the college ID and department name
            int? departmentId = ctx.Department
                .Where(d => d.collegeid == collegeId && d.departmentname == departmentname)
                .Select(d => d.departmentid)
                .FirstOrDefault();

            if (departmentId == null)
            {
                return new List<Student>();
            }

            // Fetch the class ID based on the department ID and class name
            int? classId = ctx.Classes
                .Where(cl => cl.departmentid == departmentId && cl.classname == classname)
                .Select(cl => cl.classid)
                .FirstOrDefault();

            if (classId == null)
            {
                return new List<Student>();
            }

            // Fetch the students based on the class ID
            List<Student> students = ctx.Students
                .Where(s => s.classid == classId)
                .ToList();

            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
                WriteIndented = true
            };

            string jsonString = System.Text.Json.JsonSerializer.Serialize(students, options);
            Console.WriteLine(jsonString);

            return students;
        }



    }
}
