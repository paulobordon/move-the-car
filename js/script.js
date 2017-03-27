//here must be all the javaScript code

console.log('HEY! lets move that car!!'); //no te olvides de cerrar con ;

var gotoA = function() {
	document.getElementById('move').className = 'maincarinit + posa';
}

var gotoB = function() {
	document.getElementById('move').className = 'maincarinit + posb';
}

var gotoC = function() {
	document.getElementById('move').className = 'maincarinit + posc';
}


//FAIL

// var showHideAB = function() {

// 	if (document.getElementById('botonb').style.display == 'none') {

// 		document.getElementById('botona').style.display = 'none';
// 		document.getElementById('botonb').style.display = 'block';

// 	} else {
// 		document.getElementById('botona').style.display = 'block';
// 		document.getElementById('botonb').style.display = 'none';
// 	};

// }

// var showHideAC = function() {

// 	if (document.getElementById('botonc').style.display == 'none') {

// 		document.getElementById('botona').style.display = 'none';
// 		document.getElementById('botonc').style.display = 'block';

// 	} else {
// 		document.getElementById('botona').style.display = 'block';
// 		document.getElementById('botonc').style.display = 'none';
// 	};

// }


	// if (document.getElementById('botonc').style.display == 'none') {

	// 	document.getElementById('botonc').style.display = 'block';
	// 	document.getElementById('botona').style.display = 'none';

	// } else {
	// 	document.getElementById('botonc').style.display = 'none';
	// 	document.getElementById('botona').style.display = 'block';
	// };