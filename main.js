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
  let modeloCargado = false;
  let currentCategory = 'entradas'; 
  
  function cargarModelo(rutaModelo) {
    const modelContainer = document.getElementById('modelContainer');
    while (modelContainer.firstChild) {
      modelContainer.removeChild(modelContainer.firstChild);
    }
    const modelEntity = document.createElement('a-entity');
    modelEntity.setAttribute('gltf-model', rutaModelo);
    modelEntity.setAttribute('position', '0 -0.4 -2');
    modelEntity.setAttribute('scale', '6 6 6');
    modelEntity.addEventListener('model-loaded', function() {
      console.log('Modelo 3D cargado correctamente.');
    });
    modelEntity.addEventListener('model-error', function() {
      console.error('Error al cargar el modelo 3D.');
      alert('Error al cargar el modelo. Por favor, revisa la ruta y el formato del archivo.');
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
  