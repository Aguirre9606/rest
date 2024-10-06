// Función para cargar modelos
function mostrarModelo(categoria) {
    const modelContainer = document.getElementById('modelContainer');
  
    // Limpiar el modelo anterior
    while (modelContainer.firstChild) {
      modelContainer.removeChild(modelContainer.firstChild);
    }
  
    const modelEntity = document.createElement('a-entity');
    
    let rutaModelo = '';
  
    // Asignar la ruta del modelo según la categoría seleccionada
    if (categoria === 'bebidas') {
      rutaModelo = './models/bebidas/1.Pepsi_Can.glb';
    } else if (categoria === 'entradas') {
      rutaModelo = './models/entradas/1.BARREL_KEG.glb';
    } else if (categoria === 'platos_fondo') {
      rutaModelo = './models/platos_fondo/1.uploads_files_2465920_burger_merged.glb';
    }
  
    // Cargar el modelo con posición y escala base
    modelEntity.setAttribute('gltf-model', rutaModelo);
    modelEntity.setAttribute('position', '0 -1.5 -3');
    modelEntity.setAttribute('scale', '2 2 2');  // Escala ajustada para asegurar visibilidad
  
    // Eventos para verificar si el modelo se ha cargado o si hay un error
    modelEntity.addEventListener('model-loaded', function() {
      console.log('Modelo cargado correctamente:', rutaModelo);
    });
  
    modelEntity.addEventListener('model-error', function() {
      console.error('Error al cargar el modelo:', rutaModelo);
    });
  
    modelContainer.appendChild(modelEntity);
  }
  