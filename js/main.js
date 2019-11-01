/*-----------------------------------------------------------
* Template Name    : Poricoy - Responsive Bootstrap 4 Personal Template
* Author           : ArifursDev
* Version          : 1.0.0
* Created          : October 2019
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

(function($) {
  "use strict";

  jQuery(document).ready(function($) {
    mobilemenu();
    smoothscroll_on_click();
    scrollspy();
    sticky();
    services_dynamic();
    portfolio_dynamic();
    portfolio_isotope_filter();
    singlePost();
    backToTop();
    googleMap();
    contact_form();

    // POSITION TOP ON RELOAD
    $(window).on('beforeunload', function() {
      "use strict";
      $(window).scrollTop(0);
    });

    // SMOOTHSCROLL //
    function smoothscroll_on_click() {
      "use strict";
      $("a.smoothscroll").on("click", function(event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
          scrollTop: $(section).offset().top - 78
        }, 500);
      });
    }

    // SCROLLSPY //
    function scrollspy() {
      "use strict";
      $(window).bind('scroll', function() {
        var currentTop = $(window).scrollTop();
        var elems = $('.scrollspy');
        elems.each(function(index) {
          var elemTop = $(this).offset().top - 80;
          var elemBottom = elemTop + $(this).height();
          if (currentTop >= elemTop && currentTop <= elemBottom) {
            var id = $(this).attr('id');
            var navElem = $('ul#mainmenu-items li a[href="#' + id + '"]');
            navElem.parent().addClass('active').siblings().removeClass('active');
          }
        })
      });
    }

    // MOBILEMENU //
    function mobilemenu() {
      "use strict";
      var mobileMenuWrap = $('.mobile-menu-wrap');
      var toggleMenu = $('.toggle-mobile-menu');
      var toggleClose = $('.toggle-close');
      var overlay = $('.overlay');
      var mainMenuItems = $('.main-menu').html();
      var mobileMenuItems = $('.mobile-menu-items');
      toggleMenu.click(function(e) {
        mobileMenuItems.html(mainMenuItems);
        mobileMenuWrap.addClass('opened');
        overlay.addClass('opened');
        smoothscroll_on_click();
      });
      toggleClose.click(function(e) {
        mobileMenuItems.html(' ');
        mobileMenuWrap.removeClass('opened');
        overlay.removeClass('opened');
      });
      overlay.click(function(e) {
        mobileMenuItems.html(' ');
        mobileMenuWrap.removeClass('opened');
        $(this).removeClass('opened');
      });

      $('.mobile-menu-items ul li a').click(function(e) {
        mobileMenuItems.html(' ');
        mobileMenuWrap.removeClass('opened');
        overlay.removeClass('opened');
        smoothscroll_on_click();
      });
      $(window).resize(function() {
        var viewportWidth = $(window).width();
        if (viewportWidth > 767) {
          mobileMenuItems.html(' ');
          mobileMenuWrap.removeClass('opened');
          overlay.removeClass('opened');
        }
      });
    }

    // STICKY //
    function sticky() {
      "use strict";
      var header = $('header.site-header');
      var profilecard = $('.header-card');
      var offset = header.offset().top + 80;
      $(window).on('scroll', function() {
        if ($(window).scrollTop() > offset) {
          header.addClass('scrolling');
          profilecard.addClass('sticky');
        } else {
          header.removeClass("scrolling");
          profilecard.removeClass("sticky");
        }
      });
    }

    // SERVICES HANDLER PARAMETERS //
    function services_dynamic() {
      "use strict";
      var service = $('.single-service');
      service.each(function() {
        var element = jQuery(this);
        var title = element.data('title');
        var img = element.data('img');
        var icon = element.data('icon');
        var desc = element.data('desc');
        if (element.data().hasOwnProperty("img")) {
          element.html('<div class="single-service-inner"><div class="service-icon"><img src="' + img + '" alt=""></div><h3>' + title + '</h3><p>' + desc + '</p></div>');
        }
        if (element.data().hasOwnProperty("icon")) {
          element.html('<div class="single-service-inner"><div class="service-icon"><span class="serviceicon"><i class="fa ' + icon + '"></i></span></div><h3>' + title + '</h3><p>' + desc + '</p></div>');
        }
      });
    }

    // PORTFOLIO HANDLER PARAMETERS //
    function portfolio_dynamic() {
      "use strict";
      var portfolio = jQuery('.single-item');
      portfolio.each(function() {
        var element = jQuery(this);
        var title = element.data('title');
        var img = element.data('img');
        var category = element.data('category');
        var cate = element.data('cate');
        element.parent().addClass('' + cate + '');
        element.html('<a href="' + img + '" data-lightbox="' + cate + '" data-title="' + title + '"><span class="toggle-item-view"><i class="fa fa-search"></i></span></a><div class="single-item-img"><img src="' + img + '" alt="' + title + '"></div><div class="single-item-info"><h3>' + title + '</h3><span class="portfolio-cat">' + category + '</span></div>');
      });
    }

    // PORTFOLIO FILTER ISOTOPE //
    function portfolio_isotope_filter() {
      "use strict";
      $('.portfolio-items .row').isotope({
        itemSelector: '.pitem',
      });
      $('.portfolio-filter ul li').click(function(event) {
        $('.portfolio-filter ul li').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $('.portfolio-items .row').isotope({
          filter: selector
        });
      });
    }


    // SINGLE POST DISPLAY
    function singlePost() {
      "use strict";
      var article = $('article.single-post');
      var popup = $('.single-post-wrap-popup');
      var popupThumb = popup.find('.post-thumbnail');
      var popupDetails = popup.find('.post-header-details');
      var closePopup = $('.close-post-popup');
      var overlay = $('.popup-overlay');
      article.each(function() {
        var element = $(this);
        var title = element.find('h3.entry-title a');
        var thumbImg = element.find('.thumbimg').html();
        var postDetails = element.find('.single-post-details').html();
        title.click(function(e) {
          e.preventDefault();
          popup.addClass('opened');
          popupThumb.html(thumbImg);
          popupDetails.html(postDetails);
        });
        overlay.click(function(e) {
          e.preventDefault();
          popup.removeClass('opened');
        });
        closePopup.click(function(e) {
          e.preventDefault();
          popup.removeClass('opened');
        });
      });
    }


    // BACK TO TOP //
    function backToTop() {
      "use strict";
      if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
          backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
              $('#back-to-top').addClass('show');
            } else {
              $('#back-to-top').removeClass('show');
            }
          };
        backToTop();
        $(window).on('scroll', function() {
          backToTop();
        });
        $('#back-to-top').on('click', function(e) {
          e.preventDefault();
          $('html,body').animate({
            scrollTop: 0
          }, 700);
        });
      }
    }

    // GOOGLE MAP
    function googleMap() {
      var iframe = $('.googleMap');
      var lat = iframe.data('lat');
      var long = iframe.data('long');
      var place = iframe.data('place-name');
      var zoom = iframe.data('zoom');
      iframe.attr('src', 'https://maps.google.com/maps?width=100%&height=600&hl=en&coord='+ lat +','+ long +'&q='+ place +'&ie=UTF8&t=&z='+ zoom +'&iwloc=B&output=embed');
    }

    // CONTACT FORM
    function contact_form() {
      "use strict";
      var name = $("#name").val();
      var email = $("#email").val();
      var submit = $('#send_message');

      $('.returnmessage').hide(1000);
      submit.click(function(e) {
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: 'contact-handler.php',
          data: 'user_name=' + $("#name").val() + '&user_email=' + $("#email").val() + '&user_message=' + $("#message").val(),
          success: function(data) {
            $('.returnmessage').show(1000);
            $('.returnmessage').html(data);
          },
          error: function() {}
        });

      });
    }

  });

}(jQuery));
