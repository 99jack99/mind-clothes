<script lang="ts" setup>
import navbar from "@/components/navbar.vue";
import foot from "@/components/footer.vue";
</script>

<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view />
    </v-main>
    <foot />
  </v-app>
</template>
