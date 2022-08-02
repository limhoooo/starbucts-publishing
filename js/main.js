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
