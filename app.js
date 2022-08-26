let slides = document.querySelectorAll('.members')
let index  = 0
function next(){
    slides[index].classList.remove('active')
    index = (index+1)%slides.length
    slides[index].classList.add('active')
}
setInterval(next,5000)