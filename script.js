$(window).on('load', function () {
  setTimeout(function () {
    $(`.jumbotron img`).addClass('muncul');
  }, 1500);
  setTimeout(function () {
    $(`.jumbotron h1`).addClass('show');
  }, 500);

  setTimeout(function () {
    $(`.jumbotron p`).addClass('tampil');
  }, 1000);
});

// parallax
$(window).scroll(function () {
  let wScroll = Math.floor($(this).scrollTop());
  console.log(wScroll);

  // about
  if (wScroll > $('.about').offset().top - 200) {
    $('.about p.left').each(function (e) {
      setTimeout(function () {
        $('.about p.left').addClass('muncul');
      }, 400);
    });
    $('.about p.right').each(function (e) {
      setTimeout(function () {
        $('.about p.right').addClass('muncul');
      }, 600);
    });
  }

  //   portfolio
  // if (wScroll > $('.portfolio ').offset().top - 100) {
  //   $('.portfolio .card').each(function (i) {
  //     setTimeout(function () {
  //       $('.portfolio .card').eq(i).addClass('show');
  //     }, 400 * (i + 1));
  //   });
  // }
});
