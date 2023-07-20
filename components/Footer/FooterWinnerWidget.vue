<template>
    <div class=" mr-8">
        <FooterWidgetTitle :title="title"/>

        <div class="grid grid-cols-3 sm:grid-cols-3 gap-3">
            <n-link v-for="(game, index) in games" :key="index" :to="`/game/${game.slug}`">
                <img :src="`${game.gamingBg}`" :alt="game.gamingAlt">
            </n-link>
        </div>
    </div>
</template>
<script>
export default {
    components:{
        FooterWidgetTitle: () => import('@/components/Footer/FooterWidgetTitle'),
    },
    data () {
        return {
            title: "Recent Games",
            games: [
                {
                    gamingBg: "/images/games/Fallout_76/icon.webp",
                    gamingAlt: "Fallout 76",
                    slug: "fallout-76"
                },
                {
                    gamingBg: "/images/games/7 Days to Die/icon.webp",
                    gamingAlt: "7 Days to Die",
                    slug: "7-days-to-die"
                },
                {
                    gamingBg: "/images/games/Halo Infinite/icon.webp",
                    gamingAlt: "Halo Infinite",
                    slug: "halo-infinite"
                }
            ]
        }
    },
}
</script>