window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
