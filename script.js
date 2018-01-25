const container = document.querySelector('#container');

for (i = 0; i < 2400; i++) {

const div = document.createElement('div');
div.setAttribute('style', 'width: 14px; height: 14px; display: inline-block; border: solid; border-width: 1px');
container.appendChild(div);
div.addEventListener("mouseenter", changeColor);

function changeColor() {
 	div.setAttribute('style', 'width: 14px; height: 14px; display: inline-block; border: solid; border-width: 1px; background-color: grey');
 };

 };

 const button = document.querySelector('button');

 button.addEventListener("click", resetAll);

 function resetAll() {
 	
 	let squares = prompt("How many rows?");

 	let myNode = document.getElementById("container");
	while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}

 	for (i = 0; i < squares * 80; i++) {

	const div = document.createElement('div');
	div.setAttribute('style', 'width: 14px; height: 14px; display: inline-block; border: solid; border-width: 1px');
	container.appendChild(div);
	div.addEventListener("mouseenter", changeColor);

	function changeColor() {
 	div.setAttribute('style', 'width: 14px; height: 14px; display: inline-block; border: solid; border-width: 1px; background-color: grey');
 	};

 	};

 }