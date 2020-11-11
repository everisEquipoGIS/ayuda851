const capas = map.getLayers();
const textoProvincias = capas.find(capa => capa.name === "ProvinciasTextos");
const ayudaOperacion831 = capas.find(capa => capa.name === "Ayuda_operacion_831");
const capaFCC = capas.find(capa => capa.name === "Fraccion_cabida_cubierta_arbustiva");


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
textoProvincias.getImpl().getOL3Layer().setMinResolution(35);

/* Estableces escala a capa Ayuda peracion 831 */
//ayudaOperacion831.getImpl().getOL3Layer().setMaxResolution(30);
/*
ayudaOperacion831.on(M.evt.LOAD, function(features) {
	ayudaOperacion831.getImpl().getOL3Layer().setMaxResolution(30);
});
*/

/* Estableces escala a capa FCC */
//capaFCC.getImpl().getOL3Layer().setMaxResolution(20);


/* Cambiar color boton comunicacion catastro */
var botonComuCatastro = document.getElementById("plg_comunicacion_catastro");
// Incialmente poner en gris el boton
botonComuCatastro.classList.add("desactivar_comunicacion_catastro");

botonComuCatastro.addEventListener("click", function( event ) {
	if(botonComuCatastro.classList.contains("desactivar_comunicacion_catastro")){
		botonComuCatastro.classList.remove("desactivar_comunicacion_catastro");
	} else {
		botonComuCatastro.classList.add("desactivar_comunicacion_catastro");
	}	
}, false);	

/* Cambiar color boton consulta sigpac */
var botonConsultaSigpac = document.getElementById("plg_consulta_sigpac");
var botonConsultaSigpacImg = botonConsultaSigpac.getElementsByTagName("img");

botonConsultaSigpac.addEventListener("click", function( event ) {	
	if(botonConsultaSigpac.classList.contains("activar_consulta_sigpac") 
		&& botonConsultaSigpacImg[0].classList.contains("activar_consulta_sigpac_img")){
			
			botonConsultaSigpac.classList.remove("activar_consulta_sigpac");
			botonConsultaSigpacImg[0].classList.remove("activar_consulta_sigpac_img");
	} else {
		botonConsultaSigpac.classList.add("activar_consulta_sigpac");
		botonConsultaSigpacImg[0].classList.add("activar_consulta_sigpac_img");
	}	
}, false);
