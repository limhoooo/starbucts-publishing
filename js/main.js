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

window.addEventListener('scroll', _.throttle(
    ()=>{
        window.scrollY > 500 ?  
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