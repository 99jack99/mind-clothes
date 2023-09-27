<script lang="ts" setup>
import Offer from "@/components/offer.vue";
import product from "@/services/product.service";
import { Product } from "@/interfaces/product.interface";
import { ref } from "vue";

const all_products = ref<Product>();

let products = async () => {
  await product
    .get_all_products()
    .then((res) => (all_products.value = res.data))
    .catch((res) => console.log("Error al cargar productos", res));
};

products();
</script>

<template>
  <Offer />

  <v-parallax src="@/assets/imgs/bg-home.jpg">
    <v-container fluid>
      <v-row>
        <v-col v-for="product in all_products" :key="product.id" xl="3" xxl="2">
          <v-card class="ma-10 pa-4 rounded-xl" color="#2B2730">
            <v-img
              class="iimg rounded-xl"
              :src="product.image"
              height="200px"
              cover
            />
            <div class="mt-5 d-flex flex-column align-start justify-center">
              <div class="d-flex align-start w-100 pa-1 text-box">
                <div class="w-80 text-h4 font-weight-medium text-box__title">
                  {{ product.title }}
                </div>
                <div class="w-20 ml-2 text-h5 font-weight-medium font-italic">
                  {{ product.price }}$
                </div>
              </div>

              <div class="d-flex align-center justify-start">
                <v-rating
                  half-increments
                  clearable
                  density="compact"
                  :model-value="product.rating.rate"
                  active-color="grey-lighten-2"
                  color="grey-lighten-2"
                ></v-rating>
                <span class="ml-2">({{ product.rating.count }})</span>
              </div>

              <div class="d-flex align-center mt-10">
                <v-btn icon class="bg-grey-lighten-2">
                  <v-icon>
                    <img src="@/assets/imgs/icons/Buy.svg" />
                  </v-icon>
                </v-btn>
                <v-btn class="ml-2 bg-pink-lighten-4" icon>
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
