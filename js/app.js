var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
    loop: true,
    autoplay: {
        delay: 2000
    },
    speed: 800
})

var slider = new Swiper ('.slider', {
    loop: false,
    autoplay: {
        delay: 2000
    },
    speed: 800,
    pagination: {
        type: 'bullets',
        el:'.swiper-pagination'
    }
})