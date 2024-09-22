function showCategory(category) {
    const entity = document.getElementById('objeto3d');
    entity.innerHTML = ''; // Limpiar el contenido previo
  
    if (category === 'entradas') {
      // Aquí podrías agregar algún modelo para las entradas si tienes uno.
      console.log("Entradas seleccionadas");
    } else if (category === 'platos') {
      // Aquí podrías agregar algún modelo para los platos si tienes uno.
      console.log("Platos seleccionados");
    } else if (category === 'bebidas') {
      // Mostrar las dos bebidas en 3D
      console.log("Bebidas seleccionadas");
  
      // Agregar modelo 1: Pepsi_Can
      const pepsiCan = document.createElement('a-entity');
      pepsiCan.setAttribute('gltf-model', 'models/Pepsi_Can.glb');
      pepsiCan.setAttribute('position', '-0.5 1 -3');
      pepsiCan.setAttribute('scale', '0.5 0.5 0.5');
      pepsiCan.setAttribute('rotation', '0 0 0');
      pepsiCan.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 5000');
  
      // Agregar modelo 2: BARREL_KEG
      const barrelKeg = document.createElement('a-entity');
      barrelKeg.setAttribute('gltf-model', 'models/BARREL_KEG.glb');
      barrelKeg.setAttribute('position', '0.5 1 -3');
      barrelKeg.setAttribute('scale', '0.5 0.5 0.5');
      barrelKeg.setAttribute('rotation', '0 0 0');
      barrelKeg.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 5000');
  
      // Añadir los modelos al objeto 3D
      entity.appendChild(pepsiCan);
      entity.appendChild(barrelKeg);
    }
  }
  
  document.getElementById('entradas-btn').addEventListener('click', function() {
    showCategory('entradas');
  });
  
  document.getElementById('platos-btn').addEventListener('click', function() {
    showCategory('platos');
  });
  
  document.getElementById('bebidas-btn').addEventListener('click', function() {
    showCategory('bebidas');
  });
  