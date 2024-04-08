const abrirMenu = document.querySelector("#interruptor-menu");
const cerrarMenu = document.querySelector("#cerrar-menu");
const menuPrincipal = document.querySelector("#menu-principal");
const body = document.body;
const main = document.querySelector("main");


abrirMenu.addEventListener('click', () => {
    menuPrincipal.style.display = "flex"; 
    main.classList.add('desenfoque');
    body.classList.add('fondo-desenfoque');
});

cerrarMenu.addEventListener('click', () => {
    menuPrincipal.style.display = "none"; 
    main.classList.remove('desenfoque'); 
    body.classList.remove('fondo-desenfoque');
});