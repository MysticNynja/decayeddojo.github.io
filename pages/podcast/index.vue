<template>
  <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg.webp);">
    <HeaderSection />
    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
    <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle" :BreadcrumbParent="BreadCrumbParent" :BreadcrumbParentURL="BreadcrumbParentURL"/>
    <AllPodcasts />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    HeaderSection: () => import("@/components/HeaderSection"),
    OffCanvasMobileMenu: () => import("@/components/Header/OffCanvasMobileMenu"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    Footer: () => import("@/components/Footer"),
    AllPodcasts: () => import("@/components/Podcast/AllPodcasts"),
  }, 
  data() {
      return {
          navOpen: false,
          paddingTop: "pt-32",
          BreadcrumbTitle: "Decayed Dojo Show",
          BreadcrumbSubTitle: "All Podcasts",
          BreadCrumbParent: "Home",
          BreadcrumbParentURL: "/",
      }
  },
}
</script>