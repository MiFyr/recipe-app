import RecipeDisplay from "@/components/RecipeDisplay/RecipeDisplay";

export default function RecipeDetailsPage({ params }) {
  return (
    <>
      <RecipeDisplay recipeData={params} />
    </>
  );
}
