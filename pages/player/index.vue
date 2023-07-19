<template>
    <div class="bg-cover bg-gray-800">

        <HeaderSection/>

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle"/>

        <AllPlayers/>

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
        AllPlayers: () => import('@/components/AllPlayers')
    },
    data() {
        return {
            navOpen: false,
            BreadcrumbTitle: "Players",
            BreadcrumbSubTitle: "Players",
            paddingTop: "pt-0"
        }
    },
}
</script>