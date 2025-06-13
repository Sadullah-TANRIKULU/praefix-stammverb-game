"use strict";
const examples = [
    {
        sentence: "Ich _bringe den Tag am See.",
        prefix: "ver",
        meaning: "verbringen = Zeit an einem Ort sein",
    },
    {
        sentence: "Kannst du das Licht _machen?",
        prefix: "an",
        meaning: "anmachen = einschalten",
    },
    {
        sentence: "Ich mache das Fenster _.",
        prefix: "auf",
        meaning: "aufmachen = öffnen",
    },
    {
        sentence: "Bitte mach die Tür _.",
        prefix: "zu",
        meaning: "zumachen = schließen",
    },
    {
        sentence: "Ich mache den Fernseher _.",
        prefix: "aus",
        meaning: "ausmachen = ausschalten",
    },
    {
        sentence: "Wir machen einen Termin _.",
        prefix: "ab",
        meaning: "abmachen = vereinbaren",
    },
    {
        sentence: "Mein Großvater _macht mir sein Auto.",
        prefix: "ver",
        meaning: "vermachen = schenken/nach dem Tod geben",
    },
    {
        sentence: "Ich _nehme einen Apfel.",
        prefix: "",
        meaning: "nehmen = greifen, nehmen",
    },
    {
        sentence: "Ich nehme das Bild von der Wand _.",
        prefix: "ab",
        meaning: "abnehmen = wegnehmen",
    },
    {
        sentence: "Ich nehme das Gespräch _.",
        prefix: "auf",
        meaning: "aufnehmen = aufzeichnen",
    },
    {
        sentence: "Ich nehme meine Tabletten _.",
        prefix: "ein",
        meaning: "einnehmen = zu sich nehmen",
    },
    {
        sentence: "Ich _nehme die Aufgabe.",
        prefix: "über",
        meaning: "übernehmen = sich kümmern um",
    },
    {
        sentence: "Der Arzt _nimmt Blut.",
        prefix: "ent",
        meaning: "entnehmen = herausnehmen",
    },
    {
        sentence: "Die Polizei _nimmt den Zeugen.",
        prefix: "ver",
        meaning: "vernehmen = befragen",
    },
    {
        sentence: "Ich nehme im Winter oft _.",
        prefix: "zu",
        meaning: "zunehmen = schwerer werden",
    },
    {
        sentence: "Kannst du bitte meine Tasche _halten?",
        prefix: "",
        meaning: "halten = festhalten",
    },
    {
        sentence: "Ich _halte das Geschenk.",
        prefix: "be",
        meaning: "behalten = nicht weggeben",
    },
    {
        sentence: "Ich _halte einen Brief.",
        prefix: "er",
        meaning: "erhalten = bekommen",
    },
    {
        sentence: "Die Flasche _hält Wasser.",
        prefix: "ent",
        meaning: "enthalten = drin haben",
    },
    {
        sentence: "Er _hält sich freundlich.",
        prefix: "ver",
        meaning: "verhalten = benehmen",
    },
    {
        sentence: "Der Regen hält mich vom Laufen _.",
        prefix: "ab",
        meaning: "abhalten = verhindern",
    },
    {
        sentence: "Ich halte den Lärm nicht _.",
        prefix: "aus",
        meaning: "aushalten = ertragen",
    },
    {
        sentence: "Der Bus hält an der Haltestelle _.",
        prefix: "an",
        meaning: "anhalten = stoppen",
    },
    {
        sentence: "Ich _stelle die Tasse auf den Tisch.",
        prefix: "",
        meaning: "stellen = hinstellen",
    },
    {
        sentence: "Ich stelle das Fahrrad _.",
        prefix: "ab",
        meaning: "abstellen = ablegen, parken",
    },
    {
        sentence: "Ich stelle mich hinten _.",
        prefix: "an",
        meaning: "anstellen = sich einreihen",
    },
    {
        sentence: "Wir stellen das Zelt _.",
        prefix: "auf",
        meaning: "aufstellen = aufbauen",
    },
    {
        sentence: "Das Museum stellt Bilder _.",
        prefix: "aus",
        meaning: "ausstellen = präsentieren",
    },
    {
        sentence: "Ich _stelle eine Pizza.",
        prefix: "be",
        meaning: "bestellen = ordern",
    },
    {
        sentence: "Die Firma stellt neue Mitarbeiter _.",
        prefix: "ein",
        meaning: "einstellen = anstellen",
    },
    {
        sentence: "Ich stelle dir meinen Freund _.",
        prefix: "vor",
        meaning: "vorstellen = bekannt machen",
    },
    {
        sentence: "Das Bild _stellt einen Hund.",
        prefix: "dar",
        meaning: "darstellen = zeigen",
    },
    {
        sentence: "Die Firma _stellt Autos.",
        prefix: "her",
        meaning: "herstellen = produzieren",
    },
    {
        sentence: "Ich _setze mich auf den Stuhl.",
        prefix: "",
        meaning: "setzen = sich hinsetzen",
    },
    {
        sentence: "Ich setze die Brille _.",
        prefix: "ab",
        meaning: "absetzen = abnehmen",
    },
    {
        sentence: "Ich setze die Mütze _.",
        prefix: "auf",
        meaning: "aufsetzen = auf den Kopf tun",
    },
    {
        sentence: "Der Bus setzt mich an der Schule _.",
        prefix: "aus",
        meaning: "aussetzen = alleine lassen",
    },
    {
        sentence: "Ich setze meine Brille _.",
        prefix: "ein",
        meaning: "einsetzen = benutzen",
    },
    {
        sentence: "Die Firma setzt die Idee _.",
        prefix: "um",
        meaning: "umsetzen = realisieren",
    },
    {
        sentence: "Der Platz ist _setzt.",
        prefix: "be",
        meaning: "besetzen = einnehmen",
    },
    {
        sentence: "Ich _setze die Batterie.",
        prefix: "er",
        meaning: "ersetzen = austauschen",
    },
    {
        sentence: "Ich _schreibe einen Brief.",
        prefix: "",
        meaning: "schreiben = einen Text verfassen",
    },
    {
        sentence: "Kannst du das Bild _schreiben?",
        prefix: "be",
        meaning: "beschreiben = erklären",
    },
    {
        sentence: "Der Arzt _schreibt mir Medikamente.",
        prefix: "ver",
        meaning: "verschreiben = aufschreiben",
    },
    {
        sentence: "Ich schreibe die Hausaufgaben _.",
        prefix: "ab",
        meaning: "abschreiben = kopieren",
    },
    {
        sentence: "Ich schreibe mich an der Uni _.",
        prefix: "ein",
        meaning: "einschreiben = anmelden",
    },
    {
        sentence: "Ich _schreibe den Vertrag.",
        prefix: "unter",
        meaning: "unterschreiben = signieren",
    },
    {
        sentence: "Ich _spreche Deutsch.",
        prefix: "",
        meaning: "sprechen = reden",
    },
    {
        sentence: "Wir _sprechen das Problem.",
        prefix: "be",
        meaning: "besprechen = diskutieren",
    },
    {
        sentence: "Ich _spreche dir zu helfen.",
        prefix: "ver",
        meaning: "versprechen = zusagen",
    },
    {
        sentence: "Kannst du ihn _sprechen?",
        prefix: "an",
        meaning: "ansprechen = Kontakt aufnehmen",
    },
    {
        sentence: "Ich kann das Wort nicht _sprechen.",
        prefix: "aus",
        meaning: "aussprechen = artikulieren, äussern",
    },
    {
        sentence: "Wir sprechen den Termin _.",
        prefix: "ab",
        meaning: "absprechen = vereinbaren",
    },
    {
        sentence: "Das _spricht meinen Erwartungen.",
        prefix: "ent",
        meaning: "entsprechen = passend sein",
    },
    {
        sentence: "Ich _fahre mit dem Auto.",
        prefix: "",
        meaning: "fahren = mit einem Fahrzeug bewegen",
    },
    {
        sentence: "Der Zug fährt um 8 Uhr _.",
        prefix: "ab",
        meaning: "abfahren = losfahren",
    },
    {
        sentence: "Der Bus fährt jetzt _.",
        prefix: "an",
        meaning: "anfahren = starten",
    },
    {
        sentence: "Wir fahren am Wochenende aus der Stadt _.",
        prefix: "aus",
        meaning: "ausfahren = hinausfahren, transportieren",
    },
    {
        sentence: "Der Zug fährt in den Bahnhof _.",
        prefix: "ein",
        meaning: "einfahren = hineinfahren",
    },
    {
        sentence: "Ich habe die Nachricht gestern _fahren.",
        prefix: "er",
        meaning: "erfahren = etwas Neues hören",
    },
    {
        sentence: "Der Autofahrer hat die rote Ampel _fahren.",
        prefix: "über",
        meaning: "überfahren = drüberfahren",
    },
    {
        sentence: "Ich _komme morgen zu dir.",
        prefix: "",
        meaning: "kommen = sich bewegen",
    },
    {
        sentence: "Der Zug kommt pünktlich _.",
        prefix: "an",
        meaning: "ankommen = eintreffen",
    },
    {
        sentence: "Ich komme gut mit meinen Kollegen _.",
        prefix: "aus",
        meaning: "auskommen = sich verstehen",
    },
    {
        sentence: "Ich _komme ein Geschenk.",
        prefix: "be",
        meaning: "bekommen = erhalten",
    },
    {
        sentence: "Der Dieb ist der Polizei _kommen.",
        prefix: "ent",
        meaning: "entkommen = fliehen",
    },
    {
        sentence: "So etwas kommt oft _.",
        prefix: "vor",
        meaning: "vorkommen = passieren",
    },
    {
        sentence: "Mich _kommt ein komisches Gefühl.",
        prefix: "über",
        meaning: "überkommen = plötzlich fühlen",
    },
    {
        sentence: "Ich _gehe zur Schule.",
        prefix: "",
        meaning: "gehen = laufen",
    },
    {
        sentence: "Wir gehen am Abend _.",
        prefix: "aus",
        meaning: "ausgehen = weggehen",
    },
    {
        sentence: "Die Pflanze ist _gegangen.",
        prefix: "ein",
        meaning: "eingehen = sterben",
    },
    {
        sentence: "Ich kann gut mit Stress _gehen.",
        prefix: "um",
        meaning: "umgehen = bewältigen",
    },
    {
        sentence: "Er _geht einen Fehler.",
        prefix: "be",
        meaning: "begehen = machen",
    },
    {
        sentence: "Die Zeit _geht schnell.",
        prefix: "ver",
        meaning: "vergehen = vorbeigehen",
    },
    {
        sentence: "Mir ist nichts _gangen.",
        prefix: "ent",
        meaning: "entgehen = verpassen",
    },
    {
        sentence: "Ich _gebe dir das Buch.",
        prefix: "",
        meaning: "geben = überreichen",
    },
    {
        sentence: "Ich gebe meine Hausaufgabe _.",
        prefix: "ab",
        meaning: "abgeben = einreichen",
    },
    {
        sentence: "Er gibt das Rauchen _.",
        prefix: "auf",
        meaning: "aufgeben = aufhören",
    },
    {
        sentence: "Zwei und zwei _geben vier.",
        prefix: "er",
        meaning: "ergeben = das Resultat sein",
    },
    {
        sentence: "Ich _gebe dir den Fehler.",
        prefix: "ver",
        meaning: "vergeben = verzeihen",
    },
    {
        sentence: "Ich gebe viel Geld _.",
        prefix: "aus",
        meaning: "ausgeben = Geld bezahlen",
    },
    {
        sentence: "Er gibt mit seinem Auto _.",
        prefix: "an",
        meaning: "angeben = prahlen, Informationen mitteilen",
    },
    {
        sentence: "Ich _sehe einen Vogel.",
        prefix: "",
        meaning: "sehen = mit den Augen wahrnehmen",
    },
    {
        sentence: "Ich sehe mir einen Film _.",
        prefix: "an",
        meaning: "ansehen = anschauen",
    },
    {
        sentence: "Ich habe das Schild _sehen.",
        prefix: "über",
        meaning: "übersehen = nicht bemerken",
    },
    {
        sentence: "Ich habe mich _sehen.",
        prefix: "ver",
        meaning: "versehen = einen Fehler machen",
    },
    {
        sentence: "Das Ende ist nicht _sehen.",
        prefix: "ab",
        meaning: "absehen = vorhersehen",
    },
    {
        sentence: "Du siehst müde _.",
        prefix: "aus",
        meaning: "aussehen = wirken",
    },
    {
        sentence: "Ich sehe meinen Fehler _.",
        prefix: "ein",
        meaning: "einsehen = erkennen",
    },
    {
        sentence: "Ich _lege das Buch auf den Tisch.",
        prefix: "",
        meaning: "legen = hinlegen",
    },
    {
        sentence: "Ich lege meine Jacke _.",
        prefix: "ab",
        meaning: "ablegen = ausziehen",
    },
    {
        sentence: "Ich lege einen Garten _.",
        prefix: "an",
        meaning: "anlegen = bauen",
    },
    {
        sentence: "Ich lege den Teppich _.",
        prefix: "aus",
        meaning: "auslegen = ausbreiten",
    },
    {
        sentence: "Ich lege die CD _.",
        prefix: "ein",
        meaning: "einlegen = hineintun",
    },
    {
        sentence: "Ich _belege einen Deutschkurs.",
        prefix: "be",
        meaning: "belegen = teilnehmen",
    },
    {
        sentence: "Ich _lege meine Antwort.",
        prefix: "über",
        meaning: "überlegen = nachdenken",
    },
    {
        sentence: "Ich _laufe jeden Morgen.",
        prefix: "",
        meaning: "laufen = rennen",
    },
    {
        sentence: "Die Frist läuft morgen _.",
        prefix: "ab",
        meaning: "ablaufen = enden",
    },
    {
        sentence: "Der Motor läuft _.",
        prefix: "an",
        meaning: "anlaufen = starten",
    },
    {
        sentence: "Die Milch läuft _.",
        prefix: "aus",
        meaning: "auslaufen = herausfließen",
    },
    {
        sentence: "Ich habe mich _laufen.",
        prefix: "ver",
        meaning: "verlaufen = den Weg verlieren",
    },
    {
        sentence: "Das Wasser _läuft.",
        prefix: "über",
        meaning: "überlaufen = zu viel werden",
    },
    {
        sentence: "Die Hose ist _gelaufen.",
        prefix: "ein",
        meaning: "einlaufen = kleiner werden",
    },
    {
        sentence: "Ich _ziehe den Schrank.",
        prefix: "",
        meaning: "ziehen = etwas bewegen",
    },
    {
        sentence: "Ich ziehe die Folie _.",
        prefix: "ab",
        meaning: "abziehen = entfernen",
    },
    {
        sentence: "Ich ziehe meine Jacke _.",
        prefix: "an",
        meaning: "anziehen = Kleidung anlegen",
    },
    {
        sentence: "Ich ziehe meine Schuhe _.",
        prefix: "aus",
        meaning: "ausziehen = Kleidung ausziehen",
    },
    {
        sentence: "Ich ziehe in eine neue Wohnung _.",
        prefix: "ein",
        meaning: "einziehen = umziehen",
    },
    {
        sentence: "Ich _beziehe meine Wohnung.",
        prefix: "be",
        meaning: "beziehen = einziehen",
    },
    {
        sentence: "Ich ziehe nach Zürich _.",
        prefix: "um",
        meaning: "umziehen = den Wohnort wechseln",
    },
    {
        sentence: "Ich _bringe dir einen Kaffee.",
        prefix: "",
        meaning: "bringen = geben, liefern",
    },
    {
        sentence: "Ich bringe meinen Freund _.",
        prefix: "mit",
        meaning: "mitbringen = mitnehmen",
    },
    {
        sentence: "Ich kann ihn nicht von seiner Meinung _bringen.",
        prefix: "ab",
        meaning: "abbringen = überzeugen, ändern",
    },
    {
        sentence: "Ich bringe das Bild an der Wand _.",
        prefix: "an",
        meaning: "anbringen = befestigen",
    },
    {
        sentence: "Der Bauer bringt Dünger _.",
        prefix: "aus",
        meaning: "ausbringen = verteilen",
    },
    {
        sentence: "Ich bringe meine Ideen _.",
        prefix: "ein",
        meaning: "einbringen = beitragen",
    },
    {
        sentence: "Ich _bringe den Tag am See.",
        prefix: "ver",
        meaning: "verbringen = Zeit mit etwas oder jemandem nutzen",
    },
];
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("./dist/service-worker.js")
        .then((reg) => console.log("Service Worker registered!", reg))
        .catch((err) => console.error("Service Worker registration failed:", err));
}
let current = 0;
let richtigZahler = 9;
function showSentence() {
    const s = examples[current];
    document.getElementById("sentence").innerText = s.sentence;
    document.getElementById("prefixInput").value = "";
    document.getElementById("feedback").innerText = "";
}
const richtig = document.getElementById("richtig");
function check() {
    const input = document.getElementById("prefixInput").value
        .trim()
        .toLowerCase();
    const correct = examples[current].prefix;
    const feedback = document.getElementById("feedback");
    if (input === correct) {
        feedback.innerHTML =
            "Richtig!  <img src='./assets/angry birds_yellow bird_icon_512.png' alt='bird' width='20' height='20' /><br>";
        richtigZahler++;
        if (richtigZahler === 10) {
            richtig.innerHTML = `Richtige Antwort : ${richtigZahler} <br> <span style="color: green; font-weight: bold;">Super! Du hast 10 richtige Antworten! <img src="./assets/angry birds_green bird_icon_512.png" width="50" > </span>`;
        }
        else {
            richtig.innerText = `Richtige Antworten : ${richtigZahler}`;
        }
    }
    else {
        feedback.innerHTML = `Falsch! <img src='./assets/angry birds_black bird_icon_512.png' alt='bird' width='20' height='20' /> <br> Richtig wäre:    <span id="correctPrefix">${correct}</span>`;
    }
    current = Math.floor(Math.random() * examples.length);
    console.log(`Current index: ${current}, Total examples: ${examples.length}`);
    setTimeout(showSentence, 1500);
}
document.getElementById("checkBtn").addEventListener("click", check);
showSentence();
