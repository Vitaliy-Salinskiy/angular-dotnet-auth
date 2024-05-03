using Microsoft.AspNetCore.Authorization;

namespace dotnet.Authorization
{
	public class HRManageProbationRequirement : IAuthorizationRequirement
	{
		public HRManageProbationRequirement(int probationMonths)
		{
			ProbationMonths = probationMonths;
		}

		public int ProbationMonths { get; }
	}

	public class HRManageProbationRequirementHandler : AuthorizationHandler<HRManageProbationRequirement>
	{
		protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, HRManageProbationRequirement requirement)
		{
			if (!context.User.HasClaim(x => x.Type == "EmploymentDate")) return Task.CompletedTask;

			if (DateTime.TryParse(context.User.FindFirst(x => x.Type == "EmploymentDate")?.Value, out DateTime employmentDate))
			{
				var period = DateTime.Now - employmentDate;
				if (period.Days > 30 * requirement.ProbationMonths)
				{
					context.Succeed(requirement);
				}
			}

			return Task.CompletedTask;
		}
	}
}