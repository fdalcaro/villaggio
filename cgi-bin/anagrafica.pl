#!/usr/bin/perl

# use LWP::Simple qw(get);
# use URI::URL;
print "Content-type: text/html\n";
print "\n";

print "<html>";
print "<body>";

$richiesta=$ENV{'QUERY_STRING'};

#print "\n$richiesta\n";	#Decommentare per controllare i valori

@coppie=split(/&/, $richiesta);					#Suddivido in righe di coppie "nome=valore"

$i=0;	
foreach $coppia (@coppie) {						#Itero su @coppie
	$coppia =~ tr/+/ /;							#Sostituisco i "+" con uno spazio
	$coppia =~ s/%[a-fA-F0-9][a-fA-F0-9]//g;	#Elimimo i numeri esadecimali
	$i++;
	($nome[$i], $valore[$i]) = split (/=/, $coppia);	#Divido $coppia e la assegno a 2 scalari
	
#	print "<p>$nome[$i]  $valore[$i]</p>";		#Decommentare per controllare i valori
}
if ($valore[9] eq "Continua") {
	print "PRENOTA";
	$url="../riepilogo.html";
	$c -> redirect($url);
	$c -> detach();
} elsif ($valore[9] eq "Indietro") {
	$url="../prenotazioni.html";
#	$t=0;
#	print "<meta http-equiv=refresh content=\"$t URL=$url\">\n";
#   get("../prenotazioni.html");
 $c -> redirect($url);
 $c -> detach();
} 
print "</body>\n";
print "</html>\n";
