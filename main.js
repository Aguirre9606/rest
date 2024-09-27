document.addEventListener("DOMContentLoaded", function() {
    const entradasButton = document.getElementById("entradas");
    const platosFondoButton = document.getElementById("platosFondo");
    const bebidasButton = document.getElementById("bebidas");

    entradasButton.addEventListener("click", function() {
        mostrarModelos("entradas");
    });

    platosFondoButton.addEventListener("click", function() {
        mostrarModelos("platos_fondo");
    });

    bebidasButton.addEventListener("click", function() {
        mostrarModelos("bebidas");
    });

    function mostrarModelos(categoria) {
        const container = document.getElementById("model-container");
        container.innerHTML = '';  // Limpiar contenedor

        let models = [];

        // Cargar modelos según la categoría seleccionada
        switch (categoria) {
            case "entradas":
                models = [
                    {modelPath: 'models/entradas/model1.glb', position: '0 0 0'},
                    {modelPath: 'models/entradas/model2.glb', position: '1 0 0'}
                ];
                break;
            case "platos_fondo":
                models = [
                    {modelPath: 'models/platos_fondo/model1.glb', position: '0 0 0'},
                    {modelPath: 'models/platos_fondo/model2.glb', position: '1 0 0'}
                ];
                break;
            case "bebidas":
                models = [
                    {modelPath: 'models/bebidas/Pepsi_Can.glb', position: '0 0 0'},
                    {modelPath: 'models/bebidas/BARREL_KEG.glb', position: '1 0 0'}
                ];
                break;
        }

        // Renderizar los modelos 3D seleccionados
        models.forEach(model => {
            const entity = document.createElement('a-entity');
            entity.setAttribute('gltf-model', model.modelPath);
            entity.setAttribute('position', model.position);
            entity.setAttribute('rotation', '0 180 0');
            entity.setAttribute('scale', '0.5 0.5 0.5');
            container.appendChild(entity);
        });

        console.log(`${categoria} seleccionadas`);
    }
});
