//Eseguo il controllo che venga effettuata una scelta della struttura.
//Se manca la scelta si ripresenta la pagina di inserimento.


var struttura;	//Struttura scelta.
var inizio;		//Data di arrivo al villaggio.
var fine;		//Data di partenza dal villaggio.
var e_mail;		//Indirizzi di posta elettronica.
var cap;		//Codice avviamento postale.

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
//		alert("Tutto OK! Le date inserite " + inizio + " " + fine + " sono corrette"); /* decommentare la riga per controllare */

		c = true;
	} else if(!i && f) {
		alert("Controlla! La data di inizio " + inizio + " è errata");
		c = false;
		}
	else if(i && !f) {
		alert("Controlla! La data di fine " + fine + " è errata");
		c = false;
	}
	else alert("Le date " + inizo + " e " + fine + " sono errate");
//		c = false;

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






//Passo alla funzione l'indirizzo e-mail e il CAP e se entrambi
//sono corretti mi restituisce true, altrimenti false.

function anagrafica() {
	e_mail = document.getElementsByName("e_mail")[0].value;
	alert("e-mail vale: " + e_mail);
	cap = document.getElementsByName("cap")[0].value;
	alert(cap);
	var t_e = e_m(e_mail);
	alert("TEST e-mail " + t_e);
	var t_c = c_cap(cap);
	alert("TEST cap " + t_c);
	var c;
	
	if(t_e && t_c) {
		c = true;
	} else if(!t_e && t_c) {
		alert("Controlla l'e-mail");
		c = false;
	} else if(t_e && !t_c) {
		alert("Controlla il CAP");
		c = false;
	}
	else {
		alert("CAP ed e.mail errati");
		c = false;
	}
	return c;
}

//Il controllo e-mail ritorna true anche se il suffisso (it, com,
//org, ...) ha più di 4 caratteri. Stesso bug se il cap ha più di
//5 numeri.

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
//	alert(data); /* decommetare la riga per controllare */



	if(t) {
		c = true;	
	}
	else {
//		alert("Il formano non è corretto"); /* decommentare la riga per controllare */

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
//		alert("Controlla il giorno"); /* decommentare la riga per controllare */


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


//Leggo i dati passati alla pagina attravero il link

function getFromUrl() {
	var url;
	var s0;
	var s1;
	var s2;

	url = document.location.href;
	s0 = url.split("?");
	s1 = s0[1].split("&");
	for(var i = 0; i < s1.length; i++) {
		s2 = s1[i].split("=");
		alert(s2);
	}
	return s2;
}



//Passo alla funzione una stringa contenente un indirizzo di
//posta eletronica e ritorna true se l'indirizzo è costruito
//correttamente, altrimenti ritorna falso.

function e_m(mail) {
	alert("mail = " + mail);
	var patt = new RegExp("[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,4}");
	var t = patt.test(mail);
	alert("il valore di t è " + t);
	return t;
}

// ***************************************************************



//Passo alla funziona una stringa contenenenete il CAP e ritorna
//true se la stringa contiene 5 cifre, altrimenti ritorna false.

function c_cap(n_cap) {
	var patt = new RegExp("[0-9]{5}");
	var t = patt.test(n_cap);
	return t;
}

//****************************************************************

