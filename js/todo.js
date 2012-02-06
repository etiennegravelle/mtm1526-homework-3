// JavaScript Document

/*
	3 ways to get elements in your HTML:
	document.getElementById()
	document.getElementByClassName()
	document.getElementByTagName()
*/
var box; /* Holds our <div> to move around*/
var createBox = function (ev) {
	
	box = document.createElement('div'); //.createElement() makes a new empty HTML tag
	
	box.className = 'box'; // className allows us to manipulate the classes fro a tag
	
	document.body.appendChild(box); //.appendChild() will add an element to the HTML file
	
	var randLeft = Math.round(Math.random() * (document.documentElement.clientWidth - box.offsetWidth));
	box.style.left = randLeft + 'px';
	
	var randTop = Math.round(Math.random() * (document.documentElement.clientHeight  - box.offsetHeight));
	box.style.top = randTop + 'px';
};

var moveDown = function (ev) {
	var newTop = box.offsetTop + 10;
	box.style.top = newTop + 'px';		
};

var moveUp = function (ev) {
	var newTop = box.offsetTop - 10;
	box.style.top = newTop + 'px';
		
};

var moveLeft = function (ev) {
	var newLeft = box.offsetLeft - 50;
	box.style.left = newLeft + 'px';
		
};

var moveRight = function (ev) {
	var newLeft = box.offsetLeft + 10;
	box.style.left = newLeft + 'px';
		
};

document.getElementById('create').addEventListener('click', createBox, false);
document.getElementById('down').addEventListener('click', moveDown, false);
document.getElementById('up').addEventListener('click', moveUp, false);
document.getElementById('left').addEventListener('click', moveLeft, false);
document.getElementById('right').addEventListener('click', moveRight, false);

document.documentElement.addEventListener('keydown', function (ev) {
	switch (ev.keyCode) {
		case 38 : 
			moveUp();
			break;
		case 40 :
			moveDown();
			break;
		case 37 :
			moveLeft();
			break;
		case 39 :
			moveRight();
			break;
		default :
			//default is for when none of the other cases match
			console.log(ev.keyCode);
	}
}, false);

document.getElementById('color').addEventListener('change', function (ev) {
	console.log(this.value); //inside an envent listener 'this' refers to the element that fired this event
	
	//ev. target refers to the thing that originally fired the event
	//not necessarily the element the listener is bound to
	console.log(ev.target.value);
	
	box.style.backgroundColor = this.value;
}, false);

var removeActiveClass = function () {
	var divs = document.getElementByTagName('div');
	var totalDivs = divs.length;
	
	for (var i = 0; i < totalDivs; i++) {
		divs[i].className = 'box';
	}
};

document.documentElement.addEventListener('click', function(ev) {
	if (ev.target.tagName == 'DIV') {
		ev.target.className = 'box active';
		box = ev.target;
	}
}, false);










