<template>
  <section class="all-breeds">
    <ul class="all-breeds__grid">
      <li
        v-for="(item, index) in data"
        :key="index"
        class="all-breeds__grid-item"
      >
        <img :src="`${item}`" alt="изображение собаки" />
      </li>
    </ul>
    <p v-if="isLoading" class="all-breeds__loading">Загрузка...</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isLoading: { type: Boolean, required: true },
    data: { type: Array, required: true },
  },
});
</script>

<style lang="scss">
@use "../main.scss" as *;

.all-breeds {
  width: 80%;
  margin: 0 auto;

  &__loading {
    text-align: center;
    font-family: "Wellwait";
    padding: 20px;
    margin: 0;
  }

  &__grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 0;
    margin: 0;
  }

  &__grid-item {
    list-style: none;
    width: 100%;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 1500px) {
    .all-breeds__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 500px) {
    .all-breeds__grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
