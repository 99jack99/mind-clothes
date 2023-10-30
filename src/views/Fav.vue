<script setup lang="ts"></script>

<template>
  <v-container>
    <div class="d-flex align-start">
      <div class="w-50 pa-10">
        <h1 class="mb-10">List of your favorites</h1>
        <v-row>
          <v-col cols="4">
            <div class="bg-black pa-5 rounded-lg">
              <h2>Elemento</h2>
              <v-btn class="mt-10"
                >Remove fav<v-icon icon="mdi-close"></v-icon
              ></v-btn>
            </div>
          </v-col>

          <v-col cols="4">
            <div class="bg-black pa-5 rounded-lg">
              <h2>Elemento</h2>
              <v-btn class="mt-10"
                >Remove fav<v-icon icon="mdi-close"></v-icon
              ></v-btn>
            </div>
          </v-col>

          <v-col cols="4">
            <div class="bg-black pa-5 rounded-lg">
              <h2>Elemento</h2>
              <v-btn class="mt-10"
                >Remove fav<v-icon icon="mdi-close"></v-icon
              ></v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="w-50 pa-10">
        <h1 class="mb-5">Check most favourites items at our shop!</h1>
        <p class="my-5 mb-10">Don't forget to leave your rates!</p>
        <v-img src="@/assets/imgs/favs.jpg" class="rounded-lg" cover></v-img>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>
