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
  position: sticky;
  top: 0;
  background-color: $dark-blue;
  font-family: "Wellwait";

  &__container {
    @include flex($justify: space-between);
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    gap: 20px;
  }

  &__heading {
    margin: 0;
    padding: 0;
    color: $yellow;
  }
}

@media screen and (max-width: 500px) {
  .header__container {
    @include flex(
      $direction: column,
      $justify: space-between,
      $align: flex-start
    );
  }
}
</style>
