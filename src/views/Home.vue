<script lang="ts" setup>
import Offer from "@/components/offer.vue";
import axios from "axios";
import { ref } from "vue";

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

  <v-parallax src="@/assets/imgs/te2.jpg">
    <v-container fluid>
      <v-row>
        <v-col v-for="items in data" :key="items._id" xl="3" xxl="2">
          <v-card class="ma-10 pa-4 rounded-xl">
            <v-img
              class="iimg rounded-xl"
              :src="items.image"
              height="200px"
              cover
            />
            <div class="d-flex flex-column align-start justify-center">
              <div class="d-flex align-start w-100 pa-1 text-box">
                <h1 class="w-80 text-box__title">{{ items.title }}</h1>
                <h2 class="w-20 ml-2">{{ items.price }}$</h2>
              </div>

              <div class="d-flex align-center justify-start">
                <v-rating
                  half-increments
                  clearable
                  density="compact"
                  :model-value="items.rating.rate"
                ></v-rating>
                <span class="ml-2">({{ items.rating.count }})</span>
              </div>

              <div class="d-flex align-center mt-10">
                <v-btn icon>
                  <v-icon>
                    <img src="@/assets/imgs/icons/Buy.svg" />
                  </v-icon>
                </v-btn>
                <v-btn class="ml-2" icon>
                  <v-icon>
                    <img src="@/assets/imgs/icons/Heart.svg" />
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<style lang="scss">
.text-box {
  &__title {
    line-height: 1;
    max-height: 67px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
