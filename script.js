// select all input fields using querySelectorAll in a variable
const inputs = document.querySelectorAll('.code');

// code for focus management, run a loop on inputs node list
inputs.forEach((input, index) => {
	// run the below code for each input
	input.addEventListener('click', () => {
		input.select();
	});

	

	input.addEventListener('input', () => {
		// allow only numbers
		input.value = input.value.replace(/[^0-9]/g, '');
		
		if (input.value.length > 1) {
			input.value = input.value.slice(0, 1);  // Restrict to 1 digit
		}
		if(input.value.length === 1){
			if(index < inputs.length - 1){
				inputs[index+1].focus();
				input.classList.remove('focused');
				inputs[index+1].classList.add('focused');
			}
		}
	});


	input.addEventListener('keydown', (e) => {
		if(e.key === "Backspace" && input.value.length === 0){
			if(index > 0){
				inputs[index - 1].focus();
				input.classList.remove('focused');
				inputs[index - 1].classList.add('focused');
			}
		}
	})
});





























