"use client";

import { getAllRecipes } from "@/utils/api";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function () {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    const recipes = await getAllRecipes();
    setRecipes(recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link href={`/recipes/${recipe.id}`}>
            <h2>{recipe.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
