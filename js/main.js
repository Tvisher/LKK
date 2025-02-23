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
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        576: {
            spaceBetween: 30
        }
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

    if (target.closest('.bug-menu')) {
        document.querySelector('.mob-menu').classList.add('show')
    }

    if (target.closest('.nav-item')) {
        document.querySelector('.mob-menu').classList.remove('show')
    }
    if (target.closest('.mob-menu.show') && !target.closest('.header__nav')) {
        document.querySelector('.mob-menu').classList.remove('show')
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



const modalForm = document.querySelector('.modal-ex__form');
const filelds = document.querySelectorAll('.form-field');
filelds.forEach(el => {
    el.addEventListener('input', () => {
        el.classList.remove('err')
    })
})
// Маска на номера телефона
document.querySelectorAll('input[type="tel"]').forEach(input => {
    const mask = IMask(input, {
        mask: '+{7}(000) 000-00-00'
    });
});

function validateEmail(email) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const errList = [];
    filelds.forEach(el => {
        const filedValue = el.value.trim();
        if (!filedValue.length) {
            el.classList.add('err');
            errList.push(1);
        }
        if (el.name == 'fio' && filedValue.length < 3) {
            el.classList.add('err');
            errList.push(1);
        }

        if (el.name == 'email' && !validateEmail(filedValue)) {
            el.classList.add('err');
            errList.push(1);
        }
        if (el.name == 'tel' && filedValue.length < 17) {
            el.classList.add('err');
            errList.push(1);
        }


    });

    if (!errList.length) {
        const formData = new FormData(modalForm);
        $.ajax({
            type: 'POST',
            url: '/wp-content/themes/sp-theme-master/ajax/form.php',
            dataType: 'html',
            data: formData,
            processData: false,
            success: function (data) {
                console.log(1111, data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(222);
            },
        });
    }

})
