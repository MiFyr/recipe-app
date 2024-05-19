export function handleFormChange(formData, setFormData) {
  return (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (fieldName.startsWith("ingredient_")) {
      const index = parseInt(fieldName.split("_")[1], 10);
      const newIngredients = [...formData.ingredients];
      newIngredients[index] = fieldValue;
      setFormData({ ...formData, ingredients: newIngredients });
    } else {
      setFormData({ ...formData, [fieldName]: fieldValue });
    }
  };
}
