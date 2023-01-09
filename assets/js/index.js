window.addEventListener('load', function(){
    document.querySelector('body').classList.add('show_page');
})


const config = {
    type: 'carousel',
    animationDuration: 700,
    perView: 1,

    breakpoints: {
        865: {
            perView: 1
        }
    }
}
const glide = new Glide(".glide", config).mount()







let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.7;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
        e.preventDefault();
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}


document.addEventListener('mousemove', parallax);
const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

function parallax(e) {
    if (!isMobile) {
        this.querySelectorAll('.layer').forEach(layer => {
            let z = layer.getAttribute('data-id');
            let x = (window.innerWidth - e.pageX * 1 * z) /100;
            layer.style.transform = `translateX(${x}px`
        });
        this.querySelectorAll('.slide_img').forEach(layer => {
            let y = (window.innerHeight - e.pageY * 2) / 10;
            layer.style.transform = `translateY(${y}px`
        });
    } 
}


const menu_btn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
const menu_links = document.querySelectorAll('.menu_links_wrap a');

menu_btn.addEventListener('click', function(){
    menu.classList.toggle('menu_show');
    menu_btn.classList.toggle('menu_btn_active');

})

menu_links.forEach(element => {
    element.addEventListener('click', function(){
        menu.classList.remove('menu_show');
        menu_btn.classList.remove('menu_btn_active');
    })
});