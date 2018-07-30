$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});


$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});