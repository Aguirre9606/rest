let modelos = {
    bebidas: ['model_bebida1', 'model_bebida2'],
    entradas: ['model_entrada1', 'model_entrada2'],
    platos_fondo: ['model_plato1', 'model_plato2'],
  };
  
  let indiceActual = 0;
  let categoriaActual = 'bebidas';
  
  function mostrarModelo(categoria) {
    categoriaActual = categoria;
    indiceActual = 0;
    cargarModelo();
  }
  
  function cargarModelo() {
    const entity = document.getElementById('modelo-3d');
    const modelId = modelos[categoriaActual][indiceActual];
    const modelUrl = document.getElementById(modelId).getAttribute('src');
  
    entity.setAttribute('gltf-model', `url(${modelUrl})`);
    entity.setAttribute('scale', '0.5 0.5 0.5'); // Ajustar tamaño
    entity.setAttribute('position', '0 1.5 -3'); // Ajustar posición
    entity.setAttribute('rotation', '0 180 0'); // Ajustar rotación
  }
  
  function cambiarModelo(direccion) {
    indiceActual += direccion;
    if (indiceActual < 0) {
      indiceActual = modelos[categoriaActual].length - 1;
    } else if (indiceActual >= modelos[categoriaActual].length) {
      indiceActual = 0;
    }
    cargarModelo();
  }
  