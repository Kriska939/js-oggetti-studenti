/* ESERCIZIO 2

Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


*/

// STEP 1 - Creo array di oggetti studenti:

var students = [
    {
        name: "Mario",
        surname: "Rossi",
        age: 22
    },

    {
        name: "Mario",
        surname: "Verdi",
        age: 24

    },

    {
        name: "Mario",
        surname: "Bianchi",
        age: 28

    }

]

// STEP 2 - Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// VAR STAMPA

var displayProfile = document.getElementById("student-profile");

for (var i = 0; i < students.length; i++) {

    // creo una variabile per prendere i singoli oggetti:
    var singleStudent = students[i];

    // stampo solo nome e cognome:
    displayProfile.innerHTML += singleStudent.name + " " + singleStudent.surname + "</br>";

}

