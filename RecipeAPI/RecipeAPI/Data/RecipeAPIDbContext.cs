using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RecipeAPI.Models;

namespace RecipeAPI.Data
{
    public class RecipeAPIDbContext(DbContextOptions options) : IdentityDbContext<CustomUser>(options)
    {
        public DbSet<Recipe> Recipes { get; set; }
    }
}
