function dateRole(start_date, end_date)
{
	$('.date_custom').datepicker({
		format: "dd-mm-yyyy",
		startDate: start_date,
		endDate: end_date
	});
}	


function validateUserType(obj) {
	if ($(obj).val() == 'Select Role')
	{
		$('#'+$(obj).attr("id")+'_error').text('User Type must be selected');
		return false;
	}
	else
	{
		if($(obj).val() == 'Doctor')
		{
			$('#date_of_birth').prop("disabled", false);
			$('.date_custom').datepicker("remove");
			dateRole("-70y","-26y");
		}
		else
		{
			$('#date_of_birth').prop("disabled", false);
			$('.date_custom').datepicker("remove");
			dateRole("-70y","-0d");
		}

		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}

function validateName(obj) 
{
	var name = $(obj).val();
	
	if (!name.match(/^[a-zA-Z ]+$/))
	{
		$('#'+$(obj).attr("id")+'_error').text('Only Characters Allowed');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}	
	
}

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

function validatePassword(obj)
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

function validateConfirmPassword(obj)
{
	var confirm_password = $(obj).val();
	var password = $('#user_password').val();

	if (!(confirm_password == password))
	{
		$('#'+$(obj).attr("id")+'_error').text('Password Not Matched Retype Again');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}

function validateGender(obj)
{
	if ($('#'+$(obj).attr("id")+':checked').length == 0)
	{
		$('#'+$(obj).attr("class")+'_error').text('Select Gender');
		return false;
	}
	$('#'+$(obj).attr("class")+'_error').text('');
	return true;
}

// Hello
function validateDateOfBirth(obj)
{
	var date_of_birth = $(obj).val();

	if (!(date_of_birth) == '')
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
	$('#'+$(obj).attr("id")+'_error').text('Select Date');
	return false;
}

function validateMobile(obj)
{
	var mobile = $(obj).val();
	
	if (!mobile.match(/^[0-9]+$/))
	{
		$('#'+$(obj).attr("id")+'_error').text('Only Numbers Allowed');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}

function validateAlternateMobile(obj)
{
	var alternate_mobile = $(obj).val();
	
	if (!alternate_mobile.match(/^[0-9]+$/))
	{
		$('#'+$(obj).attr("id")+'_error').text('Only Numbers Allowed');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}

function validateAddress(obj)
{
	var address = $(obj).val();
	
	if (!address.match(/^[0-9a-zA-Z ]+$/))
	{
		$('#'+$(obj).attr("id")+'_error').text('No Special Characters Allowed');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}

function validateCity(obj)
{
	if ($(obj).val() == '')
	{
		$('#'+$(obj).attr("id")+'_error').text('Select City');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');	
		return true;
	}
}

function validateState(obj)
{
	if ($(obj).val() == '')
	{
		$('#'+$(obj).attr("id")+'_error').text('Select State');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');	
		return true;
	}
}

function validateCountry(obj)
{
	if ($(obj).val() == '')
	{
		$('#'+$(obj).attr("id")+'_error').text('Select Country');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');	
		return true;
	}
}

function validatePincode(obj)
{
	var pincode = $(obj).val();
	
	if (!pincode.match(/^[0-9]+$/))
	{
		$('#'+$(obj).attr("id")+'_error').text('Only Numbers Allowed');
		return false;
	}
	else
	{
		$('#'+$(obj).attr("id")+'_error').text('');
		return true;
	}
}

$(document).on('change blur', '#user_user_type', function() {
	validateUserType(this);
});

$(document).on('change blur keydown', '#user_name', function(){
	validateName(this);
});

$(document).on('change blur keydown', '#user_email', function(){
	validateEmail(this);
});

$(document).on('change blur keydown', '#user_password', function(){
	validatePassword(this);
});

$(document).on('change blur keydown', '#user_password_confirmation', function(){
	validateConfirmPassword(this);
});

$(document).on('change', '.user_gender', function(){
	validateGender(this);
});

$(document).on('change', '#user_dob', function(){
	validateDateOfBirth(this);
});

$(document).ready(function(){
	$('#date_of_birth').prop("disabled", true);
}); 

$(document).on('change blur keydown', '#user_mobile', function(){
	validateMobile(this);
});

$(document).on('change blur keydown', '#user_alternate_mobile', function(){
	validateAlternateMobile(this);
});

$(document).on('change blur keydown', '#user_address', function(){
	validateAddress(this);
});

$(document).on('change', '#user_city', function(){
	validateCity(this);
});

$(document).on('change', '#user_state', function(){
	validateState(this);
});

$(document).on('change', '#user_country', function(){
	validateCountry(this);
});

$(document).on('change blur keydown', '#user_pincode', function(){
	validatePincode(this);
});


$(document).on('submit', "#new_user", function(){

	isUserTypeValid = validateUserType($("#user_user_type"));
	isNameValid = validateName($("#user_name"));
	isEmailValid = validateEmail($("#user_email"));
	isPasswordValid = validatePassword($("#user_password"));
	isConfirmPasswordValid = validateConfirmPassword($("#user_password_confirmation"));
	isGenderValid = validateGender($(".user_gender"));
	isDateOfBirthValid = validateDateOfBirth($("#user_dob"));
	isMobileNumberValid = validateMobile($("#user_mobile"));
	isAlternateMobileValid = validateAlternateMobile($("#user_alternate_mobile"));
	isAddressValid = validateAddress($("#user_address"));
	isCityValid = validateCity($("#user_city"));
	isStateValid = validateState($("#user_state"));
	isCountryValid = validateCountry($("#user_country"));
	isPinCodeValid = validatePincode($("#user_pincode"));
			
	return isUserTypeValid && isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isGenderValid && isDateOfBirthValid && isMobileNumberValid && isAlternateMobileValid && isAddressValid && isCityValid && isStateValid && isCountryValid && isPinCodeValid
	
});



