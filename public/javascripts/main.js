

$(document).ready(function(){
	$("#login_form").hide();
});

$(document).on("click", '#about', function() {
	alert("kkkkkk");
	$("#jumbotron").hide();
	$("#login_form").show();
	$.get('/login', function(data) {
		console.log(data); 

		$(".jumbotron").html(data);
	});
});