<template>
    <!-- Video Post Section Start -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-12 px-0 mt-15">
        <div v-for="(video, index) in videoData.slice(0, 4)" :key="index">
            <div class="flex sm:items-center flex-col sm:flex-row">
                <div class="lg:w-40 xl:w-52 2xl:w-52 md:w-44 sm:w-37 w-32 mb-7 sm:mb-0 flex-shrink-0">
                    <n-link :to="`/video/${video.slug}`"><img :src="video.imgSrc" :alt="video.alt"></n-link>
                </div>
                <div class="xl:ml-9 lg:ml-6 md:ml-9 ml-3 flex flex-col flex-1">
                    <span class="text-sm text-white font-exo font-normal mb-2 sm:mb-5"><i class="icofont-calendar text-primary mr-2"></i>{{video.date}}</span>
                    <h2 class="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase font-exo hover:text-primary transition-all mb-2 sm:mb-5 leading-9">
                        <n-link :to="`/video/${video.slug}`">{{video.title}}</n-link>
                    </h2>
                    <n-link :to="`/video/${video.slug}`" class="uppercase font-exo relative pl-12 text-sm text-white transition-all hover:text-primary before:content-[''] before:absolute before:h-0.5 before:w-7.5 before:bg-primary before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">Watch Video</n-link>
                </div>
            </div>
        </div>
    </div>
    <!-- Video Post Section End -->
</template>

<script>
  import videoData from '@/data/videos.json'
    export default {
        data() {
            return {
                videoData
            }
        }
    }
</script>