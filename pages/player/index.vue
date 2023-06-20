<template>
    <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg2.webp);">

        <HeaderSection/>

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle"/>

        <AllPlayers/>

        <Footer/>

    </div>
</template>

<script>
import matchesData from '@/data/matches.json'
export default {
    components: {
        HeaderSection: () => import('@/components/HeaderSection'),
        OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
        Breadcrumb: () => import('@/components/Breadcrumb'),
        Footer: () => import('@/components/Footer'),
        AllPlayers: () => import('@/components/AllPlayers')
    },
    data() {
        return {
            matchesData,
            navOpen: false,
            BreadcrumbTitle: "Players",
            BreadcrumbSubTitle: "Players",
            paddingTop: "pt-0"
        }
    },
}
</script>