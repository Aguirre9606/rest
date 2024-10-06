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
    
    // Elimina cualquier modelo previo
    while (modelContainer.firstChild) {
      modelContainer.removeChild(modelContainer.firstChild);
    }
  
    const modelEntity = document.createElement('a-entity');
    
    // Aplica atributos de iluminación, posición y tamaño
    modelEntity.setAttribute('gltf-model', rutaModelo);
    modelEntity.setAttribute('position', '0 -0.4 -2'); // Ajuste de posición
    modelEntity.setAttribute('scale', '6 6 6'); // Ajuste de escala, igual para todos los modelos
  
    // Configuración de luz, replicada de Pepsi
    const lightEntity = document.createElement('a-light');
    lightEntity.setAttribute('type', 'ambient');
    lightEntity.setAttribute('intensity', '1.2');
    modelContainer.appendChild(lightEntity);
  
    modelEntity.addEventListener('model-loaded', function() {
      console.log('Modelo 3D cargado correctamente.');
    });
  
    modelEntity.addEventListener('model-error', function() {
      console.error('Error al cargar el modelo 3D.');
    });
  
    modelContainer.appendChild(modelEntity);
    
    // Muestra los botones de navegación
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
  