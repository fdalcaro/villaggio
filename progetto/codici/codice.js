//Eseguo il controllo che venga effettuata una scelta della struttura.
//Se manca la scelta si ripresenta la pagina di inserimento.
function controllo_strutture() {
//	if(document.scelta_struttura.struttura.value=="" || document.scelta_struttura.struttura.value==null) 

	switch(true) {
		case document.getElementsByName("struttura")[0].checked:
			alert("Pisani");
			return true;
		case document.getElementsByName("struttura")[1].checked:
			alert("Palladio");
			return true;
		case document.getElementsByName("struttura")[2].checked:
			alert("Rotonda");
			return true;
		default:
			alert("Effettua una scelta");
			return false;
	}

/*
	if(document.getElementByName("struttura")=="" || document.getElementByName("struttura")==null) {
	alert("Effettua la scelta della struttura");
	return false;
	}
	else {
	alert(document.getElementByName("struttura".value));
 	return true;
	}
*/

}



function indietro() {
	history.back();
	alert("Prova non superata");
}

function avanti_su_anagrafica() {
	location.href="prenotazioni_anagrafica.html";
	alert("Prova non superata");
}

function indietro_a() {
	location.href="prenotazioni_periodo.html";
	alert("Prova non superata");
}
