/* ES6 */

import Swiper from "swiper";
import Swiper from "swiper/swiper-bundle";
import Swiper from "swiper/swiper-bundle.mjs";
import Swiper from "swiper/swiper-bundle.min.mjs";

var swiper = new Swiper(".swiper", {
    effect : "coverflow",
    grabCursor : true,
    centeredSlides : true,
    slidesPerView: 2,
    speed: 600,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 3,
        slideShadows: true,
    },
    loop: true,
    pagination: {
        el:".swiper-pagination",
        clickable: false,
    },
});