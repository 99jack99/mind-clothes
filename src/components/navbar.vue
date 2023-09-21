<script lang="ts" setup></script>

<template>
  <v-app-bar class="py-4 pl-4">
    <img src="@/assets/imgs/logo/logo.svg" />

    <div class="search-bar">
      <input class="search-bar__input" placeholder="Search" type="text" />
      <img class="search-bar__icon" src="@/assets/imgs/icons/Search.svg" />
    </div>

    <v-spacer />

    <div class="category-btn">
      <img src="@/assets/imgs/icons/Category.svg" />
      <div>Category</div>
    </div>

    <v-btn icon>
      <v-icon>
        <img src="@/assets/imgs/icons/Heart.svg" />
      </v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>
        <img src="@/assets/imgs/icons/Bag.svg" />
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.search-bar {
  margin-left: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  &__input {
    width: 200px;
    background-color: $shade-lgt;
    border-radius: 20px;
    padding: 10px;
    border: 0.5px solid black;
  }

  &__icon {
    position: relative;
    right: 40px;
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
