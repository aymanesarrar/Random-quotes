
const placeholder = document.getElementById('quote');
let random = Math.floor(Math.random() * (1643 - 0) + 0);
fetch('https://type.fit/api/quotes')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		placeholder.textContent = `${data[random].text}`;
	});