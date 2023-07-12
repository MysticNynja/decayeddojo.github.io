<template>
    <section>
        <div class="flex items-center justify-center">
            <img class="h-full pr-4 ml-8" src="/images/podcast/index.webp"/>
        </div>
        <div class="flex items-center justify-center pl-4 pt-3">
            <div class="flex items-center justify-between h-24 text-white bg-purple-950 rounded-lg shadow-md">
                <div class="flex flex-col px-4">
                    <span class="text-xs text-purple-300">Subscribe!</span>
                    <p class="text-2xl font-semibold uppercase">Select a platform</p>
                </div>
                <div class="mx-auto w-24 h-32 rounded-full ml-auto pt-5">
                    <div class="relative">
                        <img src="/images/podcast/subscribeButton_Hover.webp" class="rounded-full transition-transform duration-300 transform hover:scale-110" alt="Imagem de perfil" />
                        <img src="/images/podcast/subscribeButton.webp" class="rounded-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform hover:opacity-100" alt="Nova imagem" />
                    </div>
                </div>
            </div>
        </div>
        <PodcastPlayer/>
    </section>
</template>

<script>
    export default {
        components: {
            PodcastPlayer: () => import('@/components/Podcast/PodcastPlayer'),
        },
        data() {
            return {}
        }
    }
</script>