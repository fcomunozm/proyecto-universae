const abrirDesplegables = document.querySelectorAll('.desplegable');
const contenidoSecundario = document.querySelectorAll('.contenido-secundario');

abrirDesplegables.forEach((desplegable, index) => {
    desplegable.addEventListener('click', () => {
        if (contenidoSecundario[index].style.display === "none" || contenidoSecundario[index].style.display === "") {
            contenidoSecundario[index].style.display = "flex";
        } else {
            contenidoSecundario[index].style.display = "none";
        }
        // Rotar la imagen dentro del elemento .desplegable al hacer clic
        const imagenDesplegable = desplegable.querySelector('.imagen-desplegable');
        imagenDesplegable.classList.toggle('rotar');
    });
});