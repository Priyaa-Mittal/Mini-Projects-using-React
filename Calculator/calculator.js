let buttons = document.querySelectorAll("button");
let screenValue = " ";
buttons.forEach(function (i) {
	i.addEventListener('click', function (e) {
		btnText = e.target.innerHTML;
		if (btnText == "C") {
			location.reload();
		}
		else if (btnText == "x") {
			btnText = "*";
			screenValue = screenValue + btnText;
			document.getElementById("screen").innerHTML = screenValue;
		}
		else if (btnText == "=") {
			let result = eval(screenValue);
			document.getElementById("screen").innerHTML = result;
			screenValue = result;
		}
		else if (btnText == "Del") {
			screenValue = screenValue.slice(0, -1);
			document.getElementById("screen").innerHTML = screenValue;
		}
		else {
			screenValue = screenValue + btnText;
			document.getElementById("screen").innerHTML = screenValue;
		}
	})
})