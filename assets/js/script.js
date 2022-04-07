// ///fixd menu start///////
$(window).scroll(function () {
  if ($(window).scrollTop() > 150) {
    $(".navigation").addClass("fixd-menu")
  } else {
    $(".navigation").removeClass("fixd-menu")
  }

})
// ///fixd menu end///////

// $(".bar").click(function(){
//   $(".side-ber").addClass("show")
// })
// $(".close").click(function(){
//   $(".side-ber").removeClass("show")
// })

$(".down-arrow").click(function () {
  $(".down-arrow").toggleClass("down-arrow-roted")
  $(".service-none").toggleClass("service-show")
})

AOS.init();
// testimonial-slider start////
$('.testimonial-slider').slick({
  dots: false,
  arrows: true,
  prevArrow: '<i class="fas fa-chevron-left arrows  prevarrow"></i>',
  nextArrow: '<i class="fas fa-chevron-right arrows  nextarrow"></i>',
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [

    {
      breakpoint: 768.99,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }

  ]
});
// team-slider start////

// testimonial-slider end////
// testimonial-slider start////
$('.company-logo-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 300,
  responsive: [

    {
      breakpoint: 768.99,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]

});


// 


// why choose us slider

$('.customer-logos').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  initialSlide: 3,
  infinite: false,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 520,
    settings: {
      slidesToShow: 3
    }
  }]
});

// why choose us slider

$(document).ready(function () {

  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 6000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });


  // skills bar

  var offsetTop = $(".container_progress").offset().top;
  $(window).scroll(function () {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
      jQuery(".progress-bar").each(function () {
        jQuery(this).find(".progress-content").animate({
            width: jQuery(this).attr("data-percentage")
          },
          2000
        );

        jQuery(this).find(".progress-number-mark").animate({
          left: jQuery(this).attr("data-percentage")
        }, {
          duration: 2000,
          step: function (now, fx) {
            var data = Math.round(now);
            jQuery(this).find(".percent").html(data + "%");
          }
        });
      });
    }
  });


});


//