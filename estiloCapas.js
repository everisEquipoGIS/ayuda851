const capas = map.getLayers();
const textoProvincias = capas.find(capa => capa.name === "ProvinciasTextos");

console.log("Entra estilos capas");

const estiloTextoProvincia = new M.style.Point({
	fill: {  
      color: 'green',
      opacity: 0.8
    }
	
});

textoProvincias.setStyle(estiloTextoProvincia);