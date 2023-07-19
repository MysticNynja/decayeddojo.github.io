<template>
    <div class="mobile-navigation">
        <nav class="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li class="menu-item-has-children">
                    <n-link class="text-base font-semibold capitalize block pb-4 pt-4 pt- border-b-1 border-gray-200 transition-all hover:text-primary text-black text-dark" to="/">Home</n-link>
                </li>

                <li class="menu-item-has-children">
                    <n-link class="text-base font-semibold capitalize block pb-4 pt-4 pt- border-b-1 border-gray-200 transition-all hover:text-primary text-black text-dark" to="/blog">Blog</n-link>
                </li>

                <li class="menu-item-has-children relative block">
                    <n-link class="text-base font-semibold capitalize block pb-4 pt-4  border-b-1 border-gray-200 transition-all hover:text-primary text-black" to="">Content</n-link>
                    <ul class="sub-menu ml-5">
                        <li>
                            <n-link class="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black" to="/video">Vidoes</n-link>
                        </li>
                        <li>
                            <n-link class="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black" to="/stream">Streams</n-link>
                        </li>
                        <li>
                            <n-link class="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black" to="/podcast">Podcast</n-link>
                        </li>
                    </ul>
                </li>

                <li class="menu-item-has-children relative block">
                    <n-link class="text-base font-semibold capitalize block pb-4 pt-4  border-b-1 border-gray-200 transition-all hover:text-primary text-black" to="">About</n-link>
                    <ul class="sub-menu ml-5">
                        <li>
                            <n-link class="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black" to="/about">About Us</n-link>
                        </li>
                        <li>
                            <n-link class="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black" to="/game">All Games</n-link>
                        </li>
                        <li>
                            <n-link class="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black" to="/faq">FAQ</n-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        name: 'MobileNavMenu',
        mounted() {
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');

            for (let i = 0; i < offCanvasNavSubMenu.length; i++){
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i class='plus-minus'></i></span>");
            }
        
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
        
            for (let i = 0; i < numMenuExpand; i++) {
                menuExpand[i].addEventListener("click", (e) => {sideMenuExpand(e)});
            }
        
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => {closeMobileMenu()});
            }

            const sideMenuExpand = (e) => {
                e.currentTarget.parentElement.classList.toggle('active');
            }
            const closeMobileMenu = () => {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu?.classList.remove('active');
            }
        }
    };
</script>