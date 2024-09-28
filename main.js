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
    modelEntity.setAttribute('position', '0 1 -3'); // Ajustar la posición para centrar el modelo
    modelEntity.setAttribute('scale', '2 2 2'); // Aumentar el tamaño del modelo para que sea más grande
  
    // Añadir eventos de carga y error para depurar
    modelEntity.addEventListener('model-loaded', function() {
      console.log('Modelo 3D cargado correctamente.');
    });
  
    modelEntity.addEventListener('model-error', function() {
      console.error('Error al cargar el modelo 3D.');
      alert('Error al cargar el modelo. Por favor, revisa la ruta y el formato del archivo.');
    });
  
    // Añadir el modelo al contenedor
    modelContainer.appendChild(modelEntity);
  }
  