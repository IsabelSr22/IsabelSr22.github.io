

let slideIndex = 0;

function mostrarSlide(n) {
    const slides = document.getElementsByClassName("slide");

    // Vuelve al primer slide si llega al final
    if (n >= slides.length) {
        slideIndex = 0;
    }

    // Vuelve al último slide si retrocede desde el primero
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Oculta todos los slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Muestra el slide actual
    slides[slideIndex].style.display = "block";
}

function cambiarSlide(n) {
    // Cambia al siguiente o anterior slide
    slideIndex += n;
    mostrarSlide(slideIndex);
}

// Inicia el carrusel al cargar la página
mostrarSlide(slideIndex);

