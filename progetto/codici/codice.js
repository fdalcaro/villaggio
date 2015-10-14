//Eseguo il controllo che venga effettuata una scelta della struttura.
//Se manca la scelta si ripresenta la pagina di inserimento.


var struttura;	//Struttura scelta.
var inizio;		//Data di arrivo al villaggio;
var fine;		//Data di partenza dal villaggio;

function controllo_strutture() {

	switch(true) {
		case document.getElementsByName("struttura")[0].checked:
			struttura = "pisani"
			return true;
			break;
		case document.getElementsByName("struttura")[1].checked:
			struttura = "palladio";
			return true;
			break;
		case document.getElementsByName("struttura")[2].checked:
			struttura = "rotonda";
			return true;
			break;
		case document.getElementsByName("struttura")[3].checked:
			struttura = "brenta";
			return true;
			break;
		case document.getElementsByName("struttura")[4].checked:
			struttura = "tesina";
			return true;
			break;
		case document.getElementsByName("struttura")[5].checked:
			struttura = "torre";
			return true;
			break;
		case document.getElementsByName("struttura")[6].checked:
			struttura = "camper";
			return true;
			break;
		case document.getElementsByName("struttura")[7].checked:
			struttura = "roulotte";
			return true;
			break;
		case document.getElementsByName("struttura")[8].checked:
			struttura = "tenda";
			return true;
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


//Verifica e memorizzazione delle date.

function date() {
	inizio = document.getElementsByName("inizio")[0].value;
	var patt = new RegExp("[0-3][0-9]/[0-1][0-2]/20[0-9][0-9]");
	var t = patt.test(inizio);
	if(t) {
		alert("OK! Il formato è corretto");
	} else {
		alert("KO! Il formato della data non è nella forma gg/mm/aaaa");
	}

	var sp_inizio = inizio.split("/");
	var giorno = sp_inizio[0];
	var mese = sp_inizio[1];
	var anno = sp_inizio[2];

	if((mese ==1 || mese == 3 || mese == 5 || mese == 7 || mese == 8 || mese == 10 || mese == 12) && (giorno < 1 || giorno > 31)) {
		alert("Controlla il giorno");
		} else {
			alert("Il giorno è corretto");
}


	alert("primo " + giorno + " " +  mese + " " + anno);
	fine = document.getElementsByName("fine")[0].value;
	alert("secondo " + fine);
	return true;
}



