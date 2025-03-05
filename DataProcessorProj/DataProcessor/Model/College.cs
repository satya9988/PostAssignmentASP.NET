using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataProcessor.Model
{
    [Table("college")]
    public class College
    {
        [Key]
        public int collegeid { get; set; }
        public string collegename { get; set; }
        public string collegeaddress { get; set; }
        public List<Department> Department { get; set; }
    }
}
