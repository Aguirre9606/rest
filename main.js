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
  let currentCategory = 'entradas';
  
  function cargarModelo(rutaModelo) {
    const modelContainer = document.getElementById('modelContainer');
    
    while (modelContainer.firstChild) {
      modelContainer.removeChild(modelContainer.firstChild);
    }
  
    const modelEntity = document.createElement('a-entity');
    modelEntity.setAttribute('gltf-model', rutaModelo);
  
    // Ajustes de escala y posición dependiendo del modelo
    if (rutaModelo.includes('Pepsi_Can')) {
      modelEntity.setAttribute('scale', '1 1 1');
      modelEntity.setAttribute('position', '0 -0.5 -2');
    } else if (rutaModelo.includes('BARREL_KEG')) {
      modelEntity.setAttribute('scale', '2 2 2');
      modelEntity.setAttribute('position', '0 -0.4 -3');
    } else {
      // Ajustes por defecto para otros modelos
      modelEntity.setAttribute('scale', '1.5 1.5 1.5');
      modelEntity.setAttribute('position', '0 -0.4 -2');
    }
  
    modelEntity.addEventListener('model-loaded', function() {
      console.log('Modelo 3D cargado correctamente.');
    });
  
    modelEntity.addEventListener('model-error', function() {
      console.error('Error al cargar el modelo 3D.');
    });
  
    modelContainer.appendChild(modelEntity);
  
    document.getElementById('prevModel').style.display = 'block';
    document.getElementById('nextModel').style.display = 'block';
  }
  
  document.getElementById('entradas').addEventListener('click', function () {
    currentCategory = 'entradas';
    currentModelIndex = 0;
    cargarModelo(models[currentCategory][currentModelIndex]);
  });
  
  document.getElementById('platosFondo').addEventListener('click', function () {
    currentCategory = 'platosFondo';
    currentModelIndex = 0;
    cargarModelo(models[currentCategory][currentModelIndex]);
  });
  
  document.getElementById('bebidas').addEventListener('click', function () {
    currentCategory = 'bebidas';
    currentModelIndex = 0;
    cargarModelo(models[currentCategory][currentModelIndex]);
  });
  
  document.getElementById('prevModel').addEventListener('click', function () {
    if (currentModelIndex > 0) {
      currentModelIndex--;
      cargarModelo(models[currentCategory][currentModelIndex]);
    }
  });
  
  document.getElementById('nextModel').addEventListener('click', function () {
    if (currentModelIndex < models[currentCategory].length - 1) {
      currentModelIndex++;
      cargarModelo(models[currentCategory][currentModelIndex]);
    }
  });
  