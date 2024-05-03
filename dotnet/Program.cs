using dotnet.Authorization;
using Microsoft.AspNetCore.Authorization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddAuthentication("MyCookieAuth").AddCookie("MyCookieAuth", options =>
{
	options.Cookie.Name = "MyCookieAuth";
	options.ExpireTimeSpan = TimeSpan.FromSeconds(200);
});

builder.Services.AddAuthorization(options =>
{
	options.AddPolicy("AdminOnly", policy => policy.RequireClaim("Admin"));
	options.AddPolicy("MustBelongToHRDepartment", policy => policy.RequireClaim("Department", "HR"));
	options.AddPolicy("HRManagerOnly", policy => policy
	.RequireClaim("Department", "HR")
	.RequireClaim("Manager")
	.Requirements.Add(new HRManageProbationRequirement(3)));
});

builder.Services.AddSingleton<IAuthorizationHandler, HRManageProbationRequirementHandler>();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
	app.UseExceptionHandler("/Error");
	app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapRazorPages();

app.Run();
