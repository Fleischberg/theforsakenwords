	var image = document.getElementById("image");
	var text = document.getElementById("text");
	var button = document.getElementById("button");
	var playerLife;
	var enemyLife;
	var schadenH;
	var schadenG;
	playerLife = 10;
	enemyLife = 10;
	var a = "a";
	var aa ="aa";
	var b = "b";
	var bb = "bb";
	var c = "c";
	var cc = "cc";
	var d = "d";
	var defense;
	var damageItem;
	var maxPots = 3;//Anzahl der Nutzung von Heilung im Kampf
	var heal = 3;//Wert der Heilung
	
	//Eine Funktion die das angezeigte Bild ändern soll im zugehörigen Html-Container
	
	function changeImage(bild) {
		image.src = bild;
	}

	//Eine Funktion die die Eingabebuttons wechselt ändern soll im zugehörigen Html-Container
 
	function changeButtons(buttonList){
	  button.innerHTML = "";
		for (var i = 0; i <= buttonList.length; i++) {
		button.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
		}
	}

	//Eine Funktion die den Text ändern soll im zugehörigen Html-Container
 
	function changeText(texte){
		text.innerHTML = (texte);
	}

	

	//Das Wechseln einer Szene soll mithilfe der 3 vorherigen Funktionen geschehen
	function changeScene(szene){
		changeImage(szene.image); //In die Klammern soll die Szene gewählt werden und aus der Szene der Pfad zum Bild 
		changeText(szene.text);
		changeButtons(szene.buttons);
	}

	var schadenHeldEasy = [1, 2, 2, 1, 1]; //Array der den Schaden/Wahrscheinlichkeiten bei einfachen Kämpfen zeigt
	var schadenHeldNormal = [1, 2, 1, 1, 0];
	var schadenGegnerEasy = [1, 1, 0, 0, 0];
	var schadenGegnerNormal = [2, 1, 1, 0, 0];
	
	
	function kampf(s){
		//Kampf a
		if(s=="a"){
			schadenH = schadenHeldEasy[Math.floor(Math.random()*schadenHeldEasy.length)];//Zufälliger Wert aus dem Array als Schaden
			schadenG = schadenGegnerEasy[Math.floor(Math.random()*schadenGegnerEasy.length)];
			
			enemyLife = enemyLife - schadenH;
			playerLife = playerLife - schadenG;
			
			if (enemyLife<=0){
				text.innerHTML = ("Du hast die Orks besiegt");
				playerLife = 10;
				enemyLife = 10;
				button.innerHTML = "<button onClick="+'"'+"changeScene(szenea1)"+'"'+">Weiter</button>";
			}
			else if(playerLife<=0){
				changeScene(gameover);
				playerLife = 10;
				enemyLife = 10;
			}
			else if (playerLife!=0 && enemyLife!=0){
				text.innerHTML = ("Gegner ("+enemyLife+") nimmt "+schadenH+" Schaden. Du ("+playerLife+") nimmst "+schadenG+" Schaden");
				button.innerHTML = "<button onClick="+'"'+"kampf(a)"+'"'+">Angreifen</button>";
				button.innerHTML += "<button onClick="+'"'+"kampf(aa)"+'"'+">Blocken</button>";
			}
		}
		if(s=="aa"){
			
			schadenG = schadenGegnerEasy[Math.floor(Math.random()*schadenGegnerEasy.length)];
			defense = schadenHeldEasy[Math.floor(Math.random()*schadenHeldEasy.length)];
			if(defense<=schadenG){
			playerLife= playerLife +(defense-schadenG);
			}
			else{
			playerLife=playerLife;
			}
			
			if(playerLife<=0){
				changeScene(gameover);
				playerLife = 10;
				enemyLife = 10;
			}
			else if (playerLife!=0 && enemyLife!=0){
				text.innerHTML = ("Gegner("+enemyLife+") greift an mit "+schadenG+" Schaden, du("+playerLife+") blockst "+defense+" Schaden");
				button.innerHTML = "<button onClick="+'"'+"kampf(a)"+'"'+">Angreifen</button>";
				button.innerHTML += "<button onClick="+'"'+"kampf(aa)"+'"'+">Blocken</button>";
			}
		}
		//Kampf b
		if(s=="b"){
			schadenH = schadenHeldEasy[Math.floor(Math.random()*schadenHeldEasy.length)];//Zufälliger Wert aus dem Array als Schaden
			schadenG = schadenGegnerNormal[Math.floor(Math.random()*schadenGegnerNormal.length)];
			
			enemyLife = enemyLife - schadenH;
			playerLife = playerLife - schadenG;
			
			if (enemyLife<=0){
				text.innerHTML = ("Du hast die Späher besiegt");
				playerLife = 10;
				enemyLife = 10;
				button.innerHTML = "<button onClick="+'"'+"changeScene(szeneb1aa)"+'"'+">Weiter</button>";
			}
			else if(playerLife<=0){
				changeScene(gameover);
				playerLife = 10;
				enemyLife = 10;
			}
			else if (playerLife!=0 && enemyLife!=0){
				text.innerHTML = ("Gegner ("+enemyLife+") nimmt "+schadenH+" Schaden. Du ("+playerLife+") nimmst "+schadenG+" Schaden");
				button.innerHTML = "<button onClick="+'"'+"kampf(b)"+'"'+">Angreifen</button>";
				button.innerHTML += "<button onClick="+'"'+"kampf(bb)"+'"'+">Blocken</button>";
			}
		}
		if(s=="bb"){
			
			schadenG = schadenGegnerNormal[Math.floor(Math.random()*schadenGegnerNormal.length)];
			defense = schadenHeldEasy[Math.floor(Math.random()*schadenHeldEasy.length)];
			if(defense<=schadenG){
			playerLife= playerLife +(defense-schadenG);
			}
			else{
			playerLife=playerLife;
			}
			
			if(playerLife<=0){
				changeScene(gameover);
				playerLife = 10;
				enemyLife = 10;
			}
			else if (playerLife!=0 && enemyLife!=0){
				text.innerHTML = ("Gegner("+enemyLife+") greift an mit "+schadenG+" Schaden, du("+playerLife+") blockst "+defense+" Schaden");
				button.innerHTML = "<button onClick="+'"'+"kampf(b)"+'"'+">Angreifen</button>";
				button.innerHTML += "<button onClick="+'"'+"kampf(bb)"+'"'+">Blocken</button>";
			}
		}
		//Kampf c
		if(s=="c"){
			schadenH = schadenHeldNormal[Math.floor(Math.random()*schadenHeldNormal.length)];//Zufälliger Wert aus dem Array als Schaden
			schadenG = schadenGegnerNormal[Math.floor(Math.random()*schadenGegnerNormal.length)];
			
			enemyLife = enemyLife - schadenH;
			playerLife = playerLife - schadenG;
			
			if (enemyLife<=0){
				text.innerHTML = ("Du hast die Ork Truppen besiegt");
				playerLife = 10;
				enemyLife = 10;
				damageItem=2;//Bonus Angriffspunkte für spätere Kämpfe (Eisenschwert)
				button.innerHTML = "<button onClick="+'"'+"changeScene(szeneHaSieg)"+'"'+">Weiter</button>";
			}
			else if(playerLife<=0){
				changeScene(gameover);
				playerLife = 10;
				enemyLife = 10;
			}
			else if (playerLife!=0 && enemyLife!=0){
				text.innerHTML = ("Gegner ("+enemyLife+") nimmt "+schadenH+" Schaden. Du ("+playerLife+") nimmst "+schadenG+" Schaden");
				button.innerHTML = "<button onClick="+'"'+"kampf(c)"+'"'+">Angreifen</button>";
				button.innerHTML += "<button onClick="+'"'+"kampf(cc)"+'"'+">Blocken</button>";
			}
		}
		if(s=="cc"){
			
			schadenG = schadenGegnerNormal[Math.floor(Math.random()*schadenGegnerNormal.length)];
			defense = schadenHeldEasy[Math.floor(Math.random()*schadenHeldEasy.length)];
			if(defense<=schadenG){
			playerLife= playerLife +(defense-schadenG);
			}
			else{
			playerLife=playerLife;
			}
			
			if(playerLife<=0){
				changeScene(gameover);
				playerLife = 10;
				enemyLife = 10;
			}
			else if (playerLife!=0 && enemyLife!=0){
				text.innerHTML = ("Gegner("+enemyLife+") greift an mit "+schadenG+" Schaden, du("+playerLife+") blockst "+defense+" Schaden");
				button.innerHTML = "<button onClick="+'"'+"kampf(c)"+'"'+">Angreifen</button>";
				button.innerHTML += "<button onClick="+'"'+"kampf(cc)"+'"'+">Blocken</button>";
			}
		}
	
	
	}
	/*
	Heilen
	if(s=="  "){
			 
			schadenG = schadenGegner[Math.floor(Math.random()*schadenGegner.length)];
			
			if(heal<=schadenG){
			playerLife= playerLife +(heal-schadenG);
			}
			else{
			playerLife=playerLife+heal;
				if (playerlife > 10){
					playerlife = 10;
				}
			}
			
			if(playerLife<=0){
				changeScene(gameover);
				playerLife = 10;
				enemyLife = 10;
			}
			else if (playerLife!=0 && enemyLife!=0){
				text.innerHTML = ("Gegner ("+enemyLife+") nimmt "+schadenH+" Schaden. Du ("+playerLife+") heilst "+heal+" und nimmst "+schadenG+" Schaden");
				button.innerHTML = "<button onClick="+'"'+"kampf( )"+'"'+">Angreifen</button>";
				button.innerHTML += "<button onClick="+'"'+"kampf( )"+'"'+">Blocken</button>";
				button.innerHTML += "<button onClick="+'"'+"kampf( )"+'"'+">Heilen("+maxPots+")</button>";
			}
		}
		
	*/
	
	
	
	// Ein Array was die Szenen Texte, Bilder und Texte und die Buttons enthält.
	var szenario = {
		image : "platzhalter.png",
		text :"Probe Versuch !!",
		buttons :[["Zurück", "changeScene(start)"],["Abenteuer", "changeScene(szenea)"]]
	}
	var start = {
		image : "bild.png",
		text :"Probe Versuch !!",
		buttons :[["Start", "changeScene(szenario)"]]
	}
	var szeneStart = {
		image : "platzhalter.png",
		text :"Bist du bereit deine Reise zu starten?",
		buttons :[["Start", "changeScene(szenea)"]]
	}
	var szenea ={
		image :"platzhalter.png",//Bild einer Bauernscheune
		text :"Du befindest dich auf deiner Farm in der Ferne siehst du eine Gruppe Orks auf deine Farm zukommen. Was tust du?",
		buttons :[["Weglaufen(Wald)","changeScene(szenea1)"],["Verstecken(Farm)","changeScene(szenea2)"],["Kämpfen","kampf(a)"]]
	}
	var szenea1 ={
		image :"platzhalter.png",//Bild eines Waldes
		text :"Du befindest dich am Rande des Waldes weitere Orks haben haben dich nicht bemerkt vor dir siehst du 2 Wege die Hauptstraße und einen Waldweg.\nWelchen Weg nimmst du?",
		buttons :[["Haupstraße","changeScene(szeneH)"],["Waldweg","changeScene(szeneb1)"]]
	}
	var szeneH = {
		image : "platzhalter.png",
		text :"Entlang der Haupstraße bemerkst du Wegsperren und Blutspuren.",
		buttons :[["Weitergehen", "changeScene(szeneHa)"],["Zurücklaufen", "changeScene(szenea1)"]]
	}
	var szeneHa = {
		image : "platzhalter.png",
		text :"Du folgst der Straße und triffst auf ein Camp von  Orks. ",
		buttons :[["Kämpfen", "kampf(c)"],["Zurücklaufen", "changeScene(szenea1)"]]
	}
	//SzeneHaSieg soll später durch erhalten des Eisenschwerts den Helden mehr Schaden geben.
	var szeneHaSieg = {
		image : "platzhalter.png",
		text :"Du hast die Orks besiegt und druchstöberst ihr Camp. Du findest ein Eisenschwert und entscheidest dich im Wald weiter zureisen.",
		buttons :[["Weiter", "changeScene(szenec)"]]
	}
	var szenea2 ={
		image :"platzhalter.png",//Scheune
		text :"Du hast dich in der Scheune versteckt die Orks sind angekommen und verwüsten deine Farm!!",
		buttons :[["Hinterhalt starten","kampf(a)"],["Orks belauschen","changeScene(szenea2b)"]]
	}
	var gameover ={
		image :"platzhalter.png",//Bild mit Game Over
		text :"Du bist tot....",
		buttons :[["Neustart?","changeScene(szeneStart)"]]
	}
	var szenea2b ={
		image :"platzhalter.png",//Scheune
		text :"Du verstehst die Orks nur grob aber du erfährst das die Hauptstraße von der Orkarmee besetzt ist. Kurze Zeit später ziehen die Orks weiter.",
		buttons :[["In den Wald laufen","changeScene(szenea1)"]]
	}
	var szeneb1 = {
		image : "platzhalter.png",
		text :"Du gehst tiefer in den Wald. Nach einigen Stunden merkst du ,das die Sonne sich senkt. ",
		buttons :[["Lagerfeuer starten", "changeScene(szeneb1a)"],["Weitergehen", "changeScene(szeneb1b)"],["Höhle aufsuchen(schlafen)", "changeScene(szeneb1c)"]]
	}
	var szeneb1b = {
		image : "platzhalter.png",
		text :"Du fühlst wie dir langsam die kraft ausgeht, deine Sicht wird trübe. Du hörst ein Rudel Wölfe doch du bist zu geschwächt um zu Flüchten..",
		buttons :[["Weiter", "changeScene(gameover)"]]
	}
	var szeneb1a = {
		image : "platzhalter.png",
		text :"Du ruhst dich am Lagerfeuer aus bist dich eine Gruppe von Orkspähern bemerkt.",
		buttons :[["Kämpfen", "kampf(b)"]]
	}
	var szeneb1aa = {
		image : "platzhalter.png",
		text :"Du hast die Späher besiegt und löschst das Feuer. Der Morgen bricht an.",
		buttons :[["Weiterreisen", "changeScene(szenec)"]]
	}
	var szeneb1c = {
		image : "platzhalter.png",
		text :"Du findest eine kleine Höhle innerhalb der Wurzeln eines Baumes sie scheint verlassen zu sein.Du enscheidest dich zu Schlafen und bei Anbruch des Morgens weiter zu reisen.",
		buttons :[["Schlafen", "changeScene(szenec)"]]
	}
	var szenec = {
		image : "platzhalter.png",
		text :"Du verlässt den Wald und folgst einer Straße zu einer Taverne. Die Taverne nennt sich 'Singende Nachtigall' sie ist eine Taverne Abseitz der Straßen und wurde daher noch nicht geplündert.",
		buttons :[["Betreten", "changeScene(szened)"]]
	}
	var szened = {
		image : "platzhalter.png",
		text :"Du betrittst die Taverne und merkst das nur wenige Personen sich hier befinden. Du sitz dich neben einen alten Mann an der Theke der Bar. Und fragst ihn was passiert ist.",
		buttons :[["Ansprechen", "changeScene(szened1)"]]
	}
	var szened1 = {
		image : "platzhalter.png",
		text :"Der alte Mann ist überrascht das du nicht von den Umständen des Krieges gehört hat. ",
		buttons :[["Weiter", "changeScene(szened2)"]]
	}
	var szened2 = {
		image : "platzhalter.png",
		text :"Alte Mann : Nenn mich Dewan ich bin Besitzer eines kleinen Alchemiegeschäftes in Tyran. Doch vor einigen Tagen erklärten uns die Orks den Krieg... ",
		buttons :[["Weiter", "changeScene(szened3)"]]
	}
	var szened3 = {
		image : "platzhalter.png",
		text :"Dawen : Tyran ist eine kleine Handelstadt auf dem Weg zur Haupstadt Erdwyrm. Ohne eine Armee blieb uns nichts anderes als zu fliehen. Viele reisen nach Erdwyrm um Schutz zu suchen.",
		buttons :[["Weiter", "changeScene(szened4)"]]
	}
	var szened4 = {
		image : "platzhalter.png",
		text :"Dawen : Ich rate dir auch nach Erdwyrm aufzubrechen.Doch dieser alte Mann hier wird die Reise nichtmehr schaffen...",
		buttons :[["Weiter", "changeScene(szened5)"]]
	}
	var szened5 = {
		image : "platzhalter.png",
		text :"Dawen : Ich bitte dich um einen Gefallen ,bring diesen Brief zu einen Händler Namens Garwen in Erdwyrm. Keine Sorge du wirst auch belohnt hier. ",
		buttons :[["Belohnung annehmen", "changeScene(szened6)"]]
	}
	var szened6 = {
		image : "platzhalter.png",
		text :"Du stimmst Dawen zu und hilfst ihm.Du erhälst einen kleinen unerschöpflichen Trank der Heilung. Im Kampf kannst du dich nun heilen!!",//Ab jetz ist der Spieler in der Lage sich zu heilen begrenzt auf 3 Heilungen pro Kampf.
		buttons :[["Weiter", "changeScene(szened7)"]]
	}
	var szened7 = {
		image : "platzhalter.png",
		text :"Dawen : Aber heute solltest du dich erstmal ausruhen. Bei Morgenanbruch gebe ich dir die Karte nach Erdwyrm.",
		buttons :[["Ausruhen", "changeScene(szenee)"],["Weiter unterhalten", "changeScene(szened8)"]]
	}	
	var szened8 = {
		image : "platzhalter.png",
		text :"Dewan : Du solltest jetz schlafen gehen unterhalten können wir uns auch morgen. HAHA...hust..hust..",
		buttons :[["Ausruhen", "changeScene(szenee)"]]
	}
	var szenee = {
		image : "platzhalter.png",
		text :"Du mietest ein Zimmer und ruhst dich aus.",
		buttons :[["Weiter", "changeScene(szenee1)"]]
	}
	var szenee1 = {
		image : "platzhalter.png",
		text :"Der Morgen bricht an ,du suchst Dawen auf.",
		buttons :[["Weiter", "changeScene(szenePause)"]]
	}
	//Lückenhalter
	var szenePause ={
		image :"platzhalter.png",
		text :"to be continued",
		buttons :[["Weiter","kampf(szenePause)"]]
	}
	
	changeScene(szeneStart);
