<template>
    <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg2.webp);">
        <HeaderSection/>
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <Breadcrumb :BreadcrumbTitle="streamData.title" :BreadcrumbSubTitle="streamData.game" :BreadcrumbParent="BreadCrumbParent" :BreadcrumbParentURL="BreadcrumbParentURL"/>
        <div class="details">
            <div class="container">
                <div class="single-grid">
                    <div class="text-center">
                        <section>
                            <iframe width="1170" height="670" :src="streamData.videoSrc" title="Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </section>
                    </div>
                    <div class="content max-w-4xl m-auto mt-20">                    
                        <div class="description">
                            <h4 class="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase transition-all mb-2 sm:mb-5 leading-9">{{ streamData.videoDescTitle }}</h4>
                            <p class="leading-8">{{ streamData.videoDescBody }}</p> 
    
                            <div class="social-share-wrap items-center mt-14 py-6 border-b-2 border-t-2 border-secondary-80 flex flex-col sm:flex-row justify-between mb-20">
                                <h3 class="share font-bold text-2xl uppercase">Share This Video:</h3>
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
                        <h4 class="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase transition-all mb-2 sm:mb-5 leading-9">Game Details from Video</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 item-display">
                            <div class="item relative group  before:content-[''] before:absolute before:w-full before:h-full before:opacity-0 before:bg-black before:top-0 before:left-0 before:right-0 before:bottom-0 overflow-hidden hover:before:opacity-70 transition-all hover:before:transition-all before:border-4 before:border-white before:rounded-4xl before:border-opacity-20">
                                <img class="w-full rounded-4xl" :src="gameHome.gameImage" alt="Feature Icon">
                                <n-link :to="`/game/${gameHome.slug}`" class="group primary-btn absolute-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all" style="background-image:url(/images/others/btn-bg.webp)">
                                    {{gameHome.btnName}}
                                    <img src="/images/icon/arrrow-icon.webp" alt="Arrow Icon" class="ml-3 w-5 h-5 group-hover:ml-4 transition-all">
                                </n-link>
                            </div>
                        </div>
                    </div>
                    <GamerTeam />
                </div>
                <StreamListinDetails />  
            </div>
        </div>
        <Footer/>
    </div>
    </template>
    
    <script>
        import streamData from '@/data/streams.json'
        import gameHome from '@/data/games.json'
        export default {
            props: ["match"],
            components: {
                HeaderSection: () => import('@/components/HeaderSection'),
                OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
                Breadcrumb: () => import('@/components/Breadcrumb'),
                StreamListinDetails: () => import('@/components/Streams/StreamListinDetails'),
                GameDetails: () => import('@/components/Games/GameDetails'),
                GamerTeam: () => import('@/components/GamerTeam'),
                Footer: () => import('@/components/Footer')
            },
            data() {
                return {
                    BreadCrumbParent: "All Streams",
                    BreadcrumbParentURL: "/stream",
                    streamData,
                    gameHome,
                    slug: this.$route.params.slug,
                    navOpen: false,
                }
            },
            mounted () {
                this.streamData = streamData.find(blog => blog.slug == this.$route.params.slug);
                this.gameHome = gameHome.find(games => games.slug == this.streamData.gameSlug);
            }
        }
    </script>