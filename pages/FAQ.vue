<template>
  <div class="bg-cover bg-gray-800">
    
    <HeaderSection/>

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
    
    <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle"/>

    <FaqAccordion/>

    <Footer/>

  </div>
</template>

<script>
export default {
  components: {
      HeaderSection: () => import('@/components/HeaderSection'),
      OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
      Breadcrumb: () => import('@/components/Breadcrumb'),
      FaqAccordion: () => import('@/components/FaqAccordion'),
      Footer: () => import('@/components/Footer')
  },
  data() {
      return {
          navOpen: false,
          BreadcrumbTitle: "FAQ",
          BreadcrumbSubTitle: "Frequently asked questions",
          paddingTop: "pt-32"
      }
  },
}
</script>