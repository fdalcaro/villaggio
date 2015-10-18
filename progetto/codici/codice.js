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

// **************************************************************



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

// **************************************************************



//Verifica e memorizzazione delle date.

function date() {
	inizio = document.getElementsByName("inizio")[0].value;
	fine = document.getElementsByName("fine")[0].value;
	var i = controllo_data(inizio);
	var f = controllo_data(fine);
	var c;
//	var d = da_a(inizio, fine);

//	alert(d);

	if(i && f)  {
		alert("Tutto OK! Le date inserite " + inizio + " " + fine + " sono corrette");
		c = true;
	} else if(!i && f) {
		alert("Controlla! La data di inizio " + inizio + " è errata");
		c = false;
		}
	else if(i && !f) {
		alert("Controlla! La data di fine " + fine + " è errata");
		c = false;
	}
	else if(!i && !f) {
		alert("Le date " + inizo + " e " + fine + " sono errate");
		c = false;
	}
	else alert("Qualcosa non va!")

	return c;	
}

// TODO: Se entrambe le date sono errate la funzione continua e non ritorna
//		 nella pagina di inserimento date per la correzione.

//Termine della verifica e memorizzazione delle date.

// **************************************************************



//Verifica che la data inserita sia compresa fra due date passate come argomento.
//Il formato delle date deve essere gg/mm/aaaa.
//Se la data è compresa nell'intervallo la funzione ritorna true, altrimenti
//ritorna false.
//Utilizzo la funzione controllo_data.

/*

function da_a(inizio, fine) {
//	var i = controllo_data(inizio);
//	var f = controllo_data(fine);
	
//	var res;

	var sp_data_i = inizio.split("/");
	var sp_data_f = fine.split("/");

	var giorno_i = sp_data_i[0];
	var mese_i = sp_data_i[1];
	var anno_i = sp_data_i[2];
	var giorno_f = sp_data_f[0];
	var mese_f = sp_data_f[1];
	var anno_f= sp_data_f[2];

	if(anno_i > anno_f) {
		alert("Anno");
		return false;
	} else if(mese_i > mese_f) {
		alert("mese");
		return false;
	} else if(giorno_i > giorno_f {
		alert("giorno");
		return false;
	} else {
		res = "OK!";
		return true;
	}
//	document.getElementById("stampa").innerHTML = res;
}

*/

// *************************************************************





// *************************************************************
// ******************** Funzioni generali **********************
// *************************************************************


//Passo alla funzione una stringa contenente una data, se il contenuto
//è nella forma gg/mm/aaaa la funzione ritorna true, altrimenti
//ritorna false.



function controllo_data(data) {
	var c;
	var d;
	var patt = new RegExp("[0-3][0-9]/[0-1][0-2]/20[0-9][0-9]"); //Creo il pattern per la verifica preliminare del formato
	var t = patt.test(data);
	alert(data);
	if(t) {
		c = true;	
	}
	else {
		alert("Il formano non è corretto");
		c =  false;
	}
	
	var split_data = data.split("/");
	var giorno = split_data[0];
	var mese = split_data[1];
	var anno = split_data[2];

	//Controllo che i giorni e mesi siano coerenti
	if(((mese ==1 || mese == 3 || mese == 5 || mese == 7 || mese == 8 || mese == 10 || mese == 12) && (giorno < 1 || giorno > 31)) ||
		((mese == 4 || mese == 6 || mese == 9 || mese == 11) && (giorno < 1 || giorno > 30)) || ((mese == 2) && (giorno < 1 || giorno > 29)))
	{
		alert("Controlla il giorno");
		d = false;
	} else {
		d = true;
	}

	if(c && d) {
		return true;
	}
	else {
		return false;
	}

// TODO: controllo anno bisestile

}



// **************************************************************



