<template>
    <!-- Gaming World Section Start -->
    <div class="lg:mb-32 md:mb-20 mb-15">
        <div class="container">
            <TitleSection :title="title"/>
        </div>
        <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div class="text-white text-center align-cener bg-no-repeat bg-scroll bg-center bg-cover md:pb-12 md:px-12 sm:px-3 px-10 h-460" :style="{backgroundImage: `url(${ service.videoBannerBg })`}" v-for="(service, index) in services" :key="index">
                <div class="mb-12 text-center align-center">
                    <img class="h-52 w-52" :src="service.imgSrc" :alt="service.name">
                </div>
                <div class="block">
                    <h3 class="text-white font-exo text-xl md:text-2xl font-bold uppercase mb-4">{{service.live}}</h3>
                    <p class="">{{service.text}}</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Gaming World Section End -->
</template>

<script>
    export default {
        components: {
            TitleSection: () => import('@/components/Title/TitleSection'),
        },
        data() {
            return {
                title:"You are most welcome In gaming world.",
                services: [
                    {
                        imgSrc: "/images/others/gaming-world1.webp",
                        name: "Service Image",
                        live: "Streaming",
                        text: "When the world makes video games we will be there to play them live, very poorly.  Come visit us here or on other platforms live and in color.",
                        videoBannerBg: "/images/others/gaming-world-bg1.webp"
                    },
                    {
                        imgSrc: "/images/others/gaming-world2.webp",
                        name: "Service Image",
                        live: "News",
                        text: "Some days we are going to post news, some days it will be opinions.  Right now it is whatever we want.  Stop by the blog to check it out.",
                        videoBannerBg: "/images/others/gaming-world-bg2.webp"
                    },
                    {
                        imgSrc: "/images/others/gaming-world3.webp",
                        name: "Service Image",
                        live: "Videos",
                        text: "Like everyone on this planet, we make long and short form video content.  Give those a look if you want!",
                        videoBannerBg: "/images/others/gaming-world-bg3.webp"
                    }
                ]
            }
        },
    }
</script>