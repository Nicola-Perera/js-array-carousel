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

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];      

// arrow buttons (Up & Down)
const buttonUp = document.getElementById('arrow_up');
const buttonDown = document.getElementById('arrow_down');

buttonUp.addEventListener('click', function() {
    --index;
    if (index == 0) {
        index = 5;
    }
    
    console.log(index);

    if (index == 1) {
    
        const selectedPic = `<h1 class=" viewed_picture">foto 1</h1>`;
    
            bigScreen.innerHTML = selectedPic;
    }
    else if (index == 2) {
    
        const selectedPic = `<h1 class=" viewed_picture">foto 2</h1>`;
    
            bigScreen.innerHTML = selectedPic;
    
    }
    else if (index == 3) {
        
    }
    else if (index == 4) {
        
    }
    else if (index == 5) {
        
    }
    
})
buttonDown.addEventListener('click', function() {
    ++index;
    if (index == 6) {
        index = 1;
    }
    console.log(index);

    if (index == 1) {
    
        const selectedPic = `<h1 class=" viewed_picture">foto 1</h1>`;
    
            bigScreen.innerHTML = selectedPic;
    }
    else if (index == 2) {
    
        const selectedPic = `<h1 class=" viewed_picture">foto 2</h1>`;
    
            bigScreen.innerHTML = selectedPic;
    
    }
    else if (index == 3) {
        
    }
    else if (index == 4) {
        
    }
    else if (index == 5) {
        
    }
    
})

// selected pic screen
const bigScreen = document.getElementById('main_view');

// tumbnails
const tumbnails = document.getElementById('tumbnails');


let bigPic;
let tumb;
let index = 1;
console.log(index);

for (let i = 0; i < items.length; i++) {
    bigPic += `
                <div class"bigPic">
                    <img src="${items[i]}">
                    <div class="text">
                        <h3>${title[i]}</h3>
                        <p>${text[i]}</p>
                    </div>
                </div>
               `;
    tumb += `
                <div class="tumb">
                    <img src="${items[i]}">
                </div>
            `
}

bigScreen.innerHTML = bigPic;
document.getElementsByClassName('bigPic').classList.add('selected');

tumbnails.innerHTML = tumb;
document.getElementsByClassName('tumb')[index].classList.add('selected');





// status selected
