<script setup lang="ts"></script>

<template>
  <div class="offer d-flex flex-column align-center justify-center">
    <h1 class="text-h1 font-weight-black text-grey-lighten-5">
      We present... "Mindless"
    </h1>
    <span class="text-h5 font-weight-light text-grey-lighten-5"
      >Not everybody has the privilege to be mindless.</span
    >
    <v-btn class="rounded-xl">
      Buy now!
      <template v-slot:append>
        <v-icon>
          <img src="@/assets/imgs/icons/Arrow-down.svg" alt=""
        /></v-icon>
      </template>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.offer {
  background-image: url("@/assets/imgs/heroo.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 550px;
  gap: 20px;
}
</style>
