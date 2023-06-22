<template>
    <!-- Faq Accordion Start  -->
    <div class="container overflow-hidden">
        <ul>
            <li v-for="(category, index) in paginatedOrders" :key="index" @click="visible=index" class="text-white cursor-pointer border-2 border-secondary-80 py-7 px-8 md:px-12 rounded-xl mb-7 text-lg md:text-2xl font-bold uppercase">
                {{ category.title }}
                <div class="cursor-text text-base capitalize text-gray-300 font-normal leading-8 mt-5" v-show="visible===index">
                    <p>{{ category.text }} <h3 v-if="category.email"><a href='mailto:work@decayeddojo.com'>work@decayeddojo.com</a></h3></p>
                </div>
            </li>
        </ul>
    </div>
    <!-- Faq Accordion End -->
</template>

<script>
    export default {
        name: "trial-page",
        data() {
            return {
                paginatedOrders: [
                    {
                        title: "What did you stumble upon?",
                        text: "We just like to play games and post about it.  Reality is that I, Will, am using this to sharpen my dev skills so this is a project for me.  Kelly has hopes of making content for a living.  We are both trying to do something beter for ourselves, and we get to play games. So win, win."
                    },
                    {
                        title: "Is this content explicit?",
                        text: "Hell Fucking Yeah! Look if we had a president that can tell someone we can grab women by the pussy, I can say fuck every once and a while.  But to be fair the games and content we talk about is more mature anyway, so yes we act like the games.  Just no murder."
                    },
                    {
                        title: "When can we expect more content?",
                        text: "At first it will be sporatic, so follow us on social stuff if you really are in to it.  At some point we will make a calendar and stick to a schedule.  For right now we are getting our feet wet and will see what works for us since we both work Full Time opposite schedules."
                    },
                    {
                        title: "Can we expect pro skills on the games you play?",
                        text: "Absolutely not.  We are here to have fun, tell jokes, laugh, and have a good time.  If we happen to do something awesome make sure to let us know with comments or whatever!"
                    },
                    {
                        title: "Are you just doing this for the money?  Where is the passion for just playing games and entertaining?",
                        text: "Look, if I was going to say I didn't care about the money I would be lying.  The point of this is to get to a point where it becomes a source of income.  I do care about entertaining, but the fact that this makes money is definitely a motivator. Now that being said we can't be bought so anything I say on this platform is my opinion."
                    },
                    {
                        title: "For whatever reason I'd like to work with you guys.",
                        text: "Wow.... Ok, never thought you'd get this far.  Just send us an email at:",
                        email: true
                    },
                    {
                        title: "How is the best way to support you?",
                        text: "For now its just watching, subscribing, and all that good jazz.  Later we will have all the things like subs, tips, maybe a patreon.  The thing I want to start is a store, but just not copy/paste shirts.  When that gets up and going, that would be the best way to support us."
                    }
                ],
                visible: null
            }
        }
    };
</script>

<style>
</style>
