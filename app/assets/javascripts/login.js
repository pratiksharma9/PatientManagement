function validateLoginEmail(obj)
{
	var email = $(obj).val();
	var regular = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if (!regular.test(email))
	{
		$('#'+$(obj).attr("id")+'_error').text('Email Must be Proper like (xyz@xyz.com)');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}

function validateLoginPassword(obj)
{
	var password = $(obj).val();
	var regular = /^.{8,15}$/;

	if (!regular.test(password))
	{
		$('#'+$(obj).attr("id")+'_error').text('Password length must be 8 (Min) and 15 (Max)');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}

$(document).on('change blur', '#user_login_email', function(){
	validateLoginEmail(this);
});

$(document).on('change blur', '#user_login_password', function(){
	validateLoginPassword(this);
});

$(document).on('submit', "#new_login_user", function(){
	isLoginEmailValid = validateLoginEmail('#user_login_email');
	isLoginPasswordValid = validateLoginPassword('#user_login_password');
	
	return isLoginEmailValid && isLoginPasswordValid;
});
