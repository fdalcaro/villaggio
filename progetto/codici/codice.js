//Eseguo il controllo che venga effettuata una scelta della struttura.
//Se manca la scelta si ripresenta la pagina di inserimento.
function controllo_strutture() {
	if(document.scelta_struttura.struttura.value=="" || document.scelta_struttura.struttura.value==null) {
	alert("Effettua la scelta della struttura");
	return false;
	}
	else return true;

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
