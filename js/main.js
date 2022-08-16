const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', ()=>{
    searchInputEl.focus()
});

searchInputEl.addEventListener('focus',()=>{
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur',()=>{
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

// _.throttle(함수,시간)
window.addEventListener('scroll', _.throttle(
    ()=>{
        window.scrollY > 500 ?  
        // 배지 숨기기
        // gsap.to(요소,지속시간,옵션)
        gsap.to(badgeEl,.6,{
            opacity: 0,
            display : 'none'
        }) : 
        gsap.to(badgeEl,.6,{
            opacity: 1,
            display : 'block'
        })
    },300
));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(el=>{
     // gsap.to(요소,지속시간,옵션)
    gsap.to(el, 1, {
        delay: (el.getAttribute('data-time') ) * .7,
        opacity : 1
    });
});

new Swiper('.notice-line .swiper-container', {
        direction: 'vertical', // 수직
        autoplay : true,
        loop: true,
    }
);
new Swiper('.promotion .swiper-container', {
        direction: 'horizontal', // 수평
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay : {
            delay: 5000
        },
        pagination: {
            el: '.promotion .swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.promotion swiper-prev',
            nextEl: '.promotion swiper-next',
        }
    }
);