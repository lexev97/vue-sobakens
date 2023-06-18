<template>
  <section class="header">
    <div class="header__container">
      <h1 class="header__container">Собакены</h1>
    </div>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
@use "../main.scss" as *;

.header {
  @include flex($justify: space-between);
  background-color: $dark-blue;
}
</style>
