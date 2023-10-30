<script lang="ts" setup>
import { ref } from "vue";
import product from "@/services/product.service";

let categories = ref<[]>();

let get_categories = async () => {
  await product
    .get_categories()
    .then((res) => (categories.value = res.data))
    .catch((res) => console.log("Error", res));
};

get_categories();
</script>

<template>
  <!--   class="py-4 pl-4" -->
  <v-app-bar flat border height="120">
    <router-link to="/"
      ><img class="logo" src="@/assets/imgs/logo/logo.svg"
    /></router-link>

    <v-spacer />

    <div class="search-bar">
      <input class="search-bar__input" placeholder="Search" type="text" />
      <img class="search-bar__icon" src="@/assets/imgs/icons/Search.svg" />
    </div>

    <router-link to="/fav"
      ><v-btn icon>
        <v-icon>
          <img src="@/assets/imgs/icons/Heart.svg" />
        </v-icon> </v-btn
    ></router-link>

    <router-link to="/cart"
      ><v-btn icon>
        <v-icon>
          <img src="@/assets/imgs/icons/Bag.svg" />
        </v-icon> </v-btn
    ></router-link>
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
</style>
