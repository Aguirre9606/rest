document.addEventListener("DOMContentLoaded", function () {
    // Obtener botones del menú
    const btnEntradas = document.getElementById("entradas-btn");
    const btnPlatosFondo = document.getElementById("platosfondo-btn");
    const btnBebidas = document.getElementById("bebidas-btn");
  
    // Acción al hacer clic en "Entradas"
    btnEntradas.addEventListener("click", function () {
      loadModel('models/entradas/Pepsi_Can.glb');
    });
  
    // Acción al hacer clic en "Platos de Fondo"
    btnPlatosFondo.addEventListener("click", function () {
      loadModel('models/platos_fondo/Pepsi_Can.glb');
    });
  
    // Acción al hacer clic en "Bebidas"
    btnBebidas.addEventListener("click", function () {
      loadModel('models/bebidas/Pepsi_Can.glb');
    });
  
    // Función para cargar modelos 3D
    function loadModel(modelPath) {
      const scene = document.querySelector("a-scene");
      let existingModel = document.getElementById("dynamic-model");
  
      if (existingModel) {
        existingModel.parentNode.removeChild(existingModel);
      }
  
      const entity = document.createElement("a-entity");
      entity.setAttribute("id", "dynamic-model");
      entity.setAttribute("gltf-model", modelPath);
      entity.setAttribute("scale", "0.5 0.5 0.5");
      entity.setAttribute("position", "0 1 -3");
      scene.appendChild(entity);
    }
  
    // Inicialización de la cámara AR.js
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(function (stream) {
        let video = document.querySelector('video');
        if (video) {
          video.srcObject = stream;
        }
      })
      .catch(function (err) {
        console.log("Error al acceder a la cámara: " + err.name);
      });
  });
  