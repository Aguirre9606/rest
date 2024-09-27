// Lista de modelos 3D para las bebidas
const bebidas = [
    { name: 'Pepsi', modelPath: './models/Pepsi_Can.glb', position: '0 0 0' },
    { name: 'Barrel', modelPath: './models/BARREL_KEG.glb', position: '1 0 0' }
  ];
  
  // Función para mostrar el modelo 3D
  function mostrarModelo(model) {
    const container = document.getElementById('modelContainer');
    const entity = document.createElement('a-entity');
    entity.setAttribute('gltf-model', model.modelPath);
    entity.setAttribute('scale', '0.5 0.5 0.5'); // Ajuste de escala para que el modelo sea visible
    entity.setAttribute('position', model.position);
    entity.setAttribute('rotation', '0 45 0'); // Rotación del modelo para que esté orientado correctamente
    container.appendChild(entity);
  }
  
  // Limpiar modelos anteriores
  function limpiarModelos() {
    const container = document.getElementById('modelContainer');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
  
  // Escuchar clic en el botón "Bebidas" y mostrar los modelos 3D
  document.getElementById('bebidas').addEventListener('click', function() {
    limpiarModelos();
    bebidas.forEach(mostrarModelo);
  });
  
  // Escuchar clic en "Entradas" o "Platos de Fondo"
  document.getElementById('entradas').addEventListener('click', function() {
    limpiarModelos();
    // Aquí puedes agregar modelos para "Entradas" si es necesario.
  });
  
  document.getElementById('platosFondo').addEventListener('click', function() {
    limpiarModelos();
    // Aquí puedes agregar modelos para "Platos de Fondo" si es necesario.
  });
  