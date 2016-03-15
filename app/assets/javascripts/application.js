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

  // $.fn.animateRotate = function(startAngle, endAngle, duration, easing, complete){
  //   return this.each(function(){
  //       var elem = $(this);

  //       $({deg: startAngle}).animate({deg: endAngle}, {
  //           duration: duration,
  //           easing: easing,
  //           step: function(now){
  //               elem.css({
  //                 'transform':'rotate('+now+'deg)'
  //               });
  //           },
  //           complete: complete || $.noop
  //       });
  //   });
  // };

  $('.diamond').click(function(e) {
    $(this).parent().siblings().slideUp('slow');
    $(this).children('.content').hide();
    $(this).animateRotate(45, 0, {
      duration: 1000,
      easing: 'swing',
      complete: function() {
        $(this).animate({
          width: '50%',
          height: '610px',
          'margin-top': '-3%',
          'margin-left': '55%',
          'margin-right': '0'
        }, 500);
      }
    });
  });

});
