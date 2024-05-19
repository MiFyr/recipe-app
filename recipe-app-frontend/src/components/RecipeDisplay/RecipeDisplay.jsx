"use client";

import styles from "./RecipeDisplay.module.css";
import { useEffect, useState } from "react";
import { deleteRecipe, getRecipeById } from "@/utils/api";
import { checkIfLoggedIn } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function RecipeDisplay({ recipeData }) {
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
  const router = useRouter();
  const deleteThis = async () => {
    await deleteRecipe(recipeParams.id);
    router.push("/recipes");
  };

  return (
    <>
      <div className={styles.buttonDiv}>
        <button type="button" className={styles.deleteBtn} onClick={deleteThis}>
          Ta bort receptet
        </button>
        <button
          type="button"
          className={styles.editBtn}
          onClick={() => router.push(`/recipes/${recipeParams.id}/update`)}
        >
          Ändra receptet
        </button>
      </div>
    </>
  );
}
