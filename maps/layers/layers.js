var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Limit_PPP_T3_1 = new ol.format.GeoJSON();
var features_Limit_PPP_T3_1 = format_Limit_PPP_T3_1.readFeatures(json_Limit_PPP_T3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limit_PPP_T3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limit_PPP_T3_1.addFeatures(features_Limit_PPP_T3_1);
var lyr_Limit_PPP_T3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limit_PPP_T3_1, 
                style: style_Limit_PPP_T3_1,
                interactive: true,
                title: '<img src="styles/legend/Limit_PPP_T3_1.png" /> Limit_PPP_T3'
            });
var format_pericat_qgispericat_2 = new ol.format.GeoJSON();
var features_pericat_qgispericat_2 = format_pericat_qgispericat_2.readFeatures(json_pericat_qgispericat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pericat_qgispericat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pericat_qgispericat_2.addFeatures(features_pericat_qgispericat_2);
var lyr_pericat_qgispericat_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pericat_qgispericat_2, 
                style: style_pericat_qgispericat_2,
                interactive: true,
                title: '<img src="styles/legend/pericat_qgispericat_2.png" /> pericat_qgis pericat'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Limit_PPP_T3_1.setVisible(true);lyr_pericat_qgispericat_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Limit_PPP_T3_1,lyr_pericat_qgispericat_2];
lyr_Limit_PPP_T3_1.set('fieldAliases', {'FID_PPP_T3': 'FID_PPP_T3', 'ID_USUARI': 'ID_USUARI', 'IDENTIF': 'IDENTIF', 'NOM': 'NOM', 'DESCRIPCIO': 'DESCRIPCIO', 'Sup_ha': 'Sup_ha', 'Shape_Leng': 'Shape_Leng', });
lyr_pericat_qgispericat_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_ACTU': 'ID_ACTU', 'NOM_FOC': 'NOM_FOC', 'HECTARES': 'HECTARES', 'PERIMETER': 'PERIMETER', 'ANY': 'ANY', 'EXTEN_SINO': 'EXTEN_SINO', 'EXTEN_TIPU': 'EXTEN_TIPU', 'INFORME': 'INFORME', 'ZHR': 'ZHR', 'DATAI': 'DATAI', });
lyr_Limit_PPP_T3_1.set('fieldImages', {'FID_PPP_T3': 'Range', 'ID_USUARI': 'TextEdit', 'IDENTIF': 'TextEdit', 'NOM': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'Sup_ha': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_pericat_qgispericat_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_ACTU': 'TextEdit', 'NOM_FOC': 'TextEdit', 'HECTARES': 'TextEdit', 'PERIMETER': 'Range', 'ANY': 'Range', 'EXTEN_SINO': 'TextEdit', 'EXTEN_TIPU': 'TextEdit', 'INFORME': 'TextEdit', 'ZHR': 'TextEdit', 'DATAI': 'TextEdit', });
lyr_Limit_PPP_T3_1.set('fieldLabels', {'FID_PPP_T3': 'no label', 'ID_USUARI': 'no label', 'IDENTIF': 'no label', 'NOM': 'no label', 'DESCRIPCIO': 'no label', 'Sup_ha': 'no label', 'Shape_Leng': 'no label', });
lyr_pericat_qgispericat_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_ACTU': 'no label', 'NOM_FOC': 'no label', 'HECTARES': 'no label', 'PERIMETER': 'no label', 'ANY': 'no label', 'EXTEN_SINO': 'no label', 'EXTEN_TIPU': 'no label', 'INFORME': 'no label', 'ZHR': 'no label', 'DATAI': 'no label', });
lyr_pericat_qgispericat_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});