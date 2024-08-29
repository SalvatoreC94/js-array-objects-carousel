const imagesContainer = document.querySelector('.images-container');
const imageTitle = document.getElementById('image-title');
const imageDescription = document.getElementById('image-description');

// Array contenente gli oggetti delle immagini
const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let currentIndex = 0;
const imageWidth = 600; // Larghezza delle immagini

// Funzione per aggiungere le immagini al container
function addImages() {
    let imagesHTML = '';
    for (let i = 0; i < images.length; i++) {
        imagesHTML += `<img src="${images[i].image}" class="carousel-image">`;
    }
    imagesContainer.innerHTML = imagesHTML;
    imagesContainer.style.width = `${images.length * imageWidth}px`; // Imposta la larghezza totale del container
    console.log('Immagini aggiunte al carosello:', images);
}

// Funzione per aggiornare il testo del carosello
function updateText() {
    imageTitle.textContent = images[currentIndex].title;
    imageDescription.textContent = images[currentIndex].text;
}

// Mostra la prima immagine e testo all'avvio
addImages();
updateText();

// Event listener per la freccia sinistra
document.getElementById('left-arrow').addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Torna all'ultima immagine
    }
    imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Sposta le immagini a sinistra
    updateText();
    console.log('Immagine precedente visualizzata. Indice corrente:', currentIndex);
});

// Event listener per la freccia destra
document.getElementById('right-arrow').addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Torna alla prima immagine
    }
    imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Sposta le immagini a destra
    updateText();
    console.log('Prossima immagine visualizzata. Indice corrente:', currentIndex);
});

// BONUS: Autoplay
let autoplay = setInterval(function () {
    document.getElementById('right-arrow').click();
}, 3000);

// BONUS: Start/Stop e inversione autoplay
document.getElementById('start-stop').addEventListener('click', function () {
    if (autoplay) {
        clearInterval(autoplay);
        autoplay = null;
        this.textContent = 'Start';
    } else {
        autoplay = setInterval(function () {
            document.getElementById('right-arrow').click();
        }, 3000);
        this.textContent = 'Stop';
    }
});

