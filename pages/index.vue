<template>
  <div class="bg-cover bg-gray-800">
    <HeaderSection/>
    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
    <HeroBanner/>
    <GamingWorld/>
    <LiveStream />
    <PopularGame/>
    <BlogPost/>
    <Footer/>

  </div>
</template>

<script>
export default {
  components: {
      HeaderSection: () => import('@/components/HeaderSection'),
      HeroBanner: () => import('@/components/HeroBanner'),
      OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
      GamingWorld: () => import('@/components/GamingWorld'),
      LiveStream: () => import('@/components/LiveStream'),
      UpcomingMatchesHome: () => import('@/components/UpcomingMatchesHome'),
      PopularGame: () => import('@/components/Games/PopularGame'),
      BlogPost: () => import('@/components/BlogPost'),
      Footer: () => import('@/components/Footer')
  }, 
  data() {
      return {
          navOpen: false,
          paddingTop: "pt-32"
      }
  },
}
</script>
