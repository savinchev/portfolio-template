$("#portfolio").slick({
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button class="portfolio__arrow  portfolio__arrow--prev" type="button"><svg class="portfolio__arrow-icon"><use xlink:href="#arrow"></use></svg></button>',
    nextArrow: '<button class="portfolio__arrow  portfolio__arrow--next" type="button"><svg class="portfolio__arrow-icon"><use xlink:href="#arrow"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 450,
            settings: "unslick"
        }
    ]
});