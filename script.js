$(document).ready(function() {

/** Set initial header to height of window **/
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('header').css('min-height', windowHeight);
  };
  setHeight();
  $(window).resize(function() {
    setHeight();
  });

  /** Little arrow on the bottom the header that encourages scrolling **/

  function killArrow() {
    $(".scroll-arrow").css("opacity", "0");
  }

  /** For the cycling "ailment" text **/

  var divs = $('div[id^="ailment-"]').hide(),
    i = 0;
  function cycle() {
    divs.eq(i).fadeIn(400).delay(1500).fadeOut(400, cycle);

    i = ++i % divs.length;

  };
  cycle();

  /**
      * Changes the color of the logo and triggers fadeInUp animations
      on scroll
      **/
  var logo = $("#veevee").find("path");
  var logoStatus = 'white';
  function turnLogoWhite() {
    logo.css({fill: '#fdfdfd'}).each;
    logoStatus = 'white';
  }
  function turnLogoGreen() {
    logo.css({fill: '#40ad48'}).each;
    logoStatus = 'green';
  }
  function fadeInUp(el) {
    el.addClass("fadeInUp");
    el.removeClass("hidden");
  }
  $(window).scroll(function() {
    var hT1 = $('#about').offset().top,
      hT2 = $('#referrals').offset().top,
      hT3 = $('#location').offset().top,
      wH = $(window).height(),
      wS = $(this).scrollTop(),
      aboutContainerBreak = $('.about-container').offset().top;
      microboxContainerBreak = $('.microbox-container').offset().top;
    if (wS > (aboutContainerBreak - wH * 0.75) ) {
      fadeInUp($(".about-container"));
    }
    if (wS > (microboxContainerBreak - wH * 0.75) ) {
      fadeInUp($(".microbox-container"));
    }
    if (logoStatus === 'green' && wS < hT1) {
      turnLogoWhite();
    } else if (logoStatus === 'white' && wS > hT1 && wS < hT2) {
      turnLogoGreen();
    } else if (logoStatus === 'green' && wS > hT2 && wS < hT3) {
      turnLogoWhite();
    } else if (logoStatus === 'white' && wS > hT3) {
      turnLogoGreen();
    }
    killArrow();
  });

});
