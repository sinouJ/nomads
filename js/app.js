var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    // autoplay: {
    //     delay: 2000
    // },
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
    },
    on: {
        transitionEnd: function() {
            var slide = document.querySelector('.swiper-slide-active[data-slide]');
            var attrSlide = slide.getAttribute('data-slide')
            var allImgEl = document.querySelectorAll('.iphone img')
            var imgEl = document.querySelector('[data-id="' + attrSlide + '"]');

            for (let i = 0; i < allImgEl.length; i++) {
                const ele = allImgEl[i];
                ele.classList.remove('active')
            }
            imgEl.classList.add('active')
        }
    }
})

function mockup(el) {
    var id = el.getAttribute('data-num');
    var imgEl = document.querySelector('[data-id="'+id+'"]');
    var allEl = document.querySelectorAll('.articles article')
    var allImgEl = document.querySelectorAll('.iphone img')


    for (var i = 0; i < allEl.length; i++) {
        var ele = allEl[i];
        ele.classList.remove('active');
    }

    for (var i = 0; i < allEl.length; i++) {
        var ele = allImgEl[i];
        ele.classList.remove('active');
    }
    
    el.classList.add('active');
    imgEl.classList.add('active')
}