using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataProcessor.Model
{
    [Table("students")]
    public class Student
    {
        [Key]
        [Column("studentid")]
        public int studentid { get; set; }

        [Column("studentname")]
        public string studentname { get; set; }

        [Column("studentdob")]
        public DateOnly studentdateOfBirth { get; set; }

        [Column("classid")] 
        public int classid { get; set; }

        [ForeignKey("classid")]
        public Classes Class { get; set; } 
    }
}
