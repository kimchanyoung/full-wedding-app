// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .


$(function(){ $(document).foundation();
  $backup = Object.freeze($('.diamonds').clone());

  $.fn.animateRotate = function(startAngle, endAngle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
      args.complete = $.proxy(args.complete, e);
      args.step = function(now) {
        $.style(e, 'transform', 'rotate(' + now + 'deg)');
        if (step) return step.apply(e, arguments);
      };

      $({deg: startAngle}).animate({deg: endAngle}, args);
    });
  };

  var reset = function() {
    $('.diamond').slideUp();
    setTimeout(function(){
      $('.diamonds').html($backup.clone().children()).hide();
      $('.diamonds').slideDown();
    },500)
    $('.full-content').hide();
    $('#main-wrapper').toggleClass("click-to-exit");
  }

  $('.diamonds').on('click', '.diamond', function(e) {
    var $diamond = $(this)
    if (!$diamond.hasClass('maximized')) {
      $('#main-wrapper').toggleClass("click-to-exit");
      $diamond.parent().siblings().slideUp('slow');
      $diamond.parent().animate({
        'margin': '0',
        'left' : '5%',
        'top': '5%'
      })
      $diamond.children('.content').hide();


      var widthAmt;
      if ($('#about-content').is(e.target)) {
        widthAmt = '90vw';
        leftMargin = '-55vw';
      } else {
        widthAmt = '50vw';
        leftMargin = '-15vw';
      }

      $diamond.animate({
        top: '-2vh',
        left: leftMargin
      });

      $diamond.animateRotate(45, 0, {
        duration: 500,
        easing: 'linear',
        complete: function() {
          $diamond.animate({
            width: widthAmt,
            height: '85vh'
          }, 500);

          setTimeout(function(){
            $diamond.children('.full-content').slideDown('fast');
          }, 500);
          $diamond.toggleClass("maximized");
        }
      });
    }
  });

  $('.diamonds').on('click', '.close-maximized', function(e) {
    reset();
  })

  // $('body').on('click', function (e){
  //   if ( $('.maximized:visible').length > 0
  //     && !$('.diamond').is(e.target)
  //     && !$('.maximized').is(e.target)
  //     && !$('.li-container').is(e.target)
  //     && !$('.full-content').is(e.target) ) {
  //     reset();
  //   }
  // });
});

$(function(){ $(document).foundation(); });
