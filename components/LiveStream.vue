<template>
  <!-- Live Section Start -->
  <section class="live-section">
    <div class="container relative">
      <modal name="sxySamurai" :width=1600 :height=800 :adaptive=true>
          <div style="padding-bottom: 56.25%; position: relative;">
              <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://player.twitch.tv/?autoplay=false&channel=sxysamurai&parent=localhost" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  
                  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"> 
              </iframe>
          </div>
      </modal>
      <modal name="mysticNynja" :width=1600 :height=800 :adaptive=true>
          <div style="padding-bottom: 56.25%; position: relative;">
              <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://player.twitch.tv/?autoplay=false&channel=mysticNynja&parent=localhost" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  
                  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"> 
              </iframe>
          </div>
      </modal>

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(stream, imageIndex) in streamData" :key="imageIndex">
          <div class="relative">
            <img class="sm:h-full h-64 w-full object-cover" :src="`${stream.gamingBg}`" :alt="stream.gamingAlt">
            <div @click="openModal(imageIndex)" class="absolute-center">
              <img class="md:w-120 w-20 h-20 md:h-120 cursor-pointer rounded" :src="`${stream.playBtnOne}`" :alt="stream.playAlt">
            </div>
            <div class="absolute md:h-20 h-12 left-1/2 bottom-0 transform -translate-x-2/4 bg-no-repeat bg-center w-full flex justify-center items-center" :style="{backgroundImage: `url(${ stream.videoShapeBg })`}">
              <h3 class="text-white font-exo font-bold uppercase text-base sm:text-xl md:text-2xl">{{ stream.shapeTitle }}</h3>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div class="livesection-button-prev swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all 2xl:-left-28 left-3 z-50 cursor-pointer">
        <img class="w-4 h-6" src="/images/icon/navigation-arrow2.webp" alt="">
      </div>
      <div class="livesection-button-next swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all 2xl:-right-28 2xl:left-auto right-3 z-50 cursor-pointer">
        <img class="w-4 h-6" src="/images/icon/navigation-arrow1.webp" alt="">
      </div>
    </div>
  </section>
  <!-- Live Section End -->
</template>

<script>
  import CoolLightBox from 'vue-cool-lightbox'
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import '../assets/css/swiper.css';
  import streamData from '../data/streams.json'
  
  export default {

    components: {
      Swiper,
      SwiperSlide,
      CoolLightBox
    },
    data() {
      return {
        streamData,
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: false,
          navigation: {
            nextEl: '.live-section .livesection-button-next',
            prevEl: '.live-section .livesection-button-prev'
          }
        },
        index: null
      }
    },
    methods: {
        openModal (index) { 
          if(index == 0)
            this.$modal.show('sxySamurai')
          else if(index == 1)
            this.$modal.show('mysticNynja')
        },
    }
  }
</script>