<template>
    <div class="bg-cover bg-gray-800">

        <HeaderSection/>

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle"/>

        <AllGames/>

        <Footer/>

    </div>
</template>

<script>
export default {
    components: {
        HeaderSection: () => import('@/components/HeaderSection'),
        OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
        Breadcrumb: () => import('@/components/Breadcrumb'),
        Footer: () => import('@/components/Footer'),
        AllGames: () => import('@/components/AllGames')
    },
    data() {
        return {
            navOpen: false,
            BreadcrumbTitle: "Games We Play",
            BreadcrumbSubTitle: "Games",
            paddingTop: "pt-0"
        }
    },
}
</script>