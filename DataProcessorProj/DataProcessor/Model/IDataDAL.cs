namespace DataProcessor.Model
{
    public interface IDataDAL
    {

        void  addcollege(College college, string context);

        void  adddepartment(Department department);

        void addclasses(Classes classes);

        void addstudent(Student student);

        public List<College> GetCollege();

        public List<Department> GetDepartment(string collegename);

        public List<Classes> GetClasses(string collegename, string departmentname);


        public List<Student> GetStudent(string collegename, string departmentname, string classname);

    }
}
