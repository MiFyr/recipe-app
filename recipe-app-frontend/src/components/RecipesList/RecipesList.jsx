"use client";

import "@/styles/lists.css";
import { getAllRecipes } from "@/utils/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import { checkIfLoggedIn } from "@/utils/auth";

export default function RecipesList() {
  const isLoggedIn = checkIfLoggedIn();
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    const recipes = await getAllRecipes();
    setRecipes(recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`}>
              <h2>{recipe.title}</h2>
            </Link>
          </li>
        ))}
      </ul>

      {isLoggedIn ? (
        <Link href={"/recipes/create"}>Skapa nytt recept</Link>
      ) : null}
    </>
  );
}
