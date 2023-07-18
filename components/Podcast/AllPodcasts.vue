<template>
    <section>
        <div class="flex items-center justify-center">
            <img class="h-full pr-4 ml-8 pb-9" src="/images/podcast/index.webp"/>
        </div>
        <div v-for="(podcast, index) in podcasts" :key="index">
            <div class="flex sm:items-center flex-col sm:flex-row">
                <div class="lg:w-40 xl:w-52 2xl:w-52 md:w-44 sm:w-37 w-32 mb-7 sm:mb-0 flex-shrink-0">
                    <n-link :to="`/podcast/${podcast.slug}`"></n-link>
                </div>
                <div class="xl:ml-9 lg:ml-6 md:ml-9 ml-3 flex flex-col flex-1">
                    <span class="text-sm text-white font-exo font-normal mb-2 sm:mb-5"><i class="icofont-calendar text-primary mr-2"></i>{{podcast.date}}</span>
                    <h2 class="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase font-exo hover:text-primary transition-all mb-2 sm:mb-5 leading-9">
                        <n-link :to="`/podcast/${podcast.slug}`">{{podcast.title}}</n-link>
                    </h2>
                    <n-link :to="`/podcast/${podcast.slug}`" class="uppercase font-exo relative pl-12 text-sm text-white transition-all hover:text-primary before:content-[''] before:absolute before:h-0.5 before:w-7.5 before:bg-primary before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">Listen In</n-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import podcasts from '@/data/podcasts.json'
    export default {
        components: {
        },
        data() {
            return {
                podcasts,
                feedUrl: "https://anchor.fm/s/562e5760/podcast/rss",
                name: "",
                limit: 5,
            }
        }
    }
</script>