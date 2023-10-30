<script lang="ts" setup>
// Components
import Offer from "@/components/offer.vue";

// Helpers
import product from "@/services/product.service";
import { Product } from "@/interfaces/product.interface";
import { useCartStore } from "@/store/cartStore";

// Gen. imports
import { ref, watch } from "vue";

// Variables
let cartStore = useCartStore();
const all_products = ref<Product>();
const categories = ref<[]>();
const selected_category = ref("");
const order = ref();

// Methods
let products = async () => {
  await product
    .get_all_products()
    .then((res) => {
      all_products.value = res.data;
      console.log(res);
    })
    .catch((res) => console.log("Error al cargar productos", res));
};

let products_sorted = async () => {
  await product
    .get_all_products_sorted(order.value)
    .then((res) => {
      all_products.value = res.data;
      console.log(res);
    })
    .catch((res) => console.log("Error al cargar productos", res));
};

let get_categories = async () => {
  await product
    .get_categories()
    .then((res) => (categories.value = res.data))
    .catch((res) => console.log("Error", res));
};

let get_productbycat = async () => {
  await product
    .get_cat_products(selected_category.value)
    .then((res) => (all_products.value = res.data))
    .catch((res) => console.log("mal", res));
};

let restore_filters = () => {
  order.value = undefined;
  selected_category.value = "";
  products();
};

// Lifecycle & scripts
watch(selected_category, () => {
  get_productbycat();
});

watch(order, () => {
  products_sorted();
});

products();
get_categories();
</script>

<template>
  <Offer />

  <v-parallax src="@/assets/imgs/bg-home.jpg">
    <v-container fluid>
      <!-- filters -->
      <div class="d-flex flex-row align-center justify-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <div class="category-btn" v-bind="props">
              <img src="@/assets/icons/Category.svg" />
              <div>Category</div>
            </div>
          </template>
          <v-list>
            <v-list-item v-for="category in categories" :key="category">
              <div @click="selected_category = category">{{ category }}</div>
            </v-list-item>
          </v-list>
        </v-menu>
        <div class="category-btn" @click="order = 'adc'">Older</div>
        <div class="category-btn" @click="order = 'desc'">Newer</div>
        <div class="category-btn" @click="restore_filters()">
          Restore filters
        </div>
      </div>
      <v-row>
        <v-col v-for="product in all_products" :key="product.id" xl="3" xxl="2">
          <v-card class="ma-10 pa-4 rounded-xl" color="#2B2730">
            <v-img
              class="iimg rounded-xl"
              :src="product.image"
              height="300px"
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
                  <v-icon @click="cartStore.add_item_cart(product)">
                    <img src="@/assets/icons/Buy.svg" />
                  </v-icon>
                </v-btn>
                <v-btn class="ml-2 bg-pink-lighten-4" icon>
                  <v-icon>
                    <img src="@/assets/icons/Heart.svg" />
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
@import "@/styles/index.scss";
.text-box {
  &__title {
    line-height: 1;
    max-height: 67px;
    overflow: hidden;
    text-overflow: ellipsis;
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
