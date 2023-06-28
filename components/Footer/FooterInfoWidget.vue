<template>
    <div class="flex flex-col mr-12 xl:mr-100">
        <!-- Footer Logo Start -->
        <NuxtLink to="/" class="mb-10">
            <img src="/images/logo.webp" alt="Footer Logo">
        </NuxtLink>
        <!-- Footer Logo End -->

        <!-- Text Start -->
        <p>Would you kindly find us on social media.  There are many ways to keep in touch and we tend to be active on all these platforms.</p>
        <!-- Text End -->

        <!-- Social Icon List Start -->
        <ul class="grid grid-cols-6 gap-2 ">
            <li v-for="(link, index) in links" :key="index" class="mr-4 last:mr-0">
                <a :href="`${link.href}`" :style="{backgroundImage: `url(${ link.BgShape })`}" class="w-10 h-10 leading-10 text-center inline-block"><i :class="link.className"></i></a>
            </li>
        </ul>
        <!-- Social Icon List End -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {
                        href: "https://www.twitch.tv/decayeddojo",
                        BgShape: "/images/icon/twitch-bg.webp",
                        className: "icofont-twitch text-white"
                    },
                    {
                        href: "https://www.twitter.com/decayeddojo",
                        BgShape: "/images/icon/twittre.webp",
                        className: "icofont-twitter text-white"
                    },
                    {
                        href: "https://www.instagram.com/decayeddojo",
                        BgShape: "/images/icon/instagram-bg.webp",
                        className: "icofont-instagram text-white"
                    },
                    {
                        href: "https://www.youtube.com/decayeddojo",
                        BgShape: "/images/icon/youtobe-bg.webp",
                        className: "icofont-youtube text-white"
                    },
                    {
                        href: "https://www.kick.com/decayeddojo",
                        BgShape: "/images/icon/kick-bg.webp",
                        className: "icofont-vine text-black"
                    },
                    {
                        href: "https://www.tiktok.com/decayeddojo",
                        BgShape: "/images/icon/tiktok-bg.webp",
                        className: "icofont-tiktok text-black"
                    }
                ]
            }
        }
    }
</script>