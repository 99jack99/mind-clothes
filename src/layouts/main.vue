<script lang="ts" setup>
import navbar from "@/components/navbar.vue";
</script>

<template>
  <v-app>
    <navbar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
