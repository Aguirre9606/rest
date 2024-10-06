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
  
  // Función para cargar el modelo 3D con una posición y escala automáticas
  function cargarModelo(rutaModelo) {
    const modelContainer = document.getElementById('modelContainer');
    
    // Limpiar el contenedor de modelos
    while (modelContainer.firstChild) {
      modelContainer.removeChild(modelContainer.firstChild);
    }
  
    // Crear y configurar el nuevo modelo
    const modelEntity = document.createElement('a-entity');
    modelEntity.setAttribute('gltf-model', rutaModelo);
    modelEntity.setAttribute('position', '0 0 -2');  // Coloca el modelo en el centro
  
    // Ajuste de escala automática
    modelEntity.addEventListener('model-loaded', function (event) {
      const bbox = new THREE.Box3().setFromObject(event.detail.model);
      const size = bbox.getSize(new THREE.Vector3());
      const maxDimension = Math.max(size.x, size.y, size.z);
  
      const desiredSize = 1; // Ajusta este valor para el tamaño final deseado
      const scaleFactor = desiredSize / maxDimension;
  
      modelEntity.setAttribute('scale', `${scaleFactor} ${scaleFactor} ${scaleFactor}`);
      console.log('Modelo 3D cargado y escalado automáticamente.');
    });
  
    modelEntity.addEventListener('model-error', function () {
      console.error('Error al cargar el modelo 3D.');
    });
  
    // Añadir el modelo al contenedor
    modelContainer.appendChild(modelEntity);
    
    document.getElementById('prevModel').style.display = 'block';
    document.getElementById('nextModel').style.display = 'block';
  }
  
  // Eventos para cambiar categorías
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
  
  // Navegar entre modelos
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
  