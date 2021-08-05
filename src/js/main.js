(function() {
  const $header = $(".header");
  const scroll = 0;
  const active = "active";
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > scroll) {
      $header.addClass(active);
    } else {
      $header.removeClass(active);
    }
  });

  $('.hamburger').on('click', () => {
    $('.hamburger').toggleClass('active')
    $('.menu').toggleClass('active')
  });

  $(".lightScroll").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
  });
})()