<template>
  <nav class="navigation">
    <ul class="navigation__main">
      <li>
        <RouterLink to="/" class="navigation__link">Главная</RouterLink>
      </li>
      <li>
        <RouterLink to="/breeds" class="navigation__link">Породы</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({});
</script>

<style lang="scss">
@use "../main.scss" as *;

.navigation {
  &__main {
    @include flex($justify: space-between);
    gap: 30px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__link {
    color: $blue;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.6;
    }
  }
}

.router-link-active {
  color: $orange;
  transition: all 0.3s;
}
</style>
