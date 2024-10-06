// Variables para manejar los modelos
let modelos = {
    bebidas: ['./models/bebidas/1.Pepsi_Can.glb', './models/bebidas/2.BARREL_KEG.glb'],
    entradas: ['./models/entradas/1.BARREL_KEG.glb', './models/entradas/2.Pepsi_Can.glb'],
    platos_fondo: ['./models/platos_fondo/1.uploads_files_2465920_burger_merged.glb', './models/platos_fondo/2.Pepsi_Can.glb']
  };
  let indiceModeloActual = 0;
  let categoriaActual = 'bebidas';
  
  // Función para mostrar el modelo inicial según la categoría seleccionada
  function mostrarModelo(categoria) {
    categoriaActual = categoria;
    indiceModeloActual = 0;  // Resetear el índice al seleccionar una nueva categoría
    cargarModelo();
  }
  
  // Función para cambiar el modelo (navegación izquierda/derecha)
  function cambiarModelo(direccion) {
    if (direccion === 'siguiente') {
      indiceModeloActual = (indiceModeloActual + 1) % modelos[categoriaActual].length;
    } else if (direccion === 'anterior') {
      indiceModeloActual = (indiceModeloActual - 1 + modelos[categoriaActual].length) % modelos[categoriaActual].length;
    }
    cargarModelo();
  }
  
  // Función para cargar el modelo basado en el índice actual
  function cargarModelo() {
    const modelContainer = document.getElementById('modelContainer');
  
    // Limpiar el modelo anterior
    while (modelContainer.firstChild) {
      modelContainer.removeChild(modelContainer.firstChild);
    }
  
    const modelEntity = document.createElement('a-entity');
    const rutaModelo = modelos[categoriaActual][indiceModeloActual];
  
    // Cargar el modelo con la ruta y ajustarlo
    modelEntity.setAttribute('gltf-model', rutaModelo);
    modelEntity.setAttribute('position', '0 -1.5 -3');
    modelEntity.setAttribute('scale', '2 2 2');  // Ajustar el tamaño para asegurar que sea visible
  
    // Eventos para verificar si el modelo se ha cargado correctamente o si hay un error
    modelEntity.addEventListener('model-loaded', function() {
      console.log('Modelo cargado correctamente:', rutaModelo);
    });
  
    modelEntity.addEventListener('model-error', function() {
      console.error('Error al cargar el modelo:', rutaModelo);
    });
  
    modelContainer.appendChild(modelEntity);
  }
  