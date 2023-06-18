<template>
  <section class="header">
    <div class="header__container">
      <h1 class="header__heading">Собакены</h1>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
@use "../main.scss" as *;

.header {
  background-color: $dark-blue;
  font-family: "Wellwait";

  &__container {
    @include flex($justify: space-between);
    width: 80%;
    margin: 0 auto;
  }

  &__heading {
    color: $yellow;
  }
}
</style>
