<template>
    <!-- Blog Post Section Start -->
    <div class="container pt-16">

        <!-- Title Section Start -->
        <TitleSection :title="title" :text="text"/>
        <!-- Title Section End -->
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div class="relative group w-300 sm:w-full mx-auto" v-for="(service, index) in services" :key="index">
                <div>
                    <img :src="service.imgSrc" :alt="service.alt">
                </div>
                <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 bg-team-shape bg-cover h-24 sm:h-20 md:h-28 lg:h-24 xl:h-32 2xl:h-32 group-hover:bg-team-hover-shape hover:transition-all">
                    <h3 class="text-white font-bold text-lg">{{service.name}}</h3>
                    <span class="text-primary text-sm md:text-base group-hover:text-white transition-all">{{service.subtitle}}</span>
                    <ul class="flex">
                        <li v-for="(link, index) in service.links" :key="index" class="mr-4 last:mr-0">
                            <a :href="`${link.href}`" target="_blank" :style="{backgroundImage: `url(${ link.BgShape })`}" class="w-10 h-10 leading-10 text-center inline-block"><i :class="link.className"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    <!-- Blog Post Section End -->
</template>

<script>
    export default {
        components: {
            TitleSection: () => import('@/components/Title/TitleSection')
        },
        data() {
            return {
                title: "Meet the Players",
                text: "Too old to die young, and too young for adult diapers",
                services: [
                    {
                        imgSrc: "/images/others/team1.webp",
                        alt: "Service Image",
                        name: "SxySamurai (Kelly)",
                        subtitle: "Founder & Resident Angry Dude",
                        links: [
                            {
                                href: "https://www.twitter.com/sxysamurai",
                                BgShape: "/images/icon/twittre.webp",
                                className: "icofont-twitter text-white"
                            },
                            {
                                href: "https://www.youtube.com/@sxysamurai",
                                BgShape: "/images/icon/youtobe-bg.webp",
                                className: "icofont-youtube-play text-white"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/others/team2.webp",
                        alt: "Service Image",
                        name: "MysticNynja (Will)",
                        subtitle: "Founder & Tech Geek",
                        links: [
                            {
                                href: "https://www.twitter.com/mysticnynja",
                                BgShape: "/images/icon/twittre.webp",
                                className: "icofont-twitter text-white"
                            },
                            {
                                href: "https://www.youtube.com/@mysticnynja",
                                BgShape: "/images/icon/youtobe-bg.webp",
                                className: "icofont-youtube-play text-white"
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>