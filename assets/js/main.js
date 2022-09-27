(function ($) {
    "use strict";

// Preloader
$(".preloader").delay(1600).fadeOut("slow");



// Sticky Menu
$(window).on( 'scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".header-menu-area").addClass("sticky");
    } else {
        $(".header-menu-area").removeClass("sticky");
    }
});


//Circular js start

function createChart(e) {
  const days = document.querySelectorAll(".chart-values li");
  const tasks = document.querySelectorAll(".chart-bars li");
  const daysArray = [...days];

  tasks.forEach(el => {
    const duration = el.dataset.duration.split("-");
    const startDay = duration[0];
    const endDay = duration[1];
    let left = 0,
      width = 0;

    if (startDay.endsWith("½")) {
      const filteredArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
      left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
    } else {
      const filteredArray = daysArray.filter(day => day.textContent == startDay);
      left = filteredArray[0].offsetLeft;
    }

    if (endDay.endsWith("½")) {
      const filteredArray = daysArray.filter(day => day.textContent == endDay.slice(0, -1));
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
    } else {
      const filteredArray = daysArray.filter(day => day.textContent == endDay);
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
    }

    // apply css
    el.style.left = `${left}px`;
    el.style.width = `${width}px`;
    if (e.type == "load") {
      el.style.backgroundColor = el.dataset.color;
      el.style.opacity = 1;
    }
  });
}

window.addEventListener("load", createChart);
window.addEventListener("resize", createChart);

//Circular js End


// Magnific Popup video
$('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    removalDelay: 160,
    fixedContentPos: false
});

// Magnific Popup gallery
$('.popup-gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    gallery: {
        enabled: true
    },
    type: 'image'
    // other options
});


// Magnific Popup Mujib
$('.popup-mujib').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    gallery: {
        enabled: true
    },
    type: 'image'
    // other options
});
        
// Mobile menu
$('.hamburger').on( 'click', function (event) {
    $(this).toggleClass('h-active');
    $('.main-nav').toggleClass('slidenav');
});
$('.header-home .main-nav ul li  a').on( 'click', function (event) {
    $('.hamburger').removeClass('h-active');
    $('.main-nav').removeClass('slidenav');
});

$(".main-nav .fl").on('click', function(event) {
    var $fl = $(this);
    $(this).parent().siblings().find('.sub-menu').slideUp();
    $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
    if($fl.hasClass('flaticon-plus')){
        $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
    }else{
        $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
    }
    $fl.next(".sub-menu").slideToggle();
});



  
// Service Slide

$('.circular-wrap').owlCarousel({
  items: 1,
  loop: true,
  smartSpeed: 1500,
  autoplay: false,
  dots: false,
  margin:24,
  nav: true,
  navText : ["<i class='ts ts-1 bx bxs-left-arrow-alt'></i>","<i class='ts ts-2 bx bxs-right-arrow-alt' ></i>"], 
  responsive:{
      0:{
          items:1
      },
      480:{
          items:1
      },

      768:{
          items:1
      },
      992:{
          items:1
      },
      1200:{
          items:1
      },
      1400:{
          items:1
      }

  } 
});

// Service Slide End




  
// Mujib Slide

$('.mujib-wrap').owlCarousel({
  items: 3,
  loop: true,
  smartSpeed: 1500,
  autoplay: false,
  dots: true,
  margin:24,
  nav: false,
  navText : ["<i class='ts ts-1 bx bxs-left-arrow-alt'></i>","<i class='ts ts-2 bx bxs-right-arrow-alt' ></i>"], 
  responsive:{
      0:{
          items:1
      },
      480:{
          items:1
      },

      768:{
          items:2
      },
      992:{
          items:2
      },
      1200:{
          items:3
      },
      1400:{
          items:3
      }

  } 
});

// Mujib Slide End


//Type js
var element = $(".element");
  $(function () {
      element.typed({
          strings: [`<a href="#">বি-২০২২ ব্যাচে নৌবাহিনী জাহাজের জন্য টেকনিক্যাল শাখায় ডাইরেক্ট এন্ট্রি আর্টিফিসার-৪র্থ ভর্তি বিজ্ঞপ্তি</a>`, `<a href="#">নাবিক ও এমওডিসি (নৌ) ভর্তি বি-২০২২ ব্যাচ এর বিজ্ঞপ্তি</a>`],
          typeSpeed: 80,
          loop: true,
          backDelay: 3500,
          startDelay: 1000,
      });
  });



// Contact Form Start

// Get the form.
var form = $('#contact-form');

// Get the messages div.
var formMessages = $('.form-message');

// Set up an event listener for the contact form.
$(form).on( 'submit', function(e) {
  // Stop the browser from submitting the form.
  e.preventDefault();

  // Serialize the form data.
  var formData = $(form).serialize();

  // Submit the form using AJAX.
  $.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
  })
  .done(function(response) {
    // Make sure that the formMessages div has the 'success' class.
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    // Set the message text.
    $(formMessages).text(response);

    // Clear the form.
    $('#contact-form input,#contact-form textarea').val('');
  })
  .fail(function(data) {
    // Make sure that the formMessages div has the 'error' class.
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    // Set the message text.
    if (data.responseText !== '') {
      $(formMessages).text(data.responseText);
    } else {
      $(formMessages).text('Oops! An error occurred. Message could not be sent.');
    }
  });
});
// Contact Form End


// Bottom to top start
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  });
  $('#scroll-top').on( 'click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
// Bottom to top End

//wow Animation
jQuery(window).on( 'load', function(){

  new WOW().init();
  window.wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true,        // default
    offset: 100,
    callback:function(box){},
    scrollContainer:null,
    resetAnimation:true
    }
  )
  window.wow.init();
         
});
//wow Animation End



// Odometer Counter
$(".counter-item").each(function () {
  $(this).isInViewport(function (status) {
  if (status === "entered") {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
      var el = document.querySelectorAll('.odometer')[i];
      el.innerHTML = el.getAttribute("data-odometer-final");
    }
  }
  });
});

// Button Auto Close

// document.getElementById("myButton").onclick = function () {
//   setTimeout(function(){
//     window.close();
//    },30);
// };



}(jQuery)); 
