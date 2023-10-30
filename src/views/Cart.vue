<script setup>
import axios from "axios";
import { ref } from "vue";

import { useCartStore } from "@/store/cartStore.ts";

let cartStore = useCartStore();

let data = ref();

let test = () => {
  axios
    .get("https://fakestoreapi.com/products?limit=5")
    .then((res) => (data.value = res.data))
    .catch((res) => console.log(res));
};

test();
</script>

<template>
  <v-container class="h-100">
    <v-table fixed-header class="text-body-1 mt-10" hover>
      <thead>
        <tr>
          <th class="text-left text-h5 bg-black">Producto</th>
          <th class="text-left text-h5 bg-black">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="cartStore.cart_items.length < 1">
          <td class="py-10 text-h5">Wait! Buy something!</td>
          <td></td>
        </tr>
        <tr v-for="item in cartStore.cart_items" :key="item.id" class="ha">
          <td class="font-weight-bold">{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td class="py-7 remove-btn">
            <v-btn><v-icon class="close-btn" icon="mdi-close"></v-icon></v-btn>
          </td>
        </tr>
        <tr v-if="cartStore.cart_items.length > 0">
          <td></td>
          <td class="font-weight-bold">{{ cartStore.total }}</td>
          <td><v-btn class="font-weight-bold">BUY</v-btn></td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<style lang="scss" scoped>
.remove-btn {
  visibility: hidden;
}

.ha:hover .remove-btn {
  visibility: visible;
}

.close-btn:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: 0.25s;
}
</style>
