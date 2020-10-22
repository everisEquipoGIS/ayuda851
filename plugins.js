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
 * UTILS TOC
 **********************************************************/
function toc_override() {
    var mapContainer = map.getContainer();
    var button = mapContainer.querySelector('.m-areas .m-panel-btn.g-toc-closed');
    "click touch".split(" ").forEach(function (ev) {
      button.addEventListener(ev, function (e) {
        if (e.target.classList.contains("g-toc-closed")) {
          //Cerrando
          mapContainer.parentElement.parentElement.style.width = "100%";
          mapContainer.querySelector('.m-areas .m-toc-container').style.display = "none";
        } else {
          //Abierto
          mapContainer.parentElement.parentElement.style.width = "calc(100% - 350px)";
          mapContainer.querySelector('.m-areas .m-toc-container').style.display = "table";
        }
        window.dispatchEvent(new Event('resize'));
      });
    });
 }
 
// PRUEBA
// PLG NEGOCIO PANGEA
const categoriaIconos = {
		"EQUIP_CONTRA_INCEND": new M.style.Point({
			icon: {
				src: "data:image/png;base64,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",
				scale: 0.4
			}
		}),
		"CASAS_FOREST": new M.style.Point({
			icon: {
				src: "data:image/png;base64,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",
				scale: 0.4
			}
		}),
		"VIAS_PECUARIAS": new M.style.Point({
			icon: {
				src: "data:image/png;base64,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",
				scale: 0.4
			}
		}),
		"EQUIP_USO_PUBL": new M.style.Point({
			icon: {
				src: "data:image/png;base64,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",
				scale: 0.4
			}
		}),
		"EQUIP_TECNICOS": new M.style.Point({
			icon: {
				src: "data:image/png;base64,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",
				scale: 0.4
			}
		}),
		"EQUIP_ADMIN": new M.style.Point({
			icon: {
				src: "data:image/png;base64,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",
				scale: 0.4
			}
		}),
		"INFRA_HIDR": new M.style.Point({
			icon: {
				src: "data:image/png;base64,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",
				scale: 0.4
			}
		})
};

var mp = new M.plugin.Plg_negocio_pangea({
		proxyExceptions: ["https://servintegra.cma.junta-andalucia.es"],
		urlWFSActivos: "https://servintegra.cma.junta-andalucia.es/medioambiente/mapwms/REDIAM_WFS_pangea?srsname=EPSG%3A25830&service=wfs&version=1.1.0&request=getFeature&typename=igbdp_geometria_bienes&outputformat=geojson",
		urlCapaParcelas: "https://servintegra.cma.junta-andalucia.es/medioambiente/mapwms/REDIAM_WFS_pangea?srsname=EPSG%3A25830&service=wfs&version=1.1.0&request=getFeature&typename=igbdp_catastro_geometria&outputformat=geojson",
		categoriaIconos: categoriaIconos
	});
map.addPlugin(mp);



/**********************************************************
 * PLUGIN TOC
 **********************************************************/
var tocPlugin = new M.plugin.Toc({
	connector: null,
	advLS: {
		apiRestUrl: null,
		user: null,
		config: arbolCapasUrl,
		wmsLayers: predefServersArray,
		enableTOCFile: true,
		enableCatalog: true
	},
	config: {
		position: M.ui.position.BL,
		opened: false,
		width: "SMALL"
	}
});

map.addPlugin(tocPlugin);

tocPlugin.panel_.on(M.evt.ADDED_TO_MAP, () => {
		setTimeout(() => {
			// Se aumenta el método del control advls para añadir filtrado
			// a capas con resolución máxima distinta a resolución máxima del mapa
			M.control.advLSControl.prototype.enableLayersInRange = function (evt) {
				var this_ = this;
				var maxRes = Math.max(...map.getResolutions()); // añadido
				this.map_.getLayers().filter(capa => { // filtro añadido
					if (capa.getImpl != undefined && capa.getImpl().getMaxResolution != undefined) {
						return capa.getImpl().getMaxResolution() !== maxRes;
					}
				}).filter(function (layer) {
					const node = this_.getNodeFromLayer(layer); // elemento "div" del DOM
					if (node) {
						// inRange: la resolución del mapa está dentro de los límites de resolución de la capa
						const activate = this_.inRange(layer) && this_.checkAncestorsVisibility(node);
						this_.enableLayers(node, activate);
					}
				});
			};
		}, 1000);
		mp.toc_override();
	});

	






