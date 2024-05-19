using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecipeAPI.Models
{
    public class Recipe
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; } = "";

        [Required]
        public IList<string> Ingredients { get; set; } = new List<string>();

        [Required]
        public string Instruction { get; set; } = "";

        [ForeignKey("User"), ValidateNever]
        public string? UserId { get; set; }

        [ValidateNever]
        public CustomUser? User { get; set; }
    }
}
