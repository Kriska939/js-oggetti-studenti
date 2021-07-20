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

printArray(students, displayProfile);


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var newName = prompt("Inserisci il nome");
var newSurname = prompt("Inserisci il cognome");
var newAge = prompt("Inserisci l'età");

var newStudent = {
    name: newName,
    surname: newSurname,
    age: newAge
};

students.push(newStudent);

printArray(students, displayProfile);


// funzione per stampare:

function printArray(objectArray, targetElement) {
    var content = "";

    for (var i = 0; i < objectArray.length; i++) {

        // creo una variabile per prendere i singoli oggetti:
        var singleStudent = objectArray[i];

        // inserisco ogni nome e cognome in variabile:
        content += singleStudent.name + " " + singleStudent.surname + "</br>";
    }

    targetElement.innerHTML = content;
}
