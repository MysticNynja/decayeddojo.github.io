<template>
  <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg.webp);">
    <HeaderSection />
    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
    <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle" :BreadcrumbParent="BreadCrumbParent" :BreadcrumbParentURL="BreadcrumbParentURL"/>
    <AllStreams />
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
    AllStreams: () => import("@/components/Streams/AllStreams"),
  }, 
  data() {
      return {
          navOpen: false,
          paddingTop: "pt-32",
          BreadcrumbTitle: "Our Latest Streams",
          BreadcrumbSubTitle: "All Streams",
          BreadCrumbParent: "Home",
          BreadcrumbParentURL: "/",
      }
  },
}
</script>