<template>
    <div class="bg-cover bg-gray-800">

        <HeaderSection/>

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle"/>

        <NuxtError/>

        <Footer/>

    </div>
</template>

<script>
export default {
    components: {
        HeaderSection: () => import('@/components/HeaderSection'),
        OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
        Breadcrumb: () => import('@/components/Breadcrumb'),
        NuxtError: () => import('@/components/NuxtError'),
        Footer: () => import('@/components/Footer'),
    },
    data() {
        return {
            navOpen: false,
            BreadcrumbTitle: "Error Page",
            BreadcrumbSubTitle: "Pages"
        }
    },
}
</script>