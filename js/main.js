const aboutSlider = new Swiper('.about-section__slider', {
    slidesPerView: 1,
    speed: 900,
    spaceBetween: 30,
    loop: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
});


const tasksSlider = new Swiper('.tasks-event__slider', {
    slidesPerView: 'auto',
    speed: 900,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
});


const jurySlider = new Swiper('.jury-section__slider', {
    slidesPerView: 'auto',
    speed: 900,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

});


$(document).ready(function () {
    $(".faq__item").on("click", function () {
        const $item = $(this);
        const $body = $item.find(".item__body");

        // Закрыть другие
        $(".faq__item").not($item).removeClass("active").find(".item__body").slideUp();

        // Переключить текущее
        $item.toggleClass("active");
        $body.slideToggle();
    });
});

document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('[data-open-modal]')) {
        document.querySelector('.modal-ex').classList.add('show')

    }
})




lax.init()
lax.addDriver(
    "scrollY",
    function () {
        return window.scrollY;
    },
    {
        frameStep: 1,
        inertiaEnabled: true,
    }
);



lax.addElements(".lax-el", {
    scrollY: {
        translateX: [['elInY', 'elOutY'], ['screenWidth/4', '0']],
    },
})

lax.addElements(".lax-el", {
    scrollY: {
        translateX: [['elInY', 'elOutY'], ['elWidth/2', '0']],
    },
})


lax.addElements(".lax-el._rev", {
    scrollY: {
        translateX: [['elInY', 'elOutY'], ['0', 'elWidth/2']],
    },
})

