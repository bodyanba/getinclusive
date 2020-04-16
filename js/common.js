$(document).ready(function () {

	$('[data-toggle="tooltip"]').tooltip().click(function(e) {
		e.stopPropagation();
		$('[data-toggle="tooltip"]').not(this).tooltip('hide');
		$(this).tooltip('toggle');
	});

	$(document).click(function(e) {
		var id = $(e.target).closest(".tooltip").attr("id");
		var attr = "[aria-describedby=" + "'" + id + "'" + "]";
		if (!$(e.target).is('.tooltip *'))
			$('[data-toggle="tooltip"]').tooltip('hide');
		else
			$('#link-clock' + attr).tooltip('hide');
		if ($(e.target).is('.tooltip .button-no'))
			$(attr).tooltip('hide');
	});

	$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
		e.stopPropagation();
	});

	function resetForm(){
		$(".dropdown-menu").removeClass('active');
		// $("input").prop( "checked", false);
		// $("textarea").val("");
	};

	function btnSubmit() { 
		var value;
		if ($("input").is(":checked") && $("textarea").val())
			value = false
		else 
			value = true
		$("[name='submit']").prop( "disabled", value);
	};

	$('.dropdown-cancel').on('click', function (e) { 
		$("[data-toggle='dropdown']").dropdown('toggle');
		resetForm();
		btnSubmit();
	});
	$('.dropdown').on('hide.bs.dropdown', function () {
		resetForm();
		btnSubmit();
	});
	$('.dropdown').on('show.bs.dropdown', function () {
		$('[data-toggle="tooltip"]').tooltip('hide');
	});

	$('[name="submit"]').on('click', function (e) {
		e.stopPropagation();
		$(".dropdown-menu").addClass('active');
	});

	$("input, textarea").on("keyup change", function () {
		btnSubmit();
	});

		var iframe = $('#iframe');
    var player = new Vimeo.Player(iframe);

    player.on('ended', function() {
    	setTimeout(function() {
        $('body').addClass('finished')
	    }, 1000);
    });

});