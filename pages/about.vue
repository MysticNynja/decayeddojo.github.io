<template>
  <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg2.webp);">
    
    <HeaderSection/>

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
    
    <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle"/>

    <AboutUs/>

    <LiveStream/>

    <GamerTeam/>

    <Footer/>

  </div>
</template>

<script>
export default {
  components: {
      HeaderSection: () => import('@/components/HeaderSection'),
      OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
      Breadcrumb: () => import('@/components/Breadcrumb'),
      AboutUs: () => import('@/components/AboutUs'),
      LiveStream: () => import('@/components/LiveStream'),
      GamerTeam: () => import('@/components/GamerTeam'),
      Footer: () => import('@/components/Footer')
  },
  data() {
      return {
          navOpen: false,
          BreadcrumbTitle: "About Us",
          BreadcrumbSubTitle: "About Us",
          paddingTop: "pt-32"
      }
  },
}
</script>