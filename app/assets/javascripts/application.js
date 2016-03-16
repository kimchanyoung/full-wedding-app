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

  var aboutUsContent ="<div class='row'><div class='large-12 text-center columns'><p>Hi there. this is some content. This is where content goes. This will be information about us and stuff.</p></div></div>";

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
    $('.maximized').slideUp();
    $('.diamonds').html($backup.clone().children());
    $('.diamonds').slideDown();
  }

  $('.title').click(function(){
    reset();
  })

  $('.diamonds').on('click', '.diamond', function(e) {
    if (!$(this).hasClass('maximized')) {
      $(this).parent().siblings().slideUp('slow');
      $(this).children('.content').hide();
      $(this).animateRotate(45, 0, {
        duration: 500,
        easing: 'swing',
        complete: function() {
          $(this).animate({
            width: '450px',
            height: '620px',
            'margin-top': '-3%',
            'margin-left': '55%',
            'margin-right': '0'
          }, 500);
          $(this).toggleClass("maximized");
          // var $thisContent = $(this).children('.full-content');
          // $thisContent.slideDown();
        }
      });
    }
  });

});
