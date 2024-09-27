// Obtener referencia al contenedor del modelo 3D
const modelContainer = document.getElementById('modelContainer');

// Definir las rutas a los modelos 3D
const modelos = {
    entradas: './models/entradas/Pepsi_Can.glb',
    platosFondo: './models/platos_fondo/Pepsi_Can.glb',
    bebidas: './models/bebidas/Pepsi_Can.glb'
};

// Función para cargar el modelo 3D en el contenedor
function cargarModelo(categoria) {
    // Limpiar el contenedor
    modelContainer.innerHTML = '';

    // Crear un nuevo elemento a-entity para el modelo 3D
    const nuevoModelo = document.createElement('a-entity');
    nuevoModelo.setAttribute('gltf-model', modelos[categoria]);
    nuevoModelo.setAttribute('scale', '0.5 0.5 0.5'); // Ajustar tamaño según sea necesario
    nuevoModelo.setAttribute('position', '0 1 -3'); // Posicionar el modelo frente a la cámara

    // Agregar el modelo al contenedor
    modelContainer.appendChild(nuevoModelo);
}

// Manejar eventos de clic en los botones
document.getElementById('entradas').addEventListener('click', () => {
    cargarModelo('entradas');
});

document.getElementById('platosFondo').addEventListener('click', () => {
    cargarModelo('platosFondo');
});

document.getElementById('bebidas').addEventListener('click', () => {
    cargarModelo('bebidas');
});
