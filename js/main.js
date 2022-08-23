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
const toTopEl = document.querySelector('#to-top')

// _.throttle(함수,시간)
window.addEventListener('scroll', _.throttle(
    ()=>{
        if(window.scrollY > 500) {  
        // 배지 숨기기
        // gsap.to(요소,지속시간,옵션)
        gsap.to(badgeEl,.6,{
            opacity: 0,
            display : 'none'
        })
        gsap.to(toTopEl, .2, {
            x: 0
          })
        }else { 
        gsap.to(badgeEl,.6,{
            opacity: 1,
            display : 'block'
        });
        gsap.to(toTopEl, .2, {
            x: 100
          })
    }
    },300
));

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
    console.log('aaa');
    // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
    gsap.to(window, .7, {
      scrollTo: 0
    })
  })

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
            prevEl: '.promotion .swiper-prev',
            nextEl: '.promotion .swiper-next',
        }
    }
);

new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
      nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    }
  })
  

const promtionEl = document.querySelector('.promotion');
const promtionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromtion = false;
promtionToggleBtn.addEventListener('click', ()=>{
    isHidePromtion = !isHidePromtion;
    if(isHidePromtion){
        promtionEl.classList.add('hide'); 
        promtionToggleBtn.classList.add('bottom'); 
    }else{
        promtionEl.classList.remove('hide') 
        promtionToggleBtn.classList.remove('bottom'); 
    }
    
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5,2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay : random(0,delay)
    })
 }

 floatingObject('.floating1', 1, 15)
 floatingObject('.floating2', 0.5, 15)
 floatingObject('.floating3', 1.5, 20)

//  요소(El)에 닿을때 class 를 toggle 해주는 function
 const spyEls = document.querySelectorAll('section.scroll-spy');
 spyEls.forEach((spyEl)=>{
    new ScrollMagic
        .Scene({
            triggerElement : spyEl, // 보여짐의 여부를 감시할 요소를 지정
            triggerHook: .8, // viewPort 감지될 위치 0(top) ~ 1(bottom)
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
 })

 /**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()