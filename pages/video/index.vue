<template>
    <div class="bg-cover bg-gray-800">
      <HeaderSection />
      <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
      <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle" :BreadcrumbParent="BreadCrumbParent" :BreadcrumbParentURL="BreadcrumbParentURL"/>
      <AllVideos />
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
      AllVideos: () => import("@/components/Videos/AllVideos"),
    }, 
    data() {
        return {
            navOpen: false,
            paddingTop: "pt-32",
            BreadcrumbTitle: "Our Latest Videos",
            BreadcrumbSubTitle: "All Videos",
            BreadCrumbParent: "Home",
            BreadcrumbParentURL: "/",
        }
    },
  }
  </script>