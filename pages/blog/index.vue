<template>
  <div class="bg-cover bg-gray-800">
    <HeaderSection/>
    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
    <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle" :BreadcrumbParent="BreadCrumbParent" :BreadcrumbParentURL="BreadcrumbParentURL"/>
    <BlogList />
    <Footer/>
  </div>
</template>

<script>
export default {
  components: {
      HeaderSection: () => import('@/components/HeaderSection'),
      OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
      Breadcrumb: () => import('@/components/Breadcrumb'),
      BlogList: () => import('@/components/Blog/BlogList'),
      Footer: () => import('@/components/Footer')
  },
  data() {
      return {
          navOpen: false,
          BreadcrumbTitle: "Blog",
          BreadcrumbSubTitle: "All Articles",
          paddingTop: "pt-32",
          BreadCrumbParent: "Home",
          BreadcrumbParentURL: "/",
      }
  },
}
</script>