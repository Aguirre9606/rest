const categories = {
    entradas: [
      './models/entradas/1.objeto.glb',
      './models/entradas/2.objeto.glb'
    ],
    bebidas: [
      './models/bebidas/1.objeto.glb',
      './models/bebidas/2.objeto.glb'
    ],
    platosFondo: [
      './models/platos_fondo/1.objeto.glb',
      './models/platos_fondo/2.objeto.glb'
    ]
  };
  
  let currentCategory = null;
  let currentModelIndex = 0;
  
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
    document.getElementById('prevModel').style.display = 'block';
    document.getElementById('nextModel').style.display = 'block';
  }
  
  document.getElementById('entradas').addEventListener('click', function () {
    currentCategory = categories.entradas;
    currentModelIndex = 0;
    cargarModelo(currentCategory[currentModelIndex]);
  });
  
  document.getElementById('platosFondo').addEventListener('click', function () {
    currentCategory = categories.platosFondo;
    currentModelIndex = 0;
    cargarModelo(currentCategory[currentModelIndex]);
  });
  
  document.getElementById('bebidas').addEventListener('click', function () {
    currentCategory = categories.bebidas;
    currentModelIndex = 0;
    cargarModelo(currentCategory[currentModelIndex]);
  });
  
  document.getElementById('prevModel').addEventListener('click', function () {
    if (currentCategory) {
      currentModelIndex = (currentModelIndex === 0) ? currentCategory.length - 1 : currentModelIndex - 1;
      cargarModelo(currentCategory[currentModelIndex]);
    }
  });
  
  document.getElementById('nextModel').addEventListener('click', function () {
    if (currentCategory) {
      currentModelIndex = (currentModelIndex === currentCategory.length - 1) ? 0 : currentModelIndex + 1;
      cargarModelo(currentCategory[currentModelIndex]);
    }
  });
  