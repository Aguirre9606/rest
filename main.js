let modelos = {
    entradas: ['#1.BARREL_KEG', '#2.Pepsi_Can'],
    platos_fondo: ['#1.uploads_files_2465920_burger_merged'],
    bebidas: ['#1.Pepsi_Can']
};

let indiceActual = 0;
let categoriaActual = 'entradas';

function cargarModelos(categoria) {
    categoriaActual = categoria;
    indiceActual = 0;
    mostrarModelo();
}

function mostrarModelo() {
    let modeloCargado = document.querySelector('#modelo-cargado');
    modeloCargado.setAttribute('gltf-model', modelos[categoriaActual][indiceActual]);
}

function siguienteModelo() {
    indiceActual = (indiceActual + 1) % modelos[categoriaActual].length;
    mostrarModelo();
}

function anteriorModelo() {
    indiceActual = (indiceActual - 1 + modelos[categoriaActual].length) % modelos[categoriaActual].length;
    mostrarModelo();
}
