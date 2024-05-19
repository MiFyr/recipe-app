import RecipesList from "@/components/RecipesList/RecipesList";
import Link from "next/link";

export default function AllRecipesPage() {
  return (
    <>
      <h2>Alla recept</h2>

      <RecipesList />

      <Link href={"/recipes/create"}>Skapa nytt recept</Link>
    </>
  );
}
