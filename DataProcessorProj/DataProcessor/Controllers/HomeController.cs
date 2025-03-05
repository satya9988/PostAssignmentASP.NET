using DataProcessor.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DataProcessor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IDataDAL dal;

        public HomeController(IDataDAL dal)
        {
            this.dal = dal;
        }

        [HttpPost("upload-json")]
        public async Task<IActionResult> UploadJson(IFormFile file)
        {
            if (file == null || file.Length == 0) return BadRequest("File is empty.");

            using var reader = new StreamReader(file.OpenReadStream());
            var jsonContent = await reader.ReadToEndAsync();

            // Deserialize JSON content
            var college = JsonConvert.DeserializeObject<College>(jsonContent);

            // Save to database
            dal.addcollege(college,jsonContent);

            return Ok("Data successfully uploaded and stored in the database.");
        }

        [HttpGet]
        [Route("GetAllCollege")]
        public IActionResult GetAllCollege()
        {
            

            try
            {
                return Ok(dal.GetCollege());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet]
        [Route("GetDepartment/{collegename}")]

        public IActionResult GetAllDepartments(string collegename)
        {
            try
            {
                return Ok(dal.GetDepartment(collegename));
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpGet]
        [Route("GetClasses/{collegename}/{departmentname}")]

        public IActionResult GetAllClasses(string collegename, string departmentname)
        {
            try
            {
                return Ok(dal.GetClasses(collegename,departmentname));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("GetStudent/{collegename}/{departmentname}/{classname}")]

        public IActionResult GetStudent(string collegename, string departmentname, string classname)
        {
            try
            {
                return Ok(dal.GetStudent(collegename, departmentname, classname));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }

}
