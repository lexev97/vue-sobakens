<template>
  <section class="exact-breed">
    <h2 v-if="isLoading" class="all-breeds__loading">Загрузка...</h2>
    <div class="select-breed" @submit.prevent="handleBreedSubmit">
      <label for="breed">Выберите породу:</label>
      <select name="breed" id="breed" ref="selectedBreed">
        <option v-for="(breed, index) in breeds" :key="index" :name="breed">
          {{ breed }}
        </option>
      </select>
      <button
        type="button"
        class="select-breed__btn"
        @click="handleBreedSubmit"
      >
        Выбрать
      </button>
    </div>
    <div v-if="pictureLink" class="exact-breed__gallery">
      <img
        :src="`${pictureLink}`"
        alt="Изображение собаки"
        class="exact-breed__image"
      />
      <div class="exact-breed__btns">
        <button class="select-breed__btn" @click="showPreviousPictureOfBreed">
          Back
        </button>
        <button class="select-breed__btn" @click="showAnyPictureOfBreed">
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    dataByBreed: { type: Array, required: true },
    isLoading: { type: Boolean, required: true },
    breeds: { type: Array, required: true },
  },
  data(): {
    pictureLink: string;
    picturesHistory: number[];
  } {
    return {
      pictureLink: "",
      picturesHistory: [],
    };
  },
  watch: {
    dataByBreed(newValue): void {
      if (newValue) {
        this.picturesHistory = [];
        this.showAnyPictureOfBreed();
      }
    },
  },
  methods: {
    handleBreedSubmit(): void {
      this.$emit("breed-submit", this.$refs.selectedBreed);
    },
    showPreviousPictureOfBreed(): void {
      const historyLength: number = this.picturesHistory.length;
      const previousIndex: number = this.picturesHistory[historyLength - 2];

      if (historyLength > 1) {
        this.pictureLink = this.dataByBreed[previousIndex];
        this.picturesHistory.pop();
      } else {
        return;
      }
    },
    showAnyPictureOfBreed(): void {
      const randomIndex: number = Math.floor(
        Math.random() * this.dataByBreed.length
      );
      this.picturesHistory.push(randomIndex);
      this.pictureLink = this.dataByBreed[randomIndex];
    },
  },
});
</script>

<style lang="scss">
@use "../main.scss" as *;

.exact-breed {
  width: 80%;
  margin: 0 auto;
  text-align: center;

  &__gallery {
    width: 100%;
  }

  &__image {
    object-fit: contain;
    width: 100%;
  }

  &__btns {
    @include flex();
    gap: 30px;
    padding: 20px 0;
  }
}
.select-breed {
  font-family: "Wellwait";
  @include flex();
  gap: 20px;
  font-size: 20px;
  padding: 0 0 20px 0;

  &__btn {
    cursor: pointer;
    font-family: "Wellwait";
    font-size: 18px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: $yellow;
    transition: all 0.2s;

    &:hover {
      background-color: $light-blue;
    }
    &:active {
      background-color: $yellow;
    }
  }
}

@media screen and (max-width: 500px) {
  .select-breed {
    @include flex($direction: column);
  }
}
</style>
