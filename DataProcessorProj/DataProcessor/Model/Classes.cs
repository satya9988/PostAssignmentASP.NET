using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace DataProcessor.Model
{
    [Table("classes")]
    public class Classes
    {
        [Key]
        [Column("classid")]
        public int classid { get; set; }
       
        [Column("classname")]
        public string classname { get; set; }
       
        [Column("staffname")]
        public string staffname { get; set; }
       
        [Column("classcapacity")]
        public int classcapacity { get; set; }
       
        [Column("departmentid")]       
        public int departmentid { get; set; }

        [JsonProperty("student")]
        public List<Student> Studentlist { get; set; }
    }
}
