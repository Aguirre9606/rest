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
  
    // Ajustar la posición y la escala del modelo
    modelEntity.setAttribute('position', '0 1 -2'); // Ajustar la distancia
    modelEntity.setAttribute('scale', '20 20 20'); // Aumentar el tamaño del modelo a 20x
  
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
  