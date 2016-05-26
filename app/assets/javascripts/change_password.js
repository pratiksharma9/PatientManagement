function validateUserCurrentPassword(obj)
{
	var password = $(obj).val();
	var regular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;

	if (!regular.test(password))
	{
		$('#'+$(obj).attr("id")+'_error').text('Make a Combination of special, numbers, lowercase and uppercase letter');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}

function validateUserPassword(obj)
{
	var current_password = $(obj).val();
	var user_password = $('#user_current_password').val();
		
	if(!validateUserCurrentPassword('#user_password'))
	{
		$('#'+$(obj).attr("id")+'_error').text('Make a Combination of special, numbers, lowercase and uppercase letter');
		return false;
	}
	else if(current_password == user_password)
	{
		$('#'+$(obj).attr("id")+'_error').text('Current Password is not same as old');
		return false;
	}

	$('#'+$(obj).attr("id")+'_error').text('');
	return true;
}

function validateUserConfirmPassword(obj)
{
	var confirm_password = $(obj).val();
	var password = $('#user_password').val();
	
	if (!(confirm_password === password))
	{
		$('#'+$(obj).attr("id")+'_error').text('Password Not Matched Retype Again');
		return false;
	}
	
	$('#'+$(obj).attr("id")+'_error').text('');
	return true;
}

$(document).on('blur keydown', '#user_current_password', function(){
	validateUserCurrentPassword(this);
});

$(document).on('change blur keydown', '#user_password', function(){
	validateUserPassword(this);
});

$(document).on('change blur', '#user_password_confirmation', function(){
	validateUserConfirmPassword(this);
});

$(document).on('submit', '#edit_user', function() {
	isCurrentPasswordValid = validateUserCurrentPassword('#user_current_password');
	isNewPasswordValid = validateUserPassword('#user_password');
	isConfirmPasswordValid = validateUserConfirmPassword('#user_password_confirmation');
	return (isCurrentPasswordValid && isNewPasswordValid && isConfirmPasswordValid);
});


