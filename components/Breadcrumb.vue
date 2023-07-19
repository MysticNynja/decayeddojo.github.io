<template>
    <!-- Breadcrumb Start -->
    <div class="flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover h-365 md:h-460 lg:h-500">
        <div class="container">
            <div class="relative 2xl:pt-20 lg:pt-16 pt-12 md:z-10 flex flex-col justify-center items-center text-center">

                <h1 class="text-white font-display uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow" v-if="BreadcrumbTitle">{{BreadcrumbTitle}}</h1>

                <ul class="flex">
                    <li>
                        <n-link class="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary" v-if="BreadcrumbParentURL" :to=BreadcrumbParentURL>{{BreadcrumbParent}}</n-link>
                    </li>
                    <li>
                        <span class="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span>
                    </li>
                    <li>
                        <span class="text-primary uppercase text-base sm:text-lg font-bold" v-if="BreadcrumbSubTitle">{{BreadcrumbSubTitle}}</span>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->
</template>

<script>
    export default {
        props: {
            BreadcrumbTitle: {
                type: String,
                required: false,
            }, 
            BreadcrumbSubTitle: {
                type: String,
                required: false,
            }, 
            BreadcrumbParent: {
                type: String,
                required: false,
            }, 
            BreadcrumbParentURL: {
                type: String,
                required: false,
            }
        },
        components: {
        }
    };
</script>