<template>
  <TheHeader>
    <TheNavigation />
  </TheHeader>
  <main class="main">
    <RouterView
      :breeds="breeds"
      :dataByBreed="picturesByBreed"
      :data="randomBreedsPictures"
      :isLoading="isLoading"
      @breed-submit="handleBreedSubmit"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import TheHeader from "./layout/TheHeader.vue";
import TheNavigation from "./components/TheNavigation.vue";
import axios from "axios";

export default defineComponent({
  data(): {
    breeds: string[];
    picturesByBreed: string[];
    randomBreedsPictures: string[];
    isLoading: boolean;
  } {
    return {
      breeds: [],
      picturesByBreed: [],
      randomBreedsPictures: [],
      isLoading: false,
    };
  },
  methods: {
    getPicturesByBreedFromServer(breed: string): void {
      this.isLoading = true;
      axios
        .get(`https://dog.ceo/api/breed/${breed}/images`)
        .then((res) => {
          this.picturesByBreed = res.data.message;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },
    getBreedsListFromServer(): void {
      this.isLoading = true;
      axios
        .get("https://dog.ceo/api/breeds/list/all")
        .then((res) => {
          this.breeds = Object.keys(res.data.message);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },
    scroll(): void {
      window.onscroll = () => {
        let bottomOfWindow: boolean =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow && this.$route.path === "/") {
          this.getRandomPicturesFromServer();
        }
      };
    },
    getRandomPicturesFromServer(): void {
      this.isLoading = true;
      axios
        .get("https://dog.ceo/api/breeds/image/random/20")
        .then((res) => {
          this.randomBreedsPictures = [
            ...this.randomBreedsPictures,
            ...res.data.message,
          ];
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },
    handleBreedSubmit(select: any): void {
      this.getPicturesByBreedFromServer(select.value);
    },
  },
  mounted(): void {
    this.getRandomPicturesFromServer();
    this.getBreedsListFromServer();
    this.scroll();
  },
  components: {
    TheHeader,
    TheNavigation,
  },
});
</script>

<style lang="scss">
.main {
  padding: 30px 20px;
}
</style>
