const models = {
    entradas: [
      './models/entradas/1.BARREL_KEG.glb',
      './models/entradas/2.Pepsi_Can.glb'
    ],
    platosFondo: [
      './models/platos_fondo/1.uploads_files_2465920_burger_merged.glb',
      './models/platos_fondo/2.Pepsi_Can.glb'
    ],
    bebidas: [
      './models/bebidas/1.Pepsi_Can.glb',
      './models/bebidas/2.BARREL_KEG.glb'
    ]
  };
  
  let currentModelIndex = 0;
  let currentCategory = null;
  let modelLoaded = false;
  
  function cargarModelo(rutaModelo) {
    const modelContainer = document.getElementById('modelContainer');
    
    // Eliminar cualquier modelo anterior
    while (modelContainer.firstChild) {
      modelContainer.removeChild(modelContainer.firstChild);
    }
  
    // Crear la entidad de A-Frame para el nuevo modelo
    const modelEntity = document.createElement('a-entity');
    modelEntity.setAttribute('gltf-model', rutaModelo);
    modelEntity.setAttribute('position', '0 0 -2');
    modelEntity.setAttribute('scale', '1 1 1');
  
    modelEntity.addEventListener('model-loaded', () => {
      console.log('Modelo 3D cargado correctamente:', rutaModelo);
      modelLoaded = true;
    });
  
    modelEntity.addEventListener('model-error', () => {
      console.error('Error al cargar el modelo 3D:', rutaModelo);
      modelLoaded = false;
    });
  
    modelContainer.appendChild(modelEntity);
  }
  
  function seleccionarCategoria(categoria) {
    currentCategory = categoria;
    currentModelIndex = 0;
    cargarModelo(models[currentCategory][currentModelIndex]);
  }
  
  // Event listeners para los botones de las categorías
  document.getElementById('entradas').addEventListener('click', () => {
    seleccionarCategoria('entradas');
  });
  
  document.getElementById('platosFondo').addEventListener('click', () => {
    seleccionarCategoria('platosFondo');
  });
  
  document.getElementById('bebidas').addEventListener('click', () => {
    seleccionarCategoria('bebidas');
  });
  
  // Navegación entre modelos
  document.getElementById('prevModel').addEventListener('click', () => {
    if (modelLoaded && currentCategory) {
      currentModelIndex = (currentModelIndex === 0) ? models[currentCategory].length - 1 : currentModelIndex - 1;
      cargarModelo(models[currentCategory][currentModelIndex]);
    }
  });
  
  document.getElementById('nextModel').addEventListener('click', () => {
    if (modelLoaded && currentCategory) {
      currentModelIndex = (currentModelIndex === models[currentCategory].length - 1) ? 0 : currentModelIndex + 1;
      cargarModelo(models[currentCategory][currentModelIndex]);
    }
  });
  