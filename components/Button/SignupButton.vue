<template>

    <div class="flex items-center">
        <!-- Offcanvas Button Start -->
        <div class="lg:hidden block">
            <button class="icofont-navigation-menu text-white text-4xl ml-9" @click="mobiletoggleClass('addClass', 'show-mobile-menu')"></button>
        </div>
        <!-- Offcanvas Button End -->

    </div>

</template>

<script>
    export default {
        methods: {
            // offcanvas mobile-menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>