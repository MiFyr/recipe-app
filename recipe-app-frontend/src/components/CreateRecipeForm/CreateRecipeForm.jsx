"use client";
import "@/styles/forms.css";
import { createRecipe } from "@/utils/api";
import { handleFormChange } from "@/utils/forms";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: [""],
    instruction: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await createRecipe(
        formData.title,
        formData.ingredients,
        formData.instruction
      );
      router.push("/recipes");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }

    console.log(formData);
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ""],
    });
  };

  return (
    <>
      <form
        onChange={handleFormChange(formData, setFormData)}
        onSubmit={handleFormSubmit}
      >
        <h2>Skapa nytt recept</h2>

        <p className="error">{errorMessage}</p>

        <label htmlFor="title">Receptnamn</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Receptnamn..."
          required
          defaultValue={formData.title}
        />

        <p>Ingredienser</p>
        {formData.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name={`ingredient_${index}`}
            placeholder="Ingrediens..."
            required
            defaultValue={ingredient}
          />
        ))}
        <button type="button" onClick={addIngredient}>
          Ny ingrediens
        </button>

        <label htmlFor="instruction">Instruktioner</label>
        <textarea
          id="instruction"
          name="instruction"
          placeholder="Gör så här..."
          required
          defaultValue={formData.instruction}
        />

        <button type="submit">Skapa receptet</button>
      </form>
    </>
  );
}
