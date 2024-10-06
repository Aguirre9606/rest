function cargarModelo(rutaModelo) {
    const modelContainer = document.getElementById('modelContainer');
    
    // Elimina cualquier modelo previo
    while (modelContainer.firstChild) {
      modelContainer.removeChild(modelContainer.firstChild);
    }
  
    const modelEntity = document.createElement('a-entity');
    
    // Aplica atributos de iluminación, posición y tamaño
    modelEntity.setAttribute('gltf-model', rutaModelo);
    modelEntity.setAttribute('position', '0 -1.5 -3'); // Ajuste de posición más bajo y más alejado
    modelEntity.setAttribute('scale', '10 10 10'); // Ajuste de escala más grande para asegurar visibilidad
  
    // Configuración de luz, igual a la Pepsi
    const lightEntity = document.createElement('a-light');
    lightEntity.setAttribute('type', 'ambient');
    lightEntity.setAttribute('intensity', '1.5'); // Mayor intensidad de luz para asegurar mejor visibilidad
    modelContainer.appendChild(lightEntity);
  
    const directionalLight = document.createElement('a-light');
    directionalLight.setAttribute('type', 'directional');
    directionalLight.setAttribute('intensity', '1');
    directionalLight.setAttribute('position', '0 4 -4'); // Luz direccional para iluminar el objeto desde arriba
    modelContainer.appendChild(directionalLight);
  
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
  