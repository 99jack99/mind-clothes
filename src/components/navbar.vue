<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";

let categories = ref<[]>();

let get_categories = () => {
  axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => {
      console.log(res);
      categories.value = res.data;
    })

    .catch((res) => {
      console.log(res);
    });
};

get_categories();
</script>

<template>
  <!--   class="py-4 pl-4" -->
  <v-app-bar flat border height="120">
    <img class="logo" src="@/assets/imgs/logo/logo.svg" />

    <div class="search-bar">
      <input class="search-bar__input" placeholder="Search" type="text" />
      <img class="search-bar__icon" src="@/assets/imgs/icons/Search.svg" />
    </div>

    <v-spacer />

    <v-menu>
      <template v-slot:activator="{ props }">
        <div class="category-btn" v-bind="props">
          <img src="@/assets/imgs/icons/Category.svg" />
          <div>Category</div>
        </div>
      </template>
      <v-list>
        <v-list-item v-for="category in categories" :key="category">
          <v-list-item-title>{{ category }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn icon>
      <router-link to="/favorites">
        <v-icon>
          <img src="@/assets/imgs/icons/Heart.svg" />
        </v-icon>
      </router-link>
    </v-btn>

    <v-btn icon>
      <router-link to="/cart">
        <v-icon>
          <img src="@/assets/imgs/icons/Bag.svg" />
        </v-icon>
      </router-link>
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.search-bar {
  margin-left: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  &__input {
    width: 200px;
    background-color: $shade-lgt;
    border-radius: 20px;
    padding: 10px;
    border: 0.5px solid black;
  }

  &__icon {
    position: relative;
    right: 40px;
  }
}

.category-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-right: 20px;
  padding: 10px 20px;
  border-radius: 10px;

  &:hover {
    background-color: $shade-lgt;
    cursor: pointer;
  }
}
</style>
