const form = document.getElementbyId('signup');
form.addEventListener('submit', validateForm);

function validateForm(e) {
	e.preventDefault();
  
  let emailErrors = [];
  let passwordErrors = [];
  let comfirmPasswordErrors = []; 
  let birthdateCompletion = [];
  let checkedTAC = [];
}

if(email === '') {
	emailErrors.push('Email Required!').value;
}