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
  
  // Función para cargar y estandarizar el tamaño y posición del modelo
  function cargarModelo(rutaModelo) {
    const modelContainer = document.getElementById('modelContainer');
    
    // Limpiar el contenedor de modelos anteriores
    while (modelContainer.firstChild) {
      modelContainer.removeChild(modelContainer.firstChild);
    }
  
    // Crear una nueva entidad para el modelo
    const modelEntity = document.createElement('a-entity');
    modelEntity.setAttribute('gltf-model', rutaModelo);
    
    // Colocar en el centro (coordenadas estándar)
    modelEntity.setAttribute('position', '0 0 -3');
    
    // Ajustar el tamaño para que todos los modelos sean del mismo tamaño
    modelEntity.setAttribute('scale', '1 1 1'); // Ajustar según el tamaño relativo que deseas
    
    modelEntity.addEventListener('model-loaded', function() {
      console.log('Modelo 3D cargado correctamente.');
    });
  
    modelEntity.addEventListener('model-error', function() {
      console.error('Error al cargar el modelo 3D.');
    });
  
    // Añadir el modelo al contenedor
    modelContainer.appendChild(modelEntity);
    
    // Mostrar los botones de navegación
    document.getElementById('prevModel').style.display = 'block';
    document.getElementById('nextModel').style.display = 'block';
  }
  
  // Event listeners para cargar modelos al hacer clic en las categorías
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
  
  // Event listeners para navegar entre modelos
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
  