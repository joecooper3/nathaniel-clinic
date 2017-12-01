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
      * Changes the color of the logo
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
  function showAboutContainer() {
    $(".about-container").addClass("fadeInUp");
    $(".about-container").removeClass("hidden");
  }
  $(window).scroll(function() {
    var hT1 = $('#about').offset().top,
      hH1 = $('#about').outerHeight(),
      hT2 = $('#referrals').offset().top,
      hH2 = $('#referrals').outerHeight(),
      hT3 = $('#location').offset().top,
      hH3 = $('#location').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
      pureWS = $(this).scrollTop();
      console.log("hT1: " + hT1 + " || calc: " + (hT1 + hH1 - wH));
    if (wS > 400) {
      showAboutContainer();
    }
    if (logoStatus === 'green' && wS < hT1) {
      turnLogoWhite();
      console.log("top line");
    } else if (logoStatus === 'white' && wS > hT1 && wS < hT2) {
      turnLogoGreen();
      console.log("second line");
    } else if (logoStatus === 'green' && wS > hT2 && wS < hT3) {
      turnLogoWhite();
    } else if (logoStatus === 'white' && wS > hT3) {
      turnLogoGreen();
    }
    killArrow();
  });

});
