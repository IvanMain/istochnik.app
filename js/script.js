// author-video
(() => {
    const CLASS_HIDDEN = 'hidden';

    const btn = document.querySelector('.author__play-btn');
    const img = document.querySelector('.author__avatar-img-item');
    const video = document.querySelector('.author__avatar-video');

    btn.addEventListener('click', () => {
        btn.classList.add(CLASS_HIDDEN)
        img.classList.add(CLASS_HIDDEN)
        video.classList.remove(CLASS_HIDDEN)
    });
})();

// reviews
(() => {
    const reviews = document.querySelector('.reviews-slider');

    $(document).ready(function() {
        $(reviews).slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            responsive: [{
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }]
        });
    });
})();