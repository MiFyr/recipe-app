"use client";

import { useEffect, useState } from "react";
import { deleteRecipe, getRecipeById, getUserInfo } from "@/utils/api";
import { useRouter } from "next/navigation";
import { checkIfLoggedIn } from "@/utils/auth";

export default function RecipeDisplay({ recipeData }) {
  const router = useRouter();
  const isLoggedIn = checkIfLoggedIn();
  const [displayedRecipe, setDisplayedRecipe] = useState({
    title: "",
    ingredients: [""],
    instruction: "",
  });

  const fetchRecipe = async () => {
    const recipe = await getRecipeById(recipeData.id);
    setDisplayedRecipe(recipe);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <>
      <h2>{displayedRecipe.title}</h2>
      <h3>Ingredienser</h3>
      <ul>
        {displayedRecipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instruktioner</h3>
      <p>{displayedRecipe.instruction}</p>
      {isLoggedIn ? <LoggedInButtons recipeParams={recipeData} /> : null}
    </>
  );
}

function LoggedInButtons({ recipeParams }) {
  const deleteThis = async () => {
    await deleteRecipe(recipeParams.id);
    router.push("/recipes");
  };

  return (
    <>
      <div>
        <button type="button" onClick={deleteThis}>
          Ta bort receptet
        </button>
        <button
          type="button"
          onClick={() => router.push(`/recipes/${recipeParams.id}/update`)}
        >
          Ändra receptet
        </button>
      </div>
    </>
  );
}
