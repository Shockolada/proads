$(document).ready(function () {

  $('.menu__btn').click(function () {
    event.preventDefault();
    $('.menu').toggleClass('active');
    $(this).toggleClass('hamburger-btn--close');
  });

  $('.faq__item-title').click(function () {
    var thisFaq = $(this).closest('.faq__item');

    $('.faq__item').find('.faq__info').stop().slideUp(200);
    thisFaq.find('.faq__info').stop().slideToggle(200);
    $('.faq__item').not(thisFaq).removeClass('faq__item--active').addClass('closed');
    thisFaq.toggleClass('faq__item--active').removeClass('closed');

    var faqOpened = $('.faq__item').hasClass('faq__item--active');
    if (!faqOpened) {
      $('.faq__item').removeClass('closed');
    }
  });

  $('.open-modal-contacts').click(function (evt) {
    evt.preventDefault();
    $('.overlay').fadeIn();
    $('#modal-contacts').fadeIn();
  });

  $('.overlay').click(function () {
    $(this).fadeOut();
    $('.modal').fadeOut();
  });

  $('.close-btn').click(function () {
    $('.overlay').fadeOut();
    $('.modal').fadeOut();
  });

  if ($(window).width() < 1024) {
    $('.site-nav__link--sumbenu').click(function () {
      $(this).toggleClass('opened').closest('.site-nav__item').find('.site-nav__submenu').slideToggle(200);
    });
  } else if ($(window).width() >= 1024) {
    $('.site-nav__link--sumbenu').mouseenter(function () {
      $(this).addClass('opened').closest('.site-nav__item').find('.site-nav__submenu').stop().slideDown(200);;
    });

    $('.site-nav__item.has-submenu').mouseleave(function () {
      $(this).find('.site-nav__link--sumbenu').removeClass('opened');
      $(this).find('.site-nav__submenu').stop().slideUp(200);
    });
  }

  if ($(window).width() < 1024) {
    $('.inner-menu__item').click(function () {
      $('.inner-menu__submenu').stop().slideUp(200);
      $(this).find('.inner-menu__submenu').stop().slideToggle(200);
    });
  } else if ($(window).width() >= 1024) {
    $('.inner-menu__item').mouseenter(function () {
      $(this).find('.inner-menu__submenu').stop().slideDown(200);;
    });

    $('.inner-menu__item').mouseleave(function () {
      $(this).find('.inner-menu__submenu').stop().slideUp(200);
    });
  }
});