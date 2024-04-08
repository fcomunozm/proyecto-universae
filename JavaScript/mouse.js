window.addEventListener("wheel", function(event) {
    event.preventDefault(); // Evitar el desplazamiento predeterminado de la ventana
    if (event.deltaY > 0) {
        // Desplazamiento hacia abajo
        window.scrollTo({
            top: window.scrollY + window.innerHeight,
            behavior: "smooth" // Desplazamiento suave hacia abajo
        });
    } else {
        // Desplazamiento hacia arriba
        window.scrollTo({
            top: window.scrollY - window.innerHeight,
            behavior: "smooth" // Desplazamiento suave hacia arriba
        });
    }
});
