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
    $('#main-wrapper').toggleClass("click-to-exit");
  }

  $('.diamonds').on('click', '.diamond', function(e) {
    var $diamond = $(this)
    if (!$diamond.hasClass('maximized')) {
      $('#main-wrapper').toggleClass("click-to-exit");
      $diamond.parent().siblings().slideUp('slow');
      $diamond.children('.content').hide();

      var widthAmt;
      if ($('#wedding-content').is(e.target)) {
        widthAmt = '90vw';
      } else {
        widthAmt = '50vw';
      }

      $diamond.animateRotate(45, 0, {
        duration: 500,
        easing: 'swing',
        complete: function() {
          $diamond.animate({
            width: widthAmt,
            height: '95vh'
          }, 1000);

          $diamond.toggleClass("maximized");
          setTimeout(function(){

          },1000)
        }
      });
    }
  });

  $('.diamonds').on('click', '.close-maximized', function(e) {
    reset();
  })

  $('body').on('click', function (e){
    if ( $('.maximized:visible').length > 0
      && !$('.diamond').is(e.target)
      && !$('.maximized').is(e.target)
      && !$('.li-container').is(e.target) ) {
      reset();
    }
  });
});

$(function(){ $(document).foundation(); });
