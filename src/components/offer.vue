<script setup lang="ts"></script>

<template>
  <div class="offer">
    <h1 class="offer__title">We present... "Mindless"</h1>
    <span class="offer__description"
      >Not everybody has the privilege to be mindless.</span
    >
    <div class="offer__btn">Buy</div>
  </div>
</template>

<style lang="scss" scoped>
.offer {
  background-image: url("@/assets/imgs/heroo.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 550px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  &__title {
    color: white;
    font-size: 56px;
  }

  &__description {
    font-style: italic;
  }

  &__btn {
    padding: 10px 20px;
    border-radius: 10px;
    background-color: white;
  }
}
</style>
