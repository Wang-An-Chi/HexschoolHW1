$(document).ready(function() {
  
  //回到網頁最上
  $('.top').click(function () {
    event.preventDefault();
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      500
    );

  });

  //下拉選單
  $('.dropdown').click(function () {
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();

  })

  });