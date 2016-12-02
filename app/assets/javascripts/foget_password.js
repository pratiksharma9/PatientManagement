function validateEmail(obj)
{
	var email = $(obj).val();
	var regular = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if (!regular.test(email))
	{
		$('#'+$(obj).attr("id")+'_error').text('Use Special Characters, Neumaric and Alphabates Only');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}

$(document).on('change blur', '#forget_password_email', function(){
	validateEmail(this);
});

$(document).on('submit', "#forget_password_form", function(){
	return validateEmail('#forget_password_email');
});
