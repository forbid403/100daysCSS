const input = document.querySelector('#input');
input.addEventListener('input', checkValue);

function checkValue(e) {
	if(e.target.value == "password" || e.target.value == "Password") {
		const wrap = document.querySelector('#wrap');
		wrap.classList.toggle('flip');
	}
}