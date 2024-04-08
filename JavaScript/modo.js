let pulsadorModo = document.querySelector('#pulsador-modo');
const carro = document.querySelector('#carro');
const menu = document.querySelector('#menu');

pulsadorModo.addEventListener('click', () => {
    document.body.classList.toggle('claro');
    pulsadorModo.classList.toggle('active');
    if (carro.src.includes('carro-blanco.svg')) {
        carro.src = '/imagenes/iconos/carro-negro.svg'
        menu.src = '/imagenes/iconos/menu-negro.svg'
        cerrarMenu.src = '/imagenes/iconos/cerrar-negro.svg'

    } else {
        carro.src = '/imagenes/iconos/carro-blanco.svg'
        menu.src = '/imagenes/iconos/menu-blanco.svg'
        cerrarMenu.src = '/imagenes/iconos/cerrar-blanco.svg'
    }
})
