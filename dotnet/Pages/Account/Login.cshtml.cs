using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;


namespace dotnet.Pages.Account
{
	public class Login : PageModel
	{

		[BindProperty]
		public Credential Credential { get; set; } = new Credential();

		public void OnGet()
		{
		}

		public async Task<IActionResult> OnPostAsync()
		{
			if (!ModelState.IsValid) return Page();

			if (Credential.UserName == "qwerty" && Credential.Password == "qwerty")
			{
				var claims = new List<Claim> {
					new Claim(ClaimTypes.Name, "admin"),
					new Claim(ClaimTypes.Email, "admin@localhost"),
					new Claim("Department", "HR"),
					new Claim("Admin", "true"),
					new Claim("Manager", "true"),
					new Claim("EmploymentDate", "2024-02-01")
				};

				var identity = new ClaimsIdentity(claims, "MyCookieAuth");
				ClaimsPrincipal claimsPrincipal = new ClaimsPrincipal(identity);

				await HttpContext.SignInAsync("MyCookieAuth", claimsPrincipal);

				return RedirectToPage("/Index");
			};

			return Page();

		}
	}

	public class Credential
	{
		[Required]
		[Display(Name = "User Name")]
		public string UserName { get; set; } = string.Empty;

		[Required]
		[DataType(DataType.Password)]
		public string Password { get; set; } = string.Empty;
	}
}