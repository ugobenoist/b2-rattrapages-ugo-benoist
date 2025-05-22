<template>
  <div>
    <h1>Liste d'ingrédients</h1>

    <form @submit.prevent="add">
      <input v-model="name" placeholder="Nom" required />
      <input v-model.number="quantity" type="number" min="1" placeholder="Quantité" required />
      <button type="submit">Ajouter</button>
    </form>

    <ul>
      <li v-for="item in store.ingredients" :key="item.id">
        <label>
          <input type="checkbox" v-model="item.checked" @change="store.toggleCheck(item.id)" />
          <span :style="{ textDecoration: item.checked ? 'line-through' : 'none' }">
            {{ item.name }} ({{ item.quantity }})
          </span>
        </label>
        <button @click="store.removeIngredient(item.id)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { store } from '@/stores/ingredientStore';

const store = store();
const nom = ref('');
const quantite = ref(1);

function add() {
  if (nom.value && quantite.value > 0) {
    store.addIngredient(nom.value, nom.value)
    nom.value = ''
    quantite.value = 1
  }
}
</script>
