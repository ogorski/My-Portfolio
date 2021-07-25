/* Our Services Section Script */

$('[data-tab]').click(function () {
    $(this)
        .addClass('our-service__active')
        .siblings('[data-tab]')
        .removeClass('our-service__active');
    $(`[data-contents = "${$(this).data('tab')}"]`)
        .addClass('os-description-box__active')
        .siblings('[data-contents]')
        .removeClass('os-description-box__active');
});

/* Our Works Section Script */

$('.ow-loader').hide();
$('.ow-gallery-item').hide();
$('.ow-gallery-item').slice(0, 12).show();
$('.ow-load-btn').click(function () {
    $('.ow-loader').show();
    setTimeout(() => {
        $('.ow-gallery-item:hidden').slice(0, 12).show();
        if (!$('.ow-gallery-item').is(':hidden')) {
            $(this).hide();
        }
        $('.ow-loader').hide();
    }, 2000);
    $(this)
          .addClass('ow-menu-item')
          .siblings('[data-tabs]')
          .removeClass('ow-menu-item');
    $(`[ow-gallery-item = "${$(this).data('tabs')}"]`)
          .addClass('ow-gallery')
          .siblings('[data-tabs]')
          .removeClass('ow-gallery-item');   
});

$('.ow-menu-item').click(function () {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');
  });

  $('.ow-menu-item').click(function () {
    let category = $(this).attr('data-tabs');

    $('.ow-gallery-item').addClass('hide');
    setTimeout(function () {
      $(`.${category}`).removeClass('hide');
    }, 600);
  });

// HAM REVIEWS SECTION

$('.news-gallery-item').hover(
  function () {
    $(this).siblings().addClass('gray')
  },
  function () {
    $(this).siblings().removeClass('gray')
  }
);

// slider
$('.review-txt').hide().first().show();
$('.author-name').hide().first(1, 2, 3, 4).show();
$('.author-rank').hide().first(1, 2, 3, 4).show();
$('.main-img').hide().first().show();

let autoSlideID = slideAuto(3000);
let slideIndex

$('.stripe-img').on('click', function () {
  $(this)
    .addClass('active')
    .siblings()
    .removeClass('active');

  changeInfo();
  clearInterval(autoSlideID);
  autoSlideID = slideAuto(10000);
});

$('.slider-arrow').on('click', function () {
  if ($(this).hasClass('left')) {
    const activeIndex = $('.stripe-img.active').index();
    const newIndex = (activeIndex === 0) ? 3 : activeIndex - 1;

    $(`.stripe-img:eq(${newIndex})`)
      .addClass('active')
      .siblings()
      .removeClass('active');

    changeInfo();
    clearInterval(autoSlideID);
    autoSlideID = slideAuto(10000);
  }
  if ($(this).hasClass('right')) {
    const activeIndex = $('.stripe-img.active').index();
    const newIndex = (activeIndex === 3) ? 0 : activeIndex + 1;

    $(`.stripe-img:eq(${newIndex})`)
      .addClass('active')
      .siblings()
      .removeClass('active');

    changeInfo();
    clearInterval(autoSlideID);
    autoSlideID = slideAuto(10000);
  }
});

function slideAuto(interval) {
  return setInterval(function () {
    const activeIndex = $('.stripe-img.active').index();
    const newIndex = (activeIndex === 3) ? 0 : activeIndex + 1;

    $(`.stripe-img:eq(${newIndex})`)
      .addClass('active')
      .siblings()
      .removeClass('active');

    changeInfo();
  }, interval);
}

function changeInfo() {
  const activeIndex = $('.stripe-img.active').index();

  $(`.review-txt:eq(${activeIndex})`)
    .fadeIn(1600)
    .siblings('.review-txt')
    .hide();
  $(`.author-name:eq(${activeIndex})`)
    .fadeIn(1200)
    .siblings('.author-name')
    .hide();
  $(`.author-rank:eq(${activeIndex})`)
    .fadeIn(800)
    .siblings('.author-rank')
    .hide();
  $(`.main-img:eq(${activeIndex})`)
    .fadeIn(400)
    .siblings('.main-img')
    .hide();
}