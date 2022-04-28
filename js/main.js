
let tabsContentItem = document.querySelectorAll('.getin__item');   
tabsContentItem.forEach((el, index) => {
    el.addEventListener('mouseenter', function (e) {
        for (let i = 0; i < tabsContentItem.length; i++) {
            tabsContentItem[i].classList.remove('active')
        }
        this.classList.add('active')
        tabsContentItem[index].classList.add('active')
    })

});


let exCard = document.querySelector('.expriense'),
    exCount =document.querySelectorAll('.ex__count')
window.addEventListener('scroll', function onScroll(e) {
    if (window.scrollY + window.innerHeight >= exCard.offsetTop) {
        exCount.forEach(el=>{
            const timeAttr = el.getAttribute('data-timer')
            function scrollCount(k = 0) {
                el.innerHTML = k
                k++
                if (k <= timeAttr) {
                    setTimeout(() => {
                        scrollCount(k) 
                    }, 50);
                }
            }
            scrollCount()
        })
        window.removeEventListener('scroll',onScroll)
    }
   
})