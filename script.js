const container = document.querySelector('#container');

for (i = 0; i < 1800; i++) {

const div = document.createElement('div');
div.setAttribute('style', 'width: 14px; height: 14px; display: inline-block; border: solid; border-width: 1px');
container.appendChild(div);
div.addEventListener("mouseenter", changeColor);

function changeColor() {
 	div.setAttribute('style', 'width: 14px; height: 14px; display: inline-block; border: solid; border-width: 1px; background-color: grey');
 };

 };