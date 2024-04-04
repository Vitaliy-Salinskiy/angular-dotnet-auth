using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [ApiController]
    [Route("api/webhook/auth")]
    public class AuthWebbook : ControllerBase
    {

        [HttpPost("")]
        public IActionResult GetUserFromWebhook([FromBody] object data)
        {
            var authData = data;
            Console.WriteLine("===================================");
            Console.Write(authData);
            Console.WriteLine("===================================");
            return Ok("User from webhook");
        }

        [HttpGet("")]
        public IActionResult Asdsda()
        {
            Console.WriteLine("sadaadsda");
            return Ok("User from webhook");
        }

    }
}