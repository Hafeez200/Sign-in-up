const signupContainer = document.querySelector('.signup-container');
const signinContainer = document.querySelector('.signin-container');
const signupLink = document.querySelector('.signup-link');
const signinLink = document.querySelector('.signin-link');

signinLink.addEventListener('click', () => {
	signupContainer.classList.add('hidden');
	signinContainer.classList.remove('hidden');
});

signupLink.addEventListener('click', () => {
	signinContainer.classList.add('hidden');
	signupContainer.classList.remove('hidden');
});

const emailInput = document.querySelectorAll('input[type="email"]');
const passwordInput = document.querySelectorAll('input[type="password"]');

emailInput.forEach((input) => {
	input.addEventListener('input', () => {
		if (input.value.indexOf('@') === -1) {
			input.setCustomValidity('Please enter a valid email address.');
		} else {
			input.setCustomValidity('');
		}
	});
});

passwordInput.forEach((input) => {
	input.addEventListener('input', () => {
		if (input.value.length < 8) {
			input.setCustomValidity('Please enter a password with at least 8 characters.');
		} else {
			input.setCustomValidity('');
		}
	});
});
