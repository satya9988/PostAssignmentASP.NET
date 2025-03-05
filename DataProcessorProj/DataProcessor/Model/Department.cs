using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace DataProcessor.Model
{



    [Table("department")]
    public class Department
    {
        [Key]
        public int departmentid { get; set; }

        public string departmentname { get; set; }

        public string hod {  get; set; }

        public int collegeid { get; set; }

        [JsonProperty("classes")]
        public  List<Classes> Classlist { get; set; }

     }
}
