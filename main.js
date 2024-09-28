// Lógica para cargar los modelos 3D según la categoría seleccionada
document.getElementById('entradas').addEventListener('click', function () {
    cargarModelo('./models/entradas/Pepsi_Can.glb');
  });
  
  document.getElementById('platosFondo').addEventListener('click', function () {
    cargarModelo('./models/platos_fondo/Pepsi_Can.glb');
  });
  
  document.getElementById('bebidas').addEventListener('click', function () {
    cargarModelo('./models/bebidas/Pepsi_Can.glb');
  });
  
  // Función para cargar un modelo 3D en el contenedor
  function cargarModelo(rutaModelo) {
    const modelContainer = document.getElementById('modelContainer');
    
    // Eliminar cualquier modelo anterior
    while (modelContainer.firstChild) {
      modelContainer.removeChild(modelContainer.firstChild);
    }
  
    // Crear la entidad de A-Frame para el nuevo modelo
    const modelEntity = document.createElement('a-entity');
    modelEntity.setAttribute('gltf-model', rutaModelo);
    modelEntity.setAttribute('position', '0 0 -5'); // Ajustar la posición según sea necesario
    modelEntity.setAttribute('scale', '0.5 0.5 0.5'); // Ajustar el tamaño según sea necesario
  
    // Añadir el modelo al contenedor
    modelContainer.appendChild(modelEntity);
  }
  