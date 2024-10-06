let modelos = {
    bebidas: [
      './models/bebidas/1.Pepsi_Can.glb',
      './models/bebidas/2.BARREL_KEG.glb',
    ],
    entradas: [
      './models/entradas/1.BARREL_KEG.glb',
      './models/entradas/2.Pepsi_Can.glb',
    ],
    platos_fondo: [
      './models/platos_fondo/1.uploads_files_2465920_burger_merged.glb',
      './models/platos_fondo/2.Pepsi_Can.glb',
    ],
  };
  
  let categoriaActual = 'bebidas';
  let modeloIndex = 0;
  
  function cargarModelo(ruta) {
    const entity = document.querySelector('#model');
    entity.setAttribute('gltf-model', ruta);
    entity.setAttribute('animation-mixer', '');
    entity.setAttribute('position', '0 1 -3'); // Ajuste de posición
    entity.setAttribute('scale', '0.7 0.7 0.7'); // Ajuste de tamaño
  }
  
  function mostrarModelo(categoria) {
    categoriaActual = categoria;
    modeloIndex = 0; // Resetear al primer modelo
    cargarModelo(modelos[categoriaActual][modeloIndex]);
  }
  
  function cambiarModelo(direccion) {
    const maxIndex = modelos[categoriaActual].length - 1;
    modeloIndex = (modeloIndex + direccion + modelos[categoriaActual].length) % modelos[categoriaActual].length;
    cargarModelo(modelos[categoriaActual][modeloIndex]);
  }
  
  // Cargar el primer modelo por defecto al iniciar
  window.onload = () => {
    cargarModelo(modelos[categoriaActual][modeloIndex]);
  };
  