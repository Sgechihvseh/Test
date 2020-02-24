const textareaValue = document.querySelector("#textarea");
const decryptButton = document.querySelector("#decrypt");

decryptButton.addEventListener("click", () => {
	const decryptButton = edwardDecrypt(textareaValue.value);

});


function edwardDecrypt(message) {
	const splittedText = message.split('');
	let k = splittedText.length - 1;
	if (isValid(message)) {
		while (k > 0) {
			if (splittedText[k] == splittedText[k - 1]) {
				splittedText.splice(k - 1, 2);
				k -= 2;
			} else {
				k--;
			}
		}
		document.querySelector("#result").innerHTML = splittedText.join('');
	} else {
		textareaValue.value = '';
	}
	
}

function isValid(text) {
	let regexp = /^[a-z]+$/g;
	if (text.length > 100000) {
		alert('Edward! The maximum number of letters is 100000!');
		return false;
	} else if (text.length == '0') {
		alert('Edward! String is empty!')
		return false;
	} else if (regexp.test(text)) {
		return true;
	}
	alert('Edward! Unacceptable symbols!');
	return false;
}
