// Array contenente i percorsi delle immagini
const imagesContainer = document.querySelector('.images-container');
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

let currentIndex = 0;
const imageWidth = 600; // Larghezza delle immagini

// Funzione per aggiungere le immagini al container
function addImages() {


    let imagesHTML = '';
    for (let i = 0; i < images.length; i++) {
        imagesHTML += `<img src="${images[i]}" class="carousel-image">`;
    }
    imagesContainer.innerHTML = imagesHTML;
    imagesContainer.style.width = `${images.length * imageWidth}px`; // Imposta la larghezza totale del container
    console.log('Immagini aggiunte al carosello:', images);
}

// Mostra la prima immagine all'avvio
addImages();

// Event listener per la freccia sinistra
document.getElementById('left-arrow').addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Sposta le immagini a sinistra
        console.log('Immagine precedente visualizzata. Indice corrente:', currentIndex);
    } else {
        console.log('Sei già alla prima immagine. Indice corrente:', currentIndex);
    }
});

// Event listener per la freccia destra
document.getElementById('right-arrow').addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Sposta le immagini a destra
        console.log('Prossima immagine visualizzata. Indice corrente:', currentIndex);
    } else {
        console.log('Sei già all\'ultima immagine. Indice corrente:', currentIndex);
    }
});



