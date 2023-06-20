<template>
    <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg.webp);">
      <HeaderSection/>
      <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
    </div>
  </template>
  
  <script>
  export default {
    components: {
        HeaderSection: () => import('@/components/HeaderSection'),
        OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
    }, 
    data() {
        return {
            navOpen: false,
            paddingTop: "pt-32"
        }
    },
  }
  </script>