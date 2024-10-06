const models = [
    './models/entradas/Pepsi_Can.glb',
    './models/bebidas/Pepsi_Can.glb',
    './models/platos_fondo/uploads_files_2465920_burger_merged.glb'  // Nuevo modelo
  ];
  let currentModelIndex = 0;
  let modeloCargado = false;
  
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
    cargarModelo(models[0]);
  });
  
  document.getElementById('platosFondo').addEventListener('click', function () {
    cargarModelo(models[2]);  // Asegúrate de cargar el nuevo modelo
  });
  
  document.getElementById('bebidas').addEventListener('click', function () {
    cargarModelo(models[1]);
  });
  
  document.getElementById('prevModel').addEventListener('click', function () {
    if (modeloCargado) {
      currentModelIndex = (currentModelIndex === 0) ? models.length - 1 : currentModelIndex - 1;
      cargarModelo(models[currentModelIndex]);
    }
  });
  
  document.getElementById('nextModel').addEventListener('click', function () {
    if (modeloCargado) {
      currentModelIndex = (currentModelIndex === models.length - 1) ? 0 : currentModelIndex + 1;
      cargarModelo(models[currentModelIndex]);
    }
  });
  