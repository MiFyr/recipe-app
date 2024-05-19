using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using RecipeAPI.Data;
using RecipeAPI.Models;
using Swashbuckle.AspNetCore.Filters;

namespace RecipeAPI.Config
{
    public class RecipeAPIApp
    {
        private readonly WebApplicationBuilder builder;
        private WebApplication app;

        public RecipeAPIApp(string[] args)
        {
            builder = WebApplication.CreateBuilder(args);

            Setup();
        }

        private void Setup()
        {
            // Add services to the container.
            builder.Services.AddControllers().AddNewtonsoftJson();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(options =>
            {
                options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey
                });

                options.OperationFilter<SecurityRequirementsOperationFilter>();
            });

            //Configure database connection
            ConfigureDb();

            //Configure authorization
            AddAuth();

            app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors(builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllers();

            app.MapIdentityApi<CustomUser>();

        }

        private void ConfigureDb()
        {
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

            builder.Services.AddDbContext<RecipeAPIDbContext>(options => options.UseSqlServer(connectionString));
        }

        private void AddAuth()
        {
            builder.Services.AddAuthorization();

            builder.Services.AddIdentityApiEndpoints<CustomUser>(options =>
            {
                if (builder.Environment.IsDevelopment())
                {
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequireDigit = false;
                    options.Password.RequireLowercase = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequiredLength = 4;
                }
            }).AddEntityFrameworkStores<RecipeAPIDbContext>();
        }

        public void Run()
        {
            app.Run();
        }
    }
}
