<template>
    <div class="container relative">
        <p class="date text-primary font-bold mb-3">Release Date: {{games.releaseDate}}</p>
        <p class="date text-primary font-bold mb-3">Platform: {{games.platform}}</p>
        <h2 class="text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10">{{games.title}}</h2>
        <div class="content-details">
            <div class="description mt-6">
                <p class="leading-8" v-html="games.gameOverview"></p>
                <br>
            </div>
        </div>
        <section class="gameslide">
            <div class="container relative">
                <CoolLightBox
                    :items="games.streams"
                    :index="index"
                    @close="index = null">
                </CoolLightBox>

                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide v-for="(screenshot, imageIndex) in games.screenshots" :key="imageIndex + 100">
                        <div class="relative">
                            <img class="sm:h-full h-64 w-full object-cover" :src="`${screenshot}`">
                        </div>
                    </swiper-slide>
                    <swiper-slide v-for="(match, streamIndex) in games.streams" :key="streamIndex">
                        <div class="relative">
                            <img class="sm:h-full h-64 w-full object-cover" :src="`${match.image}`" :alt="match.imageAlt">
                                <div @click="index = streamIndex" class="absolute-center">
                                <img class="md:w-120 w-20 h-20 md:h-120 cursor-pointer rounded" :src="`${match.playBtnOne}`" :alt="match.playAlt">
                            </div>
                                <div class="absolute md:h-20 h-12 left-1/2 bottom-0 transform -translate-x-2/4 bg-no-repeat bg-center w-full flex justify-center items-center" :style="{backgroundImage: `url(${ match.videoShapeBg })`}">
                                <h3 class="text-white font-exo font-bold uppercase text-base sm:text-xl md:text-2xl">{{ match.shapeTitle }}</h3>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

                <!-- Testimonial Arrows -->

                <div class="gameslide-button-prev swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all 2xl:-left-28 left-3 z-50 cursor-pointer">
                    <img class="w-4 h-6" src="/images/icon/navigation-arrow2.webp" alt="">
                </div>
                <div class="gameslide-button-next swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all 2xl:-right-28 2xl:left-auto right-3 z-50 cursor-pointer">
                    <img class="w-4 h-6" src="/images/icon/navigation-arrow1.webp" alt="">
                </div>
            </div>
        </section>

        <div class="description mt-6">
            <h3 class="text-2xl text-white uppercase font-bold mb-5">Description:</h3>
            <p class="leading-8" v-html="games.description"></p>
        </div>
        <div class="description mt-6">
            <h3 class="text-2xl text-white uppercase font-bold mb-5">Features:</h3>
            <p class="leading-8" v-html="games.features"></p>
        </div>
        <div class="description mt-6">
            <h3 class="text-2xl text-primary uppercase font-bold mb-5">What We Love:</h3>
            <p class="leading-8" v-html="games.weLove"></p>
        </div>

        <blockquote class="py-5 mb-5">
            <h3 class="text-2xl text-yellow uppercase font-bold mb-5">What We Don't Love:</h3>
            <p class="leading-8" v-html="games.weDontLove"></p>
        </blockquote>

        <div class="additional-information-area bg-secondary-100 px-9 py-9 rounded-2xl mb-9">
            <h3 class="text-2xl text-white uppercase font-bold mb-6">Additional Information:</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 text-white">
                <div v-for="(info, index) in games.additionalInfo" :key="index" class="additional_information_text" >
                    <h4 class="font-bold mb-5" v-html="info.attr"></h4>
                    <p class=" text-gray-400">{{ info.value }}</p>
                </div>
            </div>
        </div>
        <div class="description mt-6">
            <p class="leading-8">{{games.additionalDescription}}</p>
        </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { Disqus } from 'vue-disqus';
import CoolLightBox from 'vue-cool-lightbox';
import '../../assets/css/swiper.css';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import gameData from '../../data/games.json';

export default {
    components: {
        Swiper,
        SwiperSlide,
        Disqus,
        CoolLightBox
    },
    props: ["games"],
    data () {
        return {   
            gameData, 
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: false,
                navigation: {
                    nextEl: '.gameslide-button-next',
                    prevEl: '.gameslide-button-prev'
                }
            },
            index: null 
        }
    }
}
</script>