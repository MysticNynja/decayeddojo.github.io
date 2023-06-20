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
                    gamingBg: "/images/others/winners1.webp",
                    gamingAlt: "Game",
                    slug: 1
                },
                {
                    gamingBg: "/images/others/winners2.webp",
                    gamingAlt: "Game",
                    slug: 2
                },
                {
                    gamingBg: "/images/others/winners3.webp",
                    gamingAlt: "Game",
                    slug: 3
                },
                {
                    gamingBg: "/images/others/winners4.webp",
                    gamingAlt: "Game",
                    slug: 4
                },
                {
                    gamingBg: "/images/others/winners5.webp",
                    gamingAlt: "Game",
                    slug: 5
                },
                {
                    gamingBg: "/images/others/winners6.webp",
                    gamingAlt: "Game",
                    slug: 6
                }
            ]
        }
    },
}
</script>