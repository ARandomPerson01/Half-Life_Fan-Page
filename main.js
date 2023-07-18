//SCROLL SECTION
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-links a[href*='+ sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav-links a[href*='+ sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

//SCROLL UP
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)