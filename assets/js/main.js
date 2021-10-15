/* 
    Programma per scorrere tramite 2 pulsanti (Up & Down) 
    fra le miniature di 5 paesaggi differenti.
    Nello stato di una miniatura selezionata, 
    il paesaggio viene mostrato nella schermata principale
    e la miniatura è in evidenza rispetto a quelle non selzionate.
*/ 

// collego la schermata principale e le miniature ciascuno ad una variabile dedicata;

// inserisco ogni immagine/titolo/testo in una lista

// creo delle variabili ciascuna contente un indice collegato ad un elemento delle liste

// aggiungo ai pulsanti la funzione di aumentare/diminuire di una unità l'indice delle variabili

// tramite un if controllo quale indice si trova dentro la variabile
// in base al valore dell'indice aggiungo lo stato "selected" alla corrispondente variabile
// lo stato selected aggiunge le classi agli elementi html 

/*
 BONUS: tramite un if gestisco gli estremi 0 e 4 della lista miniature:
        0 -1 = 4
        4 + 1 = 0
 */

// tumbnails
const tumb1 = document.getElementById('tumb_1');
const tumb2 = document.getElementById('tumb_2');
const tumb3 = document.getElementById('tumb_3');
const tumb4 = document.getElementById('tumb_4');
const tumb5 = document.getElementById('tumb_5');


let index = 1;
console.log(index);

// arrow buttons (Up & Down)
const buttonUp = document.getElementById('arrow_up');
const buttonDown = document.getElementById('arrow_down');

buttonUp.addEventListener('click', function() {
    index += 1;
    if (index = 6) {
        index = 1;
    }
    
    console.log(index);
})
buttonDown.addEventListener('click', function() {
    index -= 1;
    if (index = 0) {
        index = 5;
    }
    console.log(index);
})

// status selected
if (index = 1) {
    tumb1.classList.add('selected');
    tumb2.classList.remove('selected');
    tumb3.classList.remove('selected');
    tumb4.classList.remove('selected');
    tumb5.classList.remove('selected');
}
else if (index = 2) {
    tumb2.classList.add('selected');
    tumb1.classList.remove('selected');
    tumb3.classList.remove('selected');
    tumb4.classList.remove('selected');
    tumb5.classList.remove('selected');

}
else if (index = 3) {
    tumb3.classList.add('selected');
    tumb1.classList.remove('selected');
    tumb2.classList.remove('selected');
    tumb4.classList.remove('selected');
    tumb5.classList.remove('selected');
}
else if (index = 4) {
    tumb4.classList.add('selected');
    tumb1.classList.remove('selected');
    tumb2.classList.remove('selected');
    tumb3.classList.remove('selected');
    tumb5.classList.remove('selected');
}
else if (index = 5) {
    tumb5.classList.add('selected');
    tumb1.classList.remove('selected');
    tumb2.classList.remove('selected');
    tumb3.classList.remove('selected');
    tumb4.classList.remove('selected');
}
