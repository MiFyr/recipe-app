"use client";

import "@/styles/lists.css";
import { getUserRecipes } from "@/utils/api";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyRecipesList() {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    const recipes = await getUserRecipes();
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
              <h3>{recipe.title}</h3>
            </Link>
          </li>
        ))}
      </ul>

      <Link href={"/recipes/create"} className="newRecipeLink">
        Skapa nytt recept
      </Link>
    </>
  );
}
