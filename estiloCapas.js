const capas = map.getLayers();
const textoProvincias = capas.find(capa => capa.name === "TextoProvincias");


let estiloTextoProvincia = new M.style.Point(
	fill: {  
      color: 'green',
      opacity: '0.8'
    }
	
});



textoProvincias.setStyle(estiloTextoProvincia);