var firstname = document.forms['form']['firstname'];
var lastname = document.forms['form']['lastname'];
var dob = document.forms['form']['birthday'];
var email = document.forms['form']['email'];
var phone = document.forms['form']['phone'];
var id = document.forms['form']['id'];
var person = document.forms['form']['numPerson'];

var firstnameError = document.getElementById('firstnameError');
var lastnameError = document.getElementById('lastnameError');
var emailError = document.getElementById('emailError');
var phoneError = document.getElementById('phoneError');
var idError = document.getElementById('idError');
var personError = document.getElementById('personError');

firstname.addEventListener('textInput', fnameVerify);
lastname.addEventListener('textInput', lnameVerify);
email.addEventListener('textInput', emailVerify);
phone.addEventListener('textInput', phoneVerify);
id.addEventListener('textInput', idVerify);
numPerson.addEventListener('textInput', personVerify);

function validated(){
  if(firstname.length < 2 ){
    firstname.style.border = "1px solid red";
    firstnameError.style.display = "block";
    firstname.focus();
    return false;
  }
  if(lastname.length < 2 ){
    lastname.style.border = "1px solid red";
    lastnameError.style.display = "block";
    lastname.focus();
    return false;
  }
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		emailError.style.display = "block";
		email.focus();
		return false;
	}
  if (phone.value.length < 9) {
		phone.style.border = "1px solid red";
		phoneError.style.display = "block";
		phone.focus();
		return false;
	}
  if (id.value.length < 8) {
		id.style.border = "1px solid red";
		id.style.display = "block";
		id.focus();
		return false;
	}
  if (numPerson.value.length < 1) {
		email.style.border = "1px solid red";
		emailError.style.display = "block";
		email.focus();
		return false;
	}

}

function fnameVerify(){
	if (firstname.value.length >= 3) {
		firstname.style.border = "1px solid silver";
		firstnameError.style.display = "none";
		return true;
	}
}
function lnameVerify(){
	if (lastname.value.length >= 3) {
		lastname.style.border = "1px solid silver";
		lastnameError.style.display = "none";
		return true;
	}
}
function phoneVerify(){
	if (phone.value.length >= 9) {
		phone.style.border = "1px solid silver";
		phoneError.style.display = "none";
		return true;
	}
}
function emailVerify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		emailError.style.display = "none";
		return true;
	}
}
function idVerify(){
	if (id.value.length >= 8) {
		id.style.border = "1px solid silver";
		idError.style.display = "none";
		return true;
	}
}
function personVerify(){
	if (person.value.length >= 1) {
		person.style.border = "1px solid silver";
		personError.style.display = "none";
		return true;
	}
}
