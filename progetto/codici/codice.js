//Eseguo il controllo che venga effettuata una scelta della struttura.
//Se manca la scelta si ripresenta la pagina di inserimento.
function controllo_strutture() {

	switch(true) {
		case document.getElementsByName("struttura")[0].checked:
			alert("Pisani");
			return true;
			break;
		case document.getElementsByName("struttura")[1].checked:
			alert("Palladio");
			return true;
			break;
		case document.getElementsByName("struttura")[2].checked:
			alert("Rotonda");
			return true;
			break;
		case document.getElementsByName("struttura")[3].checked:
			alert("Brenta");
			return true;
			break;
		case document.getElementsByName("struttura")[4].checked:
			alert("Tesina");
			return true;
			break;
		case document.getElementsByName("struttura")[5].checked:
			alert("Torre");
			return true;
			break;
		case document.getElementsByName("struttura")[6].checked:
			alert("Camper");
			return true;
			break;
		case document.getElementsByName("struttura")[7].checked:
			alert("Roulotte");
			return true;
			break;
		case document.getElementsByName("struttura")[8].checked:
			return "Tenda";
			break;
		default:
			alert("Effettua una scelta");
			return false;
	}
}

//termine funzione controllo scelta strutture.




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
