
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace dotnet.Pages.Account
{
	public class Logout : PageModel
	{
		private readonly ILogger<Logout> _logger;

		public Logout(ILogger<Logout> logger)
		{
			_logger = logger;
		}

		public async Task<IActionResult> OnPostAsync()
		{
			await HttpContext.SignOutAsync("MyCookieAuth");
			return RedirectToPage("/Index");
		}
	}
}