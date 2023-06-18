<template>
  <TheHeader>
    <TheNavigation />
  </TheHeader>

  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import TheHeader from "./layout/TheHeader.vue";
import TheNavigation from "./components/TheNavigation.vue";

import "./main.scss";

export default defineComponent({
  components: {
    TheHeader,
    TheNavigation,
  },
});
</script>
