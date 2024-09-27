document.getElementById('entradas').addEventListener('click', function() {
    cargarModelo('models/entradas/Pepsi_Can.glb');
});

document.getElementById('platosFondo').addEventListener('click', function() {
    cargarModelo('models/platos_fondo/Pepsi_Can.glb');
});

document.getElementById('bebidas').addEventListener('click', function() {
    cargarModelo('models/bebidas/Pepsi_Can.glb');
});

function cargarModelo(rutaModelo) {
    const modelContainer = document.getElementById('modelContainer');
    // Elimina cualquier modelo existente
    while (modelContainer.firstChild) {
        modelContainer.removeChild(modelContainer.firstChild);
    }

    // Crear y añadir un nuevo modelo
    const modelo = document.createElement('a-entity');
    modelo.setAttribute('gltf-model', rutaModelo);
    modelo.setAttribute('scale', '0.5 0.5 0.5');
    modelo.setAttribute('position', '0 0 0');
    modelContainer.appendChild(modelo);
}
