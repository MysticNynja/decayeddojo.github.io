<template>
    <!-- Menu Start -->
    <div class="px-8 hidden lg:block">
        <nav>
            <ul class="flex">
                <li class="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                    <NuxtLink to="/" class="text-white uppercase font-bold font-exo relative">Home</NuxtLink>
                </li>
                <li class="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                    <NuxtLink to="/blog" class="text-white uppercase font-bold font-exo relative">Blog</NuxtLink>
                </li>
                <li class="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                    <NuxtLink to="" class="text-white uppercase font-bold font-exo relative">Content</NuxtLink>
                    <ul class="flex flex-col bg-white absolute w-56 px-5 py-5 rounded left-0 right-auto top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all group-hover:top-9">
                        <li>
                            <NuxtLink to="/video" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Videos</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/stream" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Streams</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/podcast" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Podcast</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                    <NuxtLink to="" class="text-white uppercase font-bold font-exo relative">About</NuxtLink>
                    <ul class="flex flex-col bg-white absolute w-56 px-5 py-5 rounded left-0 right-auto top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all group-hover:top-9">
                        <li>
                            <NuxtLink to="/about" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">About Us</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/game" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Games</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/FAQ" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">FAQ</NuxtLink>
                        </li>
                    </ul>

                </li>
            </ul>
        </nav>
    </div>
    <!-- Menu End -->
</template>