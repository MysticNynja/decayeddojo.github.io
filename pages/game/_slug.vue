<template>
    <div class="bg-cover bg-gray-800">

        <HeaderSection/>

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="gameHome.title" :BreadcrumbParent="BreadCrumbParent" :BreadcrumbParentURL="BreadcrumbParentURL" />

        <GameDetails :games="gameHome"/>

        <Footer/>

    </div>
</template>

<script>

    import gameHome from '@/data/games.json'
    export default {
        components: {
            GameDetails: () => import('@/components/Games/GameDetails'),
            HeaderSection: () => import('@/components/HeaderSection'),
            OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            Footer: () => import('@/components/Footer')
        },
        data() {
            return {
                btnName: "JOIN NOW",
                gameHome,
                navOpen: false,
                BreadcrumbTitle: "Game Details",
                BreadCrumbParent: "All Games",
                BreadcrumbParentURL: "/game",
                paddingTop: "pt-32",
                slug: this.$route.params.slug
            };
        },
        mounted () {
            this.gameHome = gameHome.find(games => games.slug == this.$route.params.slug);
        }
    }

</script>