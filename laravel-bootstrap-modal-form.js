/*!
 * Laravel-Bootstrap-Modal-Form (https://github.com/JerseyMilker/Laravel-Bootstrap-Modal-Form)
 * Copyright 2015 Jesse Leite - MIT License
 *
 * Bromance:
 * Adam Wathan has nice boots. Thank you for BootForms magic.
 * Matt Higgins has nice beard. Thank you for JS wizardry.
 */

$('document').ready(function() {

	// Prepare reset.
	function resetModalFormErrors() {
		$('.form-group').removeClass('has-error');
		$('.form-group').find('.help-block').remove();
	}

	// Intercept submit.
	$('form.bootstrap-modal-form').on('submit', function(submission) {
		submission.preventDefault();

		// Set vars.
		var form = $(this),
		    url = form.attr('action'),
		    input = form.serializeArray(),
		    formData = new FormData(),
		    submit = form.find('[type=submit]');

		// Append input to FormData object.
		$.each(input, function(index, input) {
			formData.append(input.name, input.value);
		});

		// Append files to FormData object.
		$.each(form.find('[type=file]'), function(index, input) {
			if (input.files.length == 1) {
				formData.append(input.name, input.files[0]);
			} else if (input.files.length > 1) {
				formData.append(input.name, input.files);
			}
		});

		// Please wait.
		if (submit.is('button')) {
			var submitOriginal = submit.html();
			submit.html('Please wait...');
		} else if (submit.is('input')) {
			var submitOriginal = submit.val();
			submit.val('Please wait...');
		}

		// Request.
		$.ajax({
			type: "POST",
			url: url,
			data: formData,
			dataType: 'json',
			cache: false,
			contentType: false,
			processData: false

		// Response.
		}).always(function(response, status) {

			// Reset errors.
			resetModalFormErrors();

			// Check for errors.
			if (response.status == 422) {
				var errors = $.parseJSON(response.responseText);

				// Iterate through errors object.
				$.each(errors, function(field, message) {
					console.error(field+': '+message);
					var formGroup = $('[name='+field+']', form).closest('.form-group');
					formGroup.addClass('has-error').append('<p class="help-block">'+message+'</p>');
				});

				// Reset submit.
				if (submit.is('button')) {
					submit.html(submitOriginal);
				} else if (submit.is('input')) {
					submit.val(submitOriginal);
				}

			// If successful, reload.
			} else {
				location.reload();
			}

		});

		// Return false to prevent the page from being reloaded.
		return false;

	});

	// Reset errors when opening modal.
	$('.bootstrap-modal-form-open').click(function() {
		resetModalFormErrors();
	});

});
