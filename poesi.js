const input = document.getElementById("input");
const divSweets = document.getElementById("divSweets");
const btnPrint = document.getElementById("btnPrint");
const divResult = document.getElementById("divResult");

let sweets = ["lakrits", "geléhallon", "chips", "jordgubbar", "ost", "hallonbåtar", "kaka", "paj", "choklad", "pannkaka", "fondue", "pasta", "nektarin", "salta pinnar", "musslor"];

let newSweets = [];

for (i=0; i<sweets.length; i++) {
    const btnSweets = document.createElement("button");
    btnSweets.classList = "btnNotSelected";
    btnSweets.id= `${i}`;
    btnSweets.textContent = `${sweets[i]}`;
    divSweets.appendChild(btnSweets);

    //lägga till items till nya arrayen newSweets:
    btnSweets.addEventListener("click", function() {
        console.log("klick btnSweets", btnSweets.innerText);
        newSweets.push(btnSweets.innerText);
        console.log(newSweets);
    });    
};

btnPrint.addEventListener("click", function() {
    console.log("klick", input.value); //kolla if else om input.value är tomt eller ej

    if (input.value == "") {
    //print newSweets, töm newSweets:
    divResult.innerHTML = newSweets;
    newSweets = [];
    console.log("input.value är tomt");
    } else {
    // Blandar om items i sweets-array
    const shuffleSweets = sweets.sort(() => 0.5 - Math.random());
    // console.log("blandar arrayen", shuffleSweets);
    console.log("input.value är inte tomt");

    //print x amount of words
    // console.log("skriv ut så här många ord: ", input.value);
    let printNumberWords = shuffleSweets.slice(0, input.value);
    // console.log(printNumberWords);
    divResult.innerHTML = printNumberWords;
    }
}); 
    


/*UPPGIFT
X Skapa en array som innehåller minst 15 korta ord.
X Använd en for loop som skapar knappar till webbsidan för alla ord. Dvs en knapp per ord.

x När besökaren klickar på ett ord så skall detta ordet läggas till i en ny array, visa inget resultat förutom att tex knappen ändrar färg eller liknande.

x Det skall finnas en fast knapp på sidan där det står “Skriv ut”.

x Klickar användaren på denna knapp så skall de ord som tidigare klickats på (som finns i den nya arrayn) skrivas ut som en mening på sidan.

Bonus:
x Skapa ett formulär där besökaren skriver en siffra ovanför orden.

x Slumpa sedan ut en mening med så många ord som besökaren anget när besökaren klickar på knappen “Skriv ut”.*/