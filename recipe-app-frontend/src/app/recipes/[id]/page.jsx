import RecipeDisplay from "@/components/RecipeDisplay/RecipeDisplay";

export default function RecipeDetailsPage({ params }) {
  return (
    <>
      <h1>Recept</h1>
      <RecipeDisplay recipeData={params} />
    </>
  );
}
