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
  let currentCategory = 'bebidas'; // Categoría por defecto
  let modeloCargado = false;
  
  function cargarModelo(rutaModelo) {
    console.log("Cargando modelo desde la ruta:", rutaModelo);
    const modelContainer = document.getElementById('modelContainer');
  
    // Eliminar cualquier modelo anterior
    while (modelContainer.firstChild) {
      modelContainer.removeChild(modelContainer.firstChild);
    }
  
    // Crear la entidad de A-Frame para el nuevo modelo
    const modelEntity = document.createElement('a-entity');
    modelEntity.setAttribute('gltf-model', rutaModelo);
    modelEntity.setAttribute('position', '0 -0.4 -2');
    modelEntity.setAttribute('scale', '6 6 6');
  
    modelEntity.addEventListener('model-loaded', function() {
      console.log('Modelo cargado correctamente:', rutaModelo);
    });
  
    modelEntity.addEventListener('model-error', function() {
      console.error('Error al cargar el modelo:', rutaModelo);
    });
  
    modelContainer.appendChild(modelEntity);
    modeloCargado = true;
  
    document.getElementById('prevModel').style.display = 'block';
    document.getElementById('nextModel').style.display = 'block';
  }
  
  document.getElementById('entradas').addEventListener('click', function () {
    currentCategory = 'entradas';
    currentModelIndex = 0;
    cargarModelo(models[currentCategory][currentModelIndex]);
  });
  
  document.getElementById('platosFondo').addEventListener('click', function () {
    cargarModelo('./models/platos_fondo/1.uploads_files_2465920_burger_merged.glb');
});

  
  document.getElementById('bebidas').addEventListener('click', function () {
    currentCategory = 'bebidas';
    currentModelIndex = 0;
    cargarModelo(models[currentCategory][currentModelIndex]);
  });
  
  document.getElementById('prevModel').addEventListener('click', function () {
    if (modeloCargado) {
      currentModelIndex = (currentModelIndex === 0) ? models[currentCategory].length - 1 : currentModelIndex - 1;
      cargarModelo(models[currentCategory][currentModelIndex]);
    }
  });
  
  document.getElementById('nextModel').addEventListener('click', function () {
    if (modeloCargado) {
      currentModelIndex = (currentModelIndex === models[currentCategory].length - 1) ? 0 : currentModelIndex + 1;
      cargarModelo(models[currentCategory][currentModelIndex]);
    }
  });
   