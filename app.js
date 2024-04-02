particlesJS.load('particles-js', 'config/particles.json');

document.addEventListener("scroll", (e) => {
    if(window.scrollY > 150){
        document.querySelectorAll("#imgResponsive")[0].classList.add("smooth")
    }
})