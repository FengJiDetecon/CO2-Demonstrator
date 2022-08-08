<template>
  <div class="homeSlied">
    <Carousel class="carousel" v-slot="{ currentSlide }">
      <Slide v-for="(slide, index) in carouselSliders" :key="index">
        <div class="slide-info" v-show="currentSlide === index + 1">
          <img :src="getImageUrl(`${slide}.jpg`)" alt="" class="sc">
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "../components/slider/Carousel.vue";
import Slide from "../components/slider/Slide.vue";
export default {
  name: "homeslide",
  components: {
    Carousel,
    Slide,
  },
  setup(){
    const carouselSliders = ['bg-1', 'bg-2', 'bg-3', 'bg-4'];
    const getImageUrl = (name) => {
        return new URL(`../assets/${name}`, import.meta.url).href
    };
    return {
      carouselSliders,
      getImageUrl,
    };
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 50vh;
  height: 50vh;

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 16/9;
    }
  } 
}
</style>