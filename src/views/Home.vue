<script lang="ts" setup>
import Offer from "@/components/offer.vue";
import axios from "axios";
import { ref } from "vue";
/* import { assertExpressionStatement } from "@babel/types"; */

/* let data: Ref<Array> = ref(); */

const data = ref<[]>();

let home_clothes = () => {
  axios
    .get("https://api.storerestapi.com/products")
    .then((res) => {
      console.log(res.data.data);
      data.value = res.data.data;
    })

    .catch((res) => {
      console.log(res);
    });
};

home_clothes();
</script>

<template>
  <Offer />

  <v-container>
    <v-row justify="center">
      <div v-for="items in data" :key="items._id">
        <v-col cols-4>
          <v-card :title="items.title" :text="items.slug" variant="outlined">
            <v-card-actions>
              <v-btn>{{ items.price }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </div>
    </v-row>
  </v-container>

  <!--   <div class="cardy" v-for="items in data" :key="items.id">
        <h3 class="cardy__title">{{ items.title }}</h3>
        <img class="cardy__img" :src="items.image" />
        <div class="cardy__price">{{ items.price }}</div>
      </div></v-container -->
</template>

<style lang="scss">
.haha {
  padding: 30px;
  background-color: red;

  display: flex;
  align-items: center;
  justify-content: center;

  .cardy {
    padding: 20px;
    background-color: lightcoral;
    max-width: 300px;
    min-height: 200px;
    margin: 20px;

    &__title {
      font-size: 22px;
      color: white;
    }

    &__img {
      height: 100px;
      width: 100px;
    }
  }
}
</style>
