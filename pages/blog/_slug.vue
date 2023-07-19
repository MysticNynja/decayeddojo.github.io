<template>
  <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg2.webp);">

    <HeaderSection/>

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <Breadcrumb :BreadcrumbTitle="this.blogData.title" :BreadcrumbSubTitle="this.blogData.title" :BreadcrumbParent="BreadCrumbParent" :BreadcrumbParentURL="BreadcrumbParentURL"/>

    <div class="details">
        <div class="container">

            <div class="grid mb-20">
                <div class="single-grid">
                    <div class="post-top-area max-w-4xl m-auto text-center mb-16">
                        <ul class="flex mb-8 justify-center text-white">
                            <li class="relative pr-8 content-after after:bg-primary after:absolute after:top-3 after:right-4 after:w-1 after:h-1 after:rounded-full">
                                By <span>{{ blogData.author }}</span>
                            </li>
                            <li class="relative pr-8 content-after after:bg-primary after:absolute after:top-3 after:right-4 after:w-1 after:h-1 after:rounded-full">
                                <span>{{blogData.date}}</span>
                            </li>
                            <li class="">
                                <span>{{ blogData.readTime }} read</span>
                            </li>
                        </ul>
                    </div>
                    <div class="my-8 space-x-3 text-white text-center flex items-center justify-center">
                        <div v-for="(tag, index) in blogData.tags" :key="index">
                            <n-link to="/" class="px-4 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid relative rounded-md lowercase"> {{ tag }}</n-link>
                        </div>
                    </div>
                    <div class="text-center">
                        <img :src="blogData.imgLarge" alt="">
                    </div>
                    <div class="content max-w-4xl m-auto mt-20">                    
                        <div class="description">
                            <div class="mb-5" v-for="(elem, index) in blogData.content" :key="index">
                                <h4 v-if="elem.h4" class="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase transition-all leading-9">{{ elem.h4 }}</h4>
                                <p v-else-if="elem.p" class="leading-8">{{ elem.p }}</p>
                                <img v-else-if="elem.img" class="rounded-3xl" :src="elem.img" alt="">
                                <blockquote v-else-if="elem.blockquote" class="my-5"><p class="font-bold text-yellow italic lg:text-3xl text-xl">{{ elem.blockquote }}</p></blockquote>
                            </div>

                            <div class="social-share-wrap items-center mt-14 py-6 border-b-2 border-t-2 border-secondary-80 flex flex-col sm:flex-row justify-between">
                                <h3 class="share font-bold text-2xl uppercase">Share This Article:</h3>
                                <ul class="post-social-list space-x-2 mt-5 sm:mt-0">
                                    <li class="inline-block">
                                        <a class="px-3 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid rounded-md" href="https://www.facebook.com"><i class="icofont-facebook"></i></a>
                                    </li>
                                    <li class="inline-block">
                                        <a class="px-3 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid rounded-md" href="https://www.twitter.com"><i class="icofont-twitter"></i></a>
                                    </li>
                                    <li class="inline-block">
                                        <a class="px-3 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid rounded-md" href="https://www.instagram.com"><i class="icofont-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <BlogListinDetails />

        </div>
    </div>

    <Footer/>

  </div>
</template>

<script>
import blogData from '@/data/blog.json'
export default {
    props: ["match"],
    components: {
        HeaderSection: () => import('@/components/HeaderSection'),
        OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
        Breadcrumb: () => import('@/components/Breadcrumb'),
        BlogListinDetails: () => import('@/components/Blog/BlogListinDetails'),
        Footer: () => import('@/components/Footer'),
    },
    data() {
        return {
            blogData,
            slug: this.$route.params.slug,
            navOpen: false,
            BreadcrumbTitle: "Blog Without Sidebar",
            BreadCrumbParent: "All Blog Posts",
            BreadcrumbParentURL: "/blog",
            paddingTop: "pt-32"
        }
    },
    mounted () {
        this.blogData = blogData.find(blog => blog.slug == this.$route.params.slug);
    }
}
</script>