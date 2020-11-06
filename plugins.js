/**********************************************************
 * PLUGIN COMUNICACION CATASTRO CON ACTIVATE
 **********************************************************/

var comunicacionCatastro = new M.control.PLG_ActivateControl(
		"data:image/png;base64,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",
		M.plugin.PLG_Comunicacion_Catastro,
		"Plugin de Comunicación con Catastro",
		"plg_comunicacion_catastro",
		{
			config: {
				RCCOOR_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCoordenadas.asmx/Consulta_RCCOOR",
				CMC_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejeroCodigos.asmx/ConsultaMunicipioCodigos",
				ConsultaVia_url: "https://ovc.catastro.meh.es/ovcservweb/ovcswlocalizacionrc/ovccallejero.asmx/ConsultaVia",
				ConsultaNumero_url: "https://ovc.catastro.meh.es/ovcservweb/ovcswlocalizacionrc/ovccallejero.asmx/ConsultaNumero",
				DNPRC_CODIGOS_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejeroCodigos.asmx/Consulta_DNPRC_Codigos",
				DNPRC_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/ovccallejero.asmx/Consulta_DNPRC",
				CPMRC_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCoordenadas.asmx/Consulta_CPMRC",
				DNPPP_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejeroCodigos.asmx/Consulta_DNPPP_Codigos",
				RCWMS_url: "https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCConCiud.aspx",
				DNPLOC_url: "https://ovc.catastro.meh.es/ovcservweb/ovcswlocalizacionrc/ovccallejero.asmx/Consulta_DNPLOC",
				catastroWMS: {
					wms_url: "https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?",
					name: "Catastro"
				},
				catastroWFS: {
				  wfs_url: 'https://ovc.catastro.meh.es/INSPIRE/wfsCP.aspx?',
				  name: 'cp.cadastralparcel'
				},
				descargaGML: 'https://ovc.catastro.meh.es/INSPIRE/wfsCP.aspx?service=wfs&version=2&request=GetFeature&STOREDQUERIE_ID=GetParcel&srsname=EPSG::25830&outputFormat=geojson&refcat=',
				imagenParcela: 'https://www1.sedecatastro.gob.es/Cartografia/GeneraGraficoParcela.aspx?',
				imagenFachada: 'https://ovc.catastro.meh.es/OVCServWeb/OVCWcfLibres/OVCFotoFachada.svc/RecuperarFotoFachadaGet?ReferenciaCatastral=',
				visorPDF: 'https://docs.google.com/viewer?embedded=true&url=',
				consultaDescriptivaPDF: 'https://www.sedecatastro.gob.es/CYCBienInmueble/SECImprimirCroquisYDatos.aspx?refcat='
			}
		}
);

/**********************************************************
 * PLUGIN PLG_HOR_NAVIGATION
 **********************************************************/
/* plg identify */
var getfeatureinfocontrol = new M.control.getfeatureinfobylayersControl();

const barraNavegacion = new M.plugin.PLG_Hor_Navigation({
    "measureLength": true,
    "measureArea": true,
    "geocalc": false,
    "identify": {
      "all": false
    },
    "catastroSearch": {
      "add": false,
      "config": null
    },
    "scale": {
      "add": true,
      "config": {
      "scales": [1000, 2500, 5000, 10000, 20000, 25000, 50000, 100000, 150000, 250000, 500000, 1000000]
      }							
    },
    "coordinatesZoom": true,
    "addControls": {
      "add": true,
      "controls": [comunicacionCatastro, getfeatureinfocontrol]
    }
  });
map.addPlugin(barraNavegacion);


/**********************************************************
 * PLUGIN MANAGE LAYERS
 **********************************************************/
 const paramsPlugin = {
  options: {
    panel: {
      className: "manageLayersAyuda831",
      collapsedClass: "g-cartografia-capas2",
      tooltip: "Gestión de capas"
    }
  },
  config: {
    thematicLayers: {
      params: {
        groups: null
      },
      options: {
        iconClass: "g-cartografia-capas",
        tooltip: "Capas temáticas"
      }
    },
    baseLayers: {
      params: {
        baseMaps: [],
        activatedBlankMap: true
      },
      options: {
        tooltip: "Capas de fondo"
      }
    }
  }
};

const manageLayers = new M.plugin.ManageLayers(paramsPlugin);
map.addPlugin(manageLayers);

	
/**********************************************************
 * PLUGIN CONSULTA SIGPAC CON ACTIVATE 
 **********************************************************/
 
 var consultaSigpac = new M.control.PLG_ActivateControl(
		"data:image/png;base64,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",
		M.plugin.PLG_consulta_sigpac,
		"Plugin de consulta con sigpac",
		"plg_consulta_sigpac",
		{
			config: {
				municipio_filtro_url: "http://ws128.juntadeandalucia.es/agriculturaypesca/geoserver29/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=dgpa_spa_sigpac_2020:SPAD_MUNICIPIOS_ACTUAL&propertyName=DS_MUNICIPIO&sortBy=DS_MUNICIPIO&outputFormat=json&CQL_FILTER=CD_PROVINCIA=",
				poligono_filtro_url: "http://ws128.juntadeandalucia.es/agriculturaypesca/geoserver29/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=dgpa_spa_sigpac_2020:SPAD_POLIGONOS_ACTUAL&propertyName=CD_POLIGONO&sortBy=CD_POLIGONO&outputFormat=json&CQL_FILTER=CD_PROVINCIA=",
				parcela_filtro_url: "http://ws128.juntadeandalucia.es/agriculturaypesca/geoserver29/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=dgpa_spa_sigpac_2020:SPAD_PARCELAS_ACTUAL&propertyName=CD_PARCELA&sortBy=CD_PARCELA&outputFormat=json&CQL_FILTER=CD_PROVINCIA=",
				recinto_filtro_url: "http://ws128.juntadeandalucia.es/agriculturaypesca/geoserver29/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=dgpa_spa_sigpac_2020:SPAD_RECINTOS_ACTUAL&propertyName=CD_RECINTO&sortBy=CD_RECINTO&outputFormat=json&CQL_FILTER=CD_PROVINCIA=",
				provincia_geometria_url: "http://ws128.juntadeandalucia.es/agriculturaypesca/geoserver29/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=dgpa_spa_sigpac_2020:SPAD_PROVINCIAS_ACTUAL&outputFormat=json&CQL_FILTER=CD_PROVINCIA=",
				municipio_geometria_url: "http://ws128.juntadeandalucia.es/agriculturaypesca/geoserver29/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=dgpa_spa_sigpac_2020:SPAD_MUNICIPIOS_ACTUAL&outputFormat=json&CQL_FILTER=CD_PROVINCIA=",
				filtro_municipio: "%20AND%20CD_MUNICIPIO=",
				poligono_geometria_url: "http://ws128.juntadeandalucia.es/agriculturaypesca/geoserver29/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=dgpa_spa_sigpac_2020:SPAD_POLIGONOS_ACTUAL&outputFormat=json&CQL_FILTER=CD_PROVINCIA=",
				filtro_poligono: "%20AND%20CD_POLIGONO=",
				parcela_geometria_url: "http://ws128.juntadeandalucia.es/agriculturaypesca/geoserver29/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=dgpa_spa_sigpac_2020:SPAD_PARCELAS_ACTUAL&outputFormat=json&CQL_FILTER=CD_PROVINCIA=",
				filtro_parcela: "%20AND%20CD_PARCELA=",
				recinto_geometria_url: "http://ws128.juntadeandalucia.es/agriculturaypesca/geoserver29/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=dgpa_spa_sigpac_2020:SPAD_RECINTOS_ACTUAL&outputFormat=json&CQL_FILTER=CD_PROVINCIA=",
				filtro_recinto: "%20AND%20CD_RECINTO=",
				sigpacWMS: {
				  wms_url: "https://ws128.juntadeandalucia.es/agriculturaypesca/geocachesig/service/wms?",
				  name: "dgpa_spa_sigpac_2020:SPAD_RECINTOS_ACTUAL_GWC"
				},
				descargaGMLrecinto: "http://ws128.juntadeandalucia.es/agriculturaypesca/geoserver29/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=dgpa_spa_sigpac_2020:SPAD_RECINTOS_ACTUAL&CQL_FILTER=CD_PROVINCIA=",
		  }
		}
);
 
 





