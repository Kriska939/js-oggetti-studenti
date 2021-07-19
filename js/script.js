/* ESERCIZIO 1

Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.

*/

// Step 1 - Creazione oggetto con proprietà: nome, cognome, età:

var student = {
    name: "Cristina",
    surname: "Corrado",
    age: "27"
}

//check object:
// console.log(student);

// Step 2 - Imposto ciclo for-in e lo uso per stampare in pagina:

//VAR per stampa: 

var displayProfile = document.getElementById("student-profile");


for (var key in student) {
    displayProfile.innerHTML += (student[key] + "</br>")
};