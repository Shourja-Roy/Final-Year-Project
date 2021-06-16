function openDrawer() {
	
	navDrawer = document.getElementsByClassName("dropdown");
	for (var i = 0; i < navDrawer.length; i++)
		navDrawer[i].style.display = "block";
}

function closeDrawer(){
	navDrawer = document.getElementsByClassName("dropdown");
	for (var i = 0; i < navDrawer.length; i++)
		navDrawer[i].style.display = "none";
}

window.addEventListener("orientationchange", closeDrawer, true);

document.onload = closeDrawer;

var nameOfPersonGlobal = '';

// https://love2dev.com/blog/ways-to-use-javascript-redirect-to-another-page/
function openContact(media){
	if(nameOfPersonGlobal==="shourja" ) 
		if(media==='email') 
			window.location.href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=royshourjaofficial@gmail.com&tf=1';
		else if (media==='linkedin') window.location.href='https://www.youtube.com/';
		else if (media==='github') window.location.href='https://www.google.com/';

	if(nameOfPersonGlobal==="divya" ) 
		if(media==='email')
			window.location.href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=divyasuman0706@gmail.com@gmail.com&tf=1';
		else if (media==='linkedin') window.location.href='https://www.linkedin.com/in/divya-suman-33aa00190';
		else if (media==='github') window.location.href='#';

	if(nameOfPersonGlobal==="aafreen" ) 
		if(media==='email') 
			window.location.href='#';
		else if (media==='linkedin') window.location.href='#';
		else if (media==='github') window.location.href='https://github.com/AafrinParween';

	if(nameOfPersonGlobal==="shreeparna" ) 
		if(media==='email') 
			window.location.href='#';
		else if (media==='linkedin') window.location.href='#';
		else if (media==='github') window.location.href='#';

	if(nameOfPersonGlobal==="udayan" ) 
		if(media==='email') 
			window.location.href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=udayanchowdhury0@gmail.com&tf=1';
		else if (media==='linkedin') window.location.href='https://www.linkedin.com/in/udayan-chowdhury-ba052b1b2';
		else if (media==='github') window.location.href='#';

	if(nameOfPersonGlobal==="bristi" ) 
		if(media==='email') 
			window.location.href='#';
		else if (media==='linkedin') window.location.href='#';
		else if (media==='github') window.location.href='#';
}




function closeImage(){ document.getElementById("imageId").style.display="none"; }

function showImage(nameOfPerson) {
	nameOfPersonGlobal = nameOfPerson;
	document.getElementById("imageId").style.display="block";
	if(nameOfPersonGlobal==="shourja"){ document.getElementById("imageId").style.backgroundImage="url(../img/individuals/shourja.jpeg)"; }
	if(nameOfPerson==="divya"){ document.getElementById("imageId").style.backgroundImage="url(../img/individuals/divya.jpeg)"; }
	if(nameOfPerson==="aafreen"){ document.getElementById("imageId").style.backgroundImage="url(../img/individuals/aafreen.jpeg)"; }
	if(nameOfPerson==="shreeparna"){ document.getElementById("imageId").style.backgroundImage="url(../img/individuals/shreeporna.jpeg)"; }
	if(nameOfPerson==="udayan"){ document.getElementById("imageId").style.backgroundImage="url(../img/individuals/udayan.jpeg)"; }
	if(nameOfPerson==="bristi"){ document.getElementById("imageId").style.backgroundImage="url(../img/individuals/bristi.jpeg)"; } 
}
