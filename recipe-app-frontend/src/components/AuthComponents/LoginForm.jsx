"use client";

import "@/styles/forms.css";
import { useState } from "react";
import { handleFormChange } from "@/utils/forms";
import { setAuthorization } from "@/utils/auth";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(formData.email, formData.password);
      setAuthorization(response);
      location.href = "/";
    } catch (error) {
      setErrorMessage(error.message);
    }

    console.log(formData);
  };

  return (
    <form
      onChange={handleFormChange(formData, setFormData)}
      onSubmit={handleFormSubmit}
    >
      <h2>Logga in</h2>

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
