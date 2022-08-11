<template>
  <div class="homeSlied">
    <Carousel class="carousel" v-slot="{ currentSlide }">
      <Slide v-for="(slide, index) in carouselSliders" :key="index">
        <div class="slide-info" v-show="currentSlide === index + 1">
          <img :src="getImageUrl(`${slide}.jpg`)" alt="" class="sc">
        </div>
      </Slide>
      <Slide>
        <div class="video-container" v-show="currentSlide === 5">
          <div class="intro">
            <div class="intro-h1">
              Fischertechnik
              <br>
              <span >{{ dynamicSpan }}</span>
              <span :class="{ 'static-cursor': !cursor_blick, 'blick-cursor': cursor_blick}"> |</span>
            </div>
            <h5>
              Berlin Köln München
            </h5>
            <div class="demo-button">
              <a href="#">Demo</a>
              <a href="#">Documentation</a>
            </div>
          </div>
          <div class="video-box">
            <video 
              class="video"
              ref="video_ref" 
              width="1080" 
              src="http://34.141.11.127:5000/static/uploads/walker_new.mp4"
              v-show="currentSlide === 5" 
              autoplay 
              loop>
            </video>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "../components/slider/Carousel.vue";
import Slide from "../components/slider/Slide.vue";
import { ref, onMounted } from "vue";
export default {
  name: "homeslide",
  components: {
    Carousel,
    Slide,
  },
  setup(){
    const carouselSliders = ['bg-1', 'bg-2', 'bg-3', 'bg-4'];
    const video_url = ref('../assets/IoT_FT.mov');
    const getImageUrl = (name) => {
        return new URL(`../assets/${name}`, import.meta.url).href
    };
    const video_ref = ref(null);
    const dynamicSpan = ref('');
    const key_words = ['IoT', 'OPC UA', 'Data Space', 'Metaverse'];
    var words_index = 0;
    var key_words_index = 0;
    const cursor_blick = ref(false);
    const isPaused = ref(false);
    onMounted(()=>{
      setInterval(()=>{
        // check pause status
        if(isPaused.value){
          return;
        }
        const key_words_length = key_words.length;
        const words_length = key_words[key_words_index].length;
        dynamicSpan.value += key_words[key_words_index][words_index];
        if (words_index < words_length - 1) {
          words_index++;
        } else {
          words_index = 0;
          // pause for 1 second
          isPaused.value = true;
          // reset cursor blink status
          cursor_blick.value = true;
          setTimeout(()=>{
            key_words_index++;
            dynamicSpan.value = '';
            isPaused.value = false;
            if(key_words_index === key_words_length){
              key_words_index = 0;
            };
            // reset cursor blink status
            cursor_blick.value = false;
          }, 2000);
        }
      }, 400);
    })
    return {
      carouselSliders,
      video_url,
      getImageUrl,
      video_ref,
      dynamicSpan,
      cursor_blick,
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
  .video-container {
    position: relative;
    width: 100%;
    height: 50vh;
    .intro {
      position: relative;
      top: 0;
      left: 25%;
      width: 35%;
      height: 100%;
      z-index: 1;
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;
      .intro-h1 {
        position: relative;
        top: 6rem;
        color: #fff;
        font-family: Open Sans, sans-serif;
        .blick-cursor {
          animation: blink-cursor 1s infinite;
        }
        @keyframes blink-cursor {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      }
      .demo-button {
        position: relative;
        top: 3rem;
        margin: 0;
        display: flex;
        flex-direction: row;
        width: 100px;
        border-radius: 5%;
        a {
          position: relative;
          top: -1rem;
          background-color: var(--c-btn-blue);
          color: #fff;
          font-family: Open Sans, sans-serif;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: #fff;
            background-color: #000;
          }
        }
      }
      h5 {
        position: relative;
        top: 5rem;
        font-size: 1.5rem;
        color: #fff;
        font-family: Open Sans, sans-serif;
      }
      .demo-button {
        a {
        margin-right: 2rem;
        margin-top: 2rem;
        font-family: Open Sans, sans-serif;
        padding: 10px;
        border-radius: 5%;
        }
        a:hover {
          cursor: pointer;
        }
      }
      
      
    }
    .video-box {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .video{
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 16/9;
    }
    }
  }
  
}
</style>