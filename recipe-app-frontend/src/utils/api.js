import { getAccessToken } from "./auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const jsonHeaders = {
  "Content-Type": "application/json",
};

export async function login(email, password) {
  const response = await fetch(API_URL + "login", {
    method: "POST",
    headers: { ...jsonHeaders },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}

export async function getAllRecipes() {
  const response = await fetch(API_URL + "api/recipes");

  return response.json();
}

export async function getRecipeById(id) {
  const response = await fetch(API_URL + "api/recipes/" + id);

  if (!response.ok) {
    throw new Error(`Status: ${response.status}`);
  }

  const text = await response.text();
  if (!text) {
    throw new Error(`Empty response body`);
  }

  return JSON.parse(text);
}

export async function getUserRecipes() {
  const response = await fetch(API_URL + "api/recipes/myrecipes", {
    headers: {
      Authorization: "Bearer " + getAccessToken(),
    },
  });

  if (!response.ok) {
    throw new Error(`Status: ${response.status}`);
  }

  const text = await response.text();
  if (!text) {
    throw new Error(`Empty response body`);
  }

  return JSON.parse(text);
}

export async function createRecipe(title, ingredients, instruction) {
  const response = await fetch(API_URL + "api/recipes", {
    method: "POST",
    headers: { Authorization: "Bearer " + getAccessToken(), ...jsonHeaders },
    body: JSON.stringify({ title, ingredients, instruction }),
  });

  return response.json();
}

export async function updateRecipe(id, title, ingredients, instruction) {
  const url = API_URL + "/api/todos/" + id;

  const response = await fetch(API_URL + "api/recipes/" + id, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + getAccessToken(),
      ...jsonHeaders,
    },
    body: JSON.stringify(id, title, ingredients, instruction),
  });

  return response.json();
}

export async function deleteRecipe(id) {
  const response = await fetch(API_URL + "api/recipes/" + id, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + getAccessToken(),
    },
  });

  return response.ok;
}
