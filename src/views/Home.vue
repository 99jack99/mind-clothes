<script lang="ts" setup>
import Offer from "@/components/offer.vue";
import axios from "axios";
import { ref } from "vue";
import { assertExpressionStatement } from "@babel/types";

/* let data = ref(); */

let home_clothes = () => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res.data);
    })

    .catch((res) => {
      console.log(res);
    });
};

home_clothes();
</script>

<template>
  <div>
    <Offer />

    <div class="haha"></div>
  </div>
</template>

<style lang="scss">
.haha {
  padding: 30px;
  background-color: red;
}
</style>
