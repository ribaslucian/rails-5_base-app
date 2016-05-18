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
//= require turbolinks
//
// require materialize/initial
// require materialize/sideNav
// require materialize/hammer.min
// require materialize/jquery.hammer
// require materialize/collapsible
//= require materialize-sprockets 
//= require toastr
//
//= require_tree .

$(document).ready(function() {

	// inicializando materializecss.sideNav
	$(".button-collapse").sideNav(); // Initialize collapse button
	$('.collapsible').collapsible(); // Initialize collapsible (uncomment the line below if you use the dropdown variation)		
	
	// configurando estética das mensagens toastr	
	toastr.options = {"closeButton": true, "debug": false, "newestOnTop": false, "progressBar": true, "positionClass": "toast-top-center", "preventDuplicates": false, "onclick": null, "showDuration": "300", "hideDuration": "1000", "timeOut": "5000", "extendedTimeOut": "1000", "showEasing": "swing", "hideEasing": "linear", "showMethod": "fadeIn", "hideMethod": "fadeOut"}
});