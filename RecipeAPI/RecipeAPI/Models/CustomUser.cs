using Microsoft.AspNetCore.Identity;

namespace RecipeAPI.Models
{
    public class CustomUser : IdentityUser
    {
        public ICollection<Recipe> Recipes { get; set; } = new List<Recipe>();

        public IList<string> Pantry { get; set; } = new List<string>();
    }
}
