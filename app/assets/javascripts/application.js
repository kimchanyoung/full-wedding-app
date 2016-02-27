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
  $('#about-btn').click(function(e){
    $('#wedding-content').hide();
    $('#registry-content').hide();
    $('#rsvp-content').hide();
    $('#about-content').show();
  });

  $('#wedding-btn').click(function(e){
    $('#about-content').hide();
    $('#registry-content').hide();
    $('#rsvp-content').hide();
    $('#wedding-content').show();
  });

  $('#registry-btn').click(function(e){
    $('#about-content').hide();
    $('#wedding-content').hide();
    $('#rsvp-content').hide();
    $('#registry-content').show();
  });

  $('#rsvp-btn').click(function(e){
    $('#about-content').hide();
    $('#wedding-content').hide();
    $('#registry-content').hide();
    $('#rsvp-content').show();
  });


});
