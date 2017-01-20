//window.alert("script starttest")

//* De Function onclick1() delete/ remove de inhoud van het aanvraagtekstveld

function onclick1(){
	 $('#Aanvraag').val('');
}

//* De Function onclick2() delete/ remove de inhoud van het leveringstekstveld

function onclick2(){
	 $('#Levering').val('');
}


/** De onderstaande functie test allereerst of de velden niet leeg zijn,
	daarnaast wordt er gekeken of de lengte van de karakters niet over de 100 gaat.
	Als de velden leeg zijn komt er een foutmelding dat deze velden gevuld zullen moeten worden
	to do --> Als de velden meer als 100 tekens bevatten dan komt een alert, en de knop publiceer zal uitgeschakeld moeten worden
	to do --> Als de inhoud wel binnen 100 tekens valt moet deze met de gepubliceerdknop doorgestuurd worden naar de volgende pagina
**/

function onclick3() {
    var x = $('#Aanvraag').val('');
    var sln = x.length();
    var y = $('#Levering').val('');
    var sln2 = y.length();
    
	if(x = " "){
    	alert("Dit veld mag niet leeg zijn");}
	else if (y = " "){
		alert("Dit veld mag niet leeg zijn");}
    else if (sln >100){ 
        alert("teveel karakters");}
		/*grey out de button
		make red de karakters*/
    else if(sln2 >100){
    	alert("teveel karakters");}
		/*grey out de button
		make red de karakters*/
   	else {
		alert("het word gepubliceerd")
		return false /*return de gegevens naar volgende pagina + database*/;}
}



//window.alert("het script werkt niet");