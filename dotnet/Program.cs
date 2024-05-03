var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddAuthentication("MyCookieAuth").AddCookie("MyCookieAuth", options =>
{
	options.Cookie.Name = "MyCookieAuth";
});

builder.Services.AddAuthorization(options =>
{
	options.AddPolicy("AdminOnly", policy => policy.RequireClaim("Admin"));
	options.AddPolicy("MustBelongToHRDepartment", policy => policy.RequireClaim("Department", "HR"));
	options.AddPolicy("HRManagerOnly", policy => policy.RequireClaim("Department", "HR").RequireClaim("Manager"));
});

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
