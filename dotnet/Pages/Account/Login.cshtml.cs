using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;


namespace dotnet.Pages.Account
{
    public class Login : PageModel
    {
        private readonly ILogger<Login> _logger;

        public Login(ILogger<Login> logger)
        {
            _logger = logger;
        }

        [BindProperty]
        public Credential Credential {get; set;} = new Credential();

        public void OnGet()
        {
        }

        public void onPost(){
        }
    }

    public class Credential {
        [Required]
        [Display(Name = "User Name")]
        public string UserName {get; set;} = string.Empty;
         
        [Required]
        [DataType(DataType.Password)]
        public string Password {get; set;} = string.Empty;
    }
}