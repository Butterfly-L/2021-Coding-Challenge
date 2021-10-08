function confettiFalling() {
  
	var box = document.getElementById("box");
  box.innerHTML = '';

	for (var i = 0; i < 50; i++) {
		var div = document.createElement("div");
		div.classList.add("confetti");
		box.appendChild(div);
	}
  
	for (var i = 0; i < 50; i++) {
		var div = document.createElement("div");
		div.classList.add("tri");
		box.appendChild(div);
	}
  
  for (var i = 0; i < 50; i++) {
		var ribbon = document.createElement("div");
		ribbon.classList.add("ribbon");
		box.appendChild(ribbon);
	}

}

const button = document.querySelector('button');
button.addEventListener('click',()=>{confettiFalling();});