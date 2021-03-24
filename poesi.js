const wrapper = document.querySelector("#wrapper");
const input = document.getElementById("input");
const divSweets = document.getElementById("divSweets");
const btnPrint = document.getElementById("btnPrint");
const divResult = document.createElement("div");
divResult.id = "divResult";
const mySweets = document.getElementById("mySweets");

let sweets = ["apelsinflaskor", "banana skids", "Bassett's Sour Winegums", "björnar", "hallonbåtar", "blåa kastanjer", "blåöga", "brio frukt", "bubblizz air", "bumlingar jordgubb"];

let newSweets = [];

//create btnSweets
for (i=0; i<sweets.length; i++) {
    const btnSweets = document.createElement("button");
    btnSweets.classList = "btn";
    btnSweets.id= `${i}`;
    btnSweets.textContent = `${sweets[i]}`;
    divSweets.appendChild(btnSweets);

    //lägga till items till nya arrayen newSweets:
    btnSweets.addEventListener("click", function() {
        divResult.innerHTML = "";

        // console.log("btnSweets.classList", btnSweets.classList);
        btnSweets.classList.toggle("btnSelected");

        if (btnSweets.classList == "btn btnSelected") {
            console.log("den är markerad, lägg till i newSweets");
            newSweets.push(btnSweets.innerText);
            console.log("newSweets", newSweets);
        } else {
            console.log("den är inte markerad, ta bort från newSweets");
            const index = newSweets.indexOf(btnSweets.innerText);
            if (index > -1) {
                newSweets.splice(index, 1);
            }
            console.log("newSweets after splice", newSweets);
        };        
    });  

    input.addEventListener("click", function(){

        //remove color selection on sweets
        btnSweets.classList.remove ("btnSelected");

        //empty newSweets array
        newSweets = [];
    })
};

btnBuy.addEventListener("click", function() {
    const btnSweets = document.querySelectorAll(".btn")
    console.log(btnSweets);
    if (btnSweets.classList == "btnSelected") {
        btnSweets.classList.remove("btnSelected");
    };
    mySweets.innerHTML = "";

    for (sweet in newSweets) {
        mySweetsTemplate = `
                <li>${newSweets[sweet]}</li>
        `;
        mySweets.insertAdjacentHTML("beforeend", mySweetsTemplate);
    };

    if (input.value == "") {
        //print newSweets, töm newSweets:
        divResult.innerHTML = newSweets;
        // newSweets = [];
        // console.log("input.value är tomt");
    } else {
        // TA BORT BTNSELECTEDKLASSEN
        // Blandar om items i sweets-array
        const shuffleSweets = sweets.sort(() => 0.5 - Math.random());
        // console.log("blandar arrayen", shuffleSweets);
        console.log("input.value är inte tomt");

        //print x amount of words
        // console.log("skriv ut så här många ord: ", input.value);
        let printNumberWords = shuffleSweets.slice(0, input.value);
        // mySweets.innerHTML = printNumberWords;

        for (word in printNumberWords) {
            printNumberWordsTemplate = `
                    <li>${printNumberWords[word]}</li>
            `;
            mySweets.insertAdjacentHTML("beforeend", printNumberWordsTemplate);
        };
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