$("#portfolio").slick({
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button class="portfolio__arrow  portfolio__arrow--prev" type="button"><svg class="portfolio__arrow-icon"><use xlink:href="#arrow"></use></svg></button>',
    nextArrow: '<button class="portfolio__arrow  portfolio__arrow--next" type="button"><svg class="portfolio__arrow-icon"><use xlink:href="#arrow"></use></svg></button>'
});