const capas = map.getLayers();
const textoProvincias = capas.find(capa => capa.name === "ProvinciasTextos");

const estiloTextoProvincia = new M.style.Point({
	label: {
		text: function(feature) {
		  return feature.getAttribute('PROVINCIA')
		}, // Texto etiqueta. fijo|función|atributo
		font: 'bold 18px Courier New', // Fuente de la etiqueta
		scale: 0.9, // Escala de la etiqueta
		offset: [10, 0], // Desplazamiento en píxeles
		color: '#000', // Color del texto
		// Halo del texto
		stroke: {
			color: '#FFF', // Color del halo
			width: 3, // Grosor del halo
			linedash: [5,5,20], // Patrón de distancias
			linedashoffset: 1, // Offset de fase
			linecap: 'square', // Estilo de final de linea. round|square|butt
			linejoin: 'miter', // Estilo de conexión de segmentos. miter|round|bevel
			miterlimit: 15 // Tamaño máximo segmento de conexión
		},
		rotate: false, // Rotación con dispositivo
		rotation: 0, // Rotación de la etiqueta
		align: M.style.align.CENTER, // Alineación horizontal. CENTER|LEFT|RIGHT
		baseline: M.style.baseline.MIDDLE // Alineación vertical. TOP|BOTTOM|MIDDLE
	}	
});


textoProvincias.setStyle(estiloTextoProvincia);


/* Estableces escala minima a capa ProvinciaTexto */
textoProvincias.getImpl().getOL3Layer().setMinResolution(10);