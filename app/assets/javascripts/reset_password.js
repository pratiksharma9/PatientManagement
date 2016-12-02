function validateResetPassword(obj)
{
	var password = $(obj).val();
	var regular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;

	if (!regular.test(password))
	{
		$('#'+$(obj).attr("id")+'_error').text('Password must have a Combination of special, numbers, lowercase and uppercase letter');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}

function validateResetConfirmPassword(obj)
{
	var confirm_password = $(obj).val();
	var password = $('#user_new_password').val();

	if (!(confirm_password == password))
	{
		$('#'+$(obj).attr("id")+'_error').text('Confirm Password Not Matched Retype Again');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}


$(document).on('change blur', '#user_new_password', function(){
	validateResetPassword(this);
});

$(document).on('change blur', '#user_confirm_password', function(){
	validateResetConfirmPassword(this);
});

$(document).on('submit', '#reset_password_form', function() {
	return validateResetPassword('#user_new_password') && validateResetConfirmPassword('#user_confirm_password');
});


