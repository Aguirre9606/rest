// Variables para rastrear el estado actual de los modelos
let modelos = {
    bebidas: ['./models/bebidas/1.Pepsi_Can.glb'],
    entradas: ['./models/entradas/1.BARREL_KEG.glb'],
    platosFondo: ['./models/platos_fondo/1.uploads_files_2465920_burger_merged.glb']
};
let indiceActual = 0;
let categoriaActual = 'bebidas';

function cargarModelo(rutaModelo) {
    let escena = document.querySelector('a-scene');
    
    // Elimina el objeto existente si ya hay uno cargado
    let modeloExistente = escena.querySelector('a-entity');
    if (modeloExistente) {
        escena.removeChild(modeloExistente);
    }

    // Carga el nuevo modelo
    let entidad = document.createElement('a-entity');
    entidad.setAttribute('gltf-model', rutaModelo);

    // Ajusta la posición, escala y rotación del modelo 3D
    entidad.setAttribute('position', '0 1.5 -2');  // Ajusta la altura y distancia del modelo
    entidad.setAttribute('scale', '0.5 0.5 0.5');  // Ajusta el tamaño del modelo
    entidad.setAttribute('rotation', '0 180 0');  // Ajusta la rotación si es necesario

    escena.appendChild(entidad);
}

function mostrarModelo(categoria) {
    categoriaActual = categoria;
    indiceActual = 0;
    cargarModelo(modelos[categoriaActual][indiceActual]);
}

function cambiarModelo(direccion) {
    if (direccion === 'siguiente') {
        indiceActual = (indiceActual + 1) % modelos[categoriaActual].length;
    } else if (direccion === 'anterior') {
        indiceActual = (indiceActual - 1 + modelos[categoriaActual].length) % modelos[categoriaActual].length;
    }
    cargarModelo(modelos[categoriaActual][indiceActual]);
}
