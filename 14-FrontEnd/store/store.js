import { defineStore } from 'pinia';


export const store = defineStore('ingredient', {
    state: () => ({
      ingredients: [],
    }),
    actions: {
      addIngredient(nom, quantite) {
        this.ingredients.push({
          id: Date.now(),
          nom,
          quantite,
          check: false,
        })
      },
      toggleCheck(id) {
        const ingredient = this.ingredients.find(item => item.id === id);
        if (ingredient) ingredient.check = !ingredient.check
      },
      removeIngredient(id) {
        this.ingredients = this.ingredients.filter(item => item.id !== id);
      },
    },
  })