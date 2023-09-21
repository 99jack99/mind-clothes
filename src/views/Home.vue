<script lang="ts" setup>
import Offer from "@/components/offer.vue";
import axios from "axios";
import { ref } from "vue";
/* import { assertExpressionStatement } from "@babel/types"; */

/* let data: Ref<Array> = ref(); */

const data = ref<[]>();

let home_clothes = () => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res.data);
      data.value = res.data;
    })

    .catch((res) => {
      console.log(res);
    });
};

home_clothes();
</script>

<template>
  <Offer />

  <v-container fluid class="haha">
    <v-row>
      <v-col v-for="items in data" :key="items._id" xl="3" xxl="2">
        <v-card
          class="ma-10"
          :title="items.title"
          :subtitle="items.description"
          variant="outlined"
        >
          <v-img
            :src="items.image"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            cover
          >
          </v-img>
          <v-chip>{{ items.price }}</v-chip>
        </v-card>
      </v-col>
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
