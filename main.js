// Variables para los botones
const entradasButton = document.getElementById('entradas');
const platosFondoButton = document.getElementById('platosFondo');
const bebidasButton = document.getElementById('bebidas');

// Contenedor del modelo 3D
const modelContainer = document.getElementById('modelContainer');

// Función para cambiar el modelo 3D
function cambiarModelo(rutaModelo) {
  // Limpia el contenedor del modelo actual
  modelContainer.innerHTML = '';

  // Crea un nuevo elemento para el modelo 3D
  const nuevoModelo = document.createElement('a-entity');
  nuevoModelo.setAttribute('gltf-model', rutaModelo);
  nuevoModelo.setAttribute('scale', '0.5 0.5 0.5'); // Ajusta el tamaño según sea necesario
  nuevoModelo.setAttribute('position', '0 0 0'); // Ajusta la posición si es necesario
  
  // Agrega el nuevo modelo al contenedor
  modelContainer.appendChild(nuevoModelo);
}

// Listeners para los botones
entradasButton.addEventListener('click', () => {
  cambiarModelo('./models/entradas/Pepsi_Can.glb');  // Asegúrate de que esta ruta sea correcta
});

platosFondoButton.addEventListener('click', () => {
  cambiarModelo('./models/platos_fondo/Pepsi_Can.glb');  // Asegúrate de que esta ruta sea correcta
});

bebidasButton.addEventListener('click', () => {
  cambiarModelo('./models/bebidas/Pepsi_Can.glb');  // Asegúrate de que esta ruta sea correcta
});
