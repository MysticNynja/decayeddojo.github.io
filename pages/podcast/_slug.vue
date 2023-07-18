<template>
    <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg2.webp);">

        <HeaderSection/>
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <Breadcrumb :BreadcrumbTitle="podcastData.title" :BreadcrumbSubTitle="podcastData.episode" :BreadcrumbParent="BreadCrumbParent" :BreadcrumbParentURL="BreadcrumbParentURL"/>
        <PodcastPlayer :source=podcastData.audioSrc />
        <Footer/>

    </div>
</template>

<script>

    import podcastData from '@/data/podcasts.json'
    export default {
        components: {
            PodcastPlayer: () => import('@/components/Podcast/PodcastPlayer'),
            HeaderSection: () => import('@/components/HeaderSection'),
            OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            Footer: () => import('@/components/Footer')
        },
        data() {
            return {
                podcastData,
                navOpen: false,
                BreadCrumbParent: "All Episodes",
                BreadcrumbParentURL: "/podcast",
                paddingTop: "pt-32",
                slug: this.$route.params.slug,
                source: ""
            };
        },
        mounted () {
            this.podcastData = podcastData.find(podcasts => podcasts.slug == this.$route.params.slug);
            console.log(this.podcastData.audioSrc)
        }
    }

</script>