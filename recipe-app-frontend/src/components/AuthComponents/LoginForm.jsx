"use client";

import "@/styles/forms.css";
import { useState } from "react";
import { handleFormChange } from "@/utils/forms";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <form
      onChange={handleFormChange(formData, setFormData)}
      onSubmit={handleFormSubmit}
    >
      <h2>Login</h2>

      <p className="error">{errorMessage}</p>

      <input
        type="text"
        placeholder="Email"
        defaultValue={formData.email}
        name="email"
      />

      <input
        type="password"
        placeholder="Lösenord"
        defaultValue={formData.password}
        name="password"
      />

      <button type="submit">Logga in</button>
    </form>
  );
}
