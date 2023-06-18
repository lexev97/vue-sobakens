<template>
  <nav>
    <RouterLink to="/">Главная</RouterLink> |
    <RouterLink to="/breeds">Породы</RouterLink>
  </nav>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({});
</script>
