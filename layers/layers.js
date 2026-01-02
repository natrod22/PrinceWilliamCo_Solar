var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PWC_Competition_1 = new ol.format.GeoJSON();
var features_PWC_Competition_1 = format_PWC_Competition_1.readFeatures(json_PWC_Competition_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PWC_Competition_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PWC_Competition_1.addFeatures(features_PWC_Competition_1);
var lyr_PWC_Competition_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PWC_Competition_1, 
                style: style_PWC_Competition_1,
                popuplayertitle: 'PWC_Competition',
                interactive: true,
                title: '<img src="styles/legend/PWC_Competition_1.png" /> PWC_Competition'
            });
var format_Prince_William_County_2 = new ol.format.GeoJSON();
var features_Prince_William_County_2 = format_Prince_William_County_2.readFeatures(json_Prince_William_County_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prince_William_County_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prince_William_County_2.addFeatures(features_Prince_William_County_2);
var lyr_Prince_William_County_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prince_William_County_2, 
                style: style_Prince_William_County_2,
                popuplayertitle: 'Prince_William_County',
                interactive: true,
                title: '<img src="styles/legend/Prince_William_County_2.png" /> Prince_William_County'
            });
var format_PWC_CattleOps_3 = new ol.format.GeoJSON();
var features_PWC_CattleOps_3 = format_PWC_CattleOps_3.readFeatures(json_PWC_CattleOps_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PWC_CattleOps_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PWC_CattleOps_3.addFeatures(features_PWC_CattleOps_3);
var lyr_PWC_CattleOps_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PWC_CattleOps_3, 
                style: style_PWC_CattleOps_3,
                popuplayertitle: 'PWC_CattleOps',
                interactive: true,
                title: '<img src="styles/legend/PWC_CattleOps_3.png" /> PWC_CattleOps'
            });
var format_Hay_Pasture_Parcels_5acres_4 = new ol.format.GeoJSON();
var features_Hay_Pasture_Parcels_5acres_4 = format_Hay_Pasture_Parcels_5acres_4.readFeatures(json_Hay_Pasture_Parcels_5acres_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hay_Pasture_Parcels_5acres_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hay_Pasture_Parcels_5acres_4.addFeatures(features_Hay_Pasture_Parcels_5acres_4);
var lyr_Hay_Pasture_Parcels_5acres_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hay_Pasture_Parcels_5acres_4, 
                style: style_Hay_Pasture_Parcels_5acres_4,
                popuplayertitle: 'Hay_Pasture_Parcels_5acres',
                interactive: true,
                title: '<img src="styles/legend/Hay_Pasture_Parcels_5acres_4.png" /> Hay_Pasture_Parcels_5acres'
            });
var group_Demographics = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Demographics'});
var group_Transmission = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Transmission'});
var group_PWC_Analysis = new ol.layer.Group({
                                layers: [lyr_Hay_Pasture_Parcels_5acres_4,],
                                fold: 'open',
                                title: 'PWC_Analysis'});
var group_Structures = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Structures'});
var group_Economics = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Economics'});
var group_Community = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Community'});
var group_Environmental = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Environmental'});
var group_CattleOperations = new ol.layer.Group({
                                layers: [lyr_PWC_CattleOps_3,],
                                fold: 'open',
                                title: 'Cattle Operations'});
var group_IRAEnergyCommunities = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'IRA Energy Communities'});
var group_Geographies = new ol.layer.Group({
                                layers: [lyr_Prince_William_County_2,],
                                fold: 'open',
                                title: 'Geographies'});
var group_Competition = new ol.layer.Group({
                                layers: [lyr_PWC_Competition_1,],
                                fold: 'open',
                                title: 'Competition'});
var group_NationalData = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'National Data'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_PWC_Competition_1.setVisible(true);lyr_Prince_William_County_2.setVisible(true);lyr_PWC_CattleOps_3.setVisible(true);lyr_Hay_Pasture_Parcels_5acres_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_Competition,group_Geographies,group_CattleOperations,group_PWC_Analysis];
lyr_PWC_Competition_1.set('fieldAliases', {'County': 'County', 'Entity_Nam': 'Entity_Nam', 'Project_Na': 'Project_Na', 'Lat': 'Lat', 'Long': 'Long', 'Status': 'Status', 'COD': 'COD', 'Size_MW': 'Size_MW', 'Developer': 'Developer', 'Notes': 'Notes', });
lyr_Prince_William_County_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'STATE_NAME': 'STATE_NAME', 'STATE_ABBR': 'STATE_ABBR', 'STATE_FIPS': 'STATE_FIPS', 'COUNTY_FIP': 'COUNTY_FIP', 'FIPS': 'FIPS', 'POPULATION': 'POPULATION', 'POP_SQMI': 'POP_SQMI', 'SQMI': 'SQMI', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_PWC_CattleOps_3.set('fieldAliases', {'Farm Name': 'Farm Name', 'Address': 'Address', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Attributes': 'Attributes', });
lyr_Hay_Pasture_Parcels_5acres_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GPIN': 'GPIN', 'TaxMapNumb': 'TaxMapNumb', 'LotNumber': 'LotNumber', 'ParcelType': 'ParcelType', 'DataSource': 'DataSource', 'ParcelReco': 'ParcelReco', 'Acreage': 'Acreage', 'StreetNumb': 'StreetNumb', 'StreetName': 'StreetName', 'StreetType': 'StreetType', 'UnitNumber': 'UnitNumber', 'City': 'City', 'ZipCode': 'ZipCode', 'GSIN': 'GSIN', 'Subdivisio': 'Subdivisio', 'Subdivis_1': 'Subdivis_1', 'Subdivis_2': 'Subdivis_2', 'Subdivis_3': 'Subdivis_3', 'Subdivis_4': 'Subdivis_4', 'DeedInstru': 'DeedInstru', 'DeedBook': 'DeedBook', 'DeedPage': 'DeedPage', 'RecordedDa': 'RecordedDa', 'CreateUser': 'CreateUser', 'CreateDate': 'CreateDate', 'LastEditUs': 'LastEditUs', 'LastEditDa': 'LastEditDa', 'GlobalID': 'GlobalID', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', 'DN': 'DN', 'Acres': 'Acres', });
lyr_PWC_Competition_1.set('fieldImages', {'County': 'TextEdit', 'Entity_Nam': 'TextEdit', 'Project_Na': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Status': 'TextEdit', 'COD': 'TextEdit', 'Size_MW': 'TextEdit', 'Developer': 'TextEdit', 'Notes': 'TextEdit', });
lyr_Prince_William_County_2.set('fieldImages', {'OBJECTID': 'Hidden', 'NAME': 'Hidden', 'STATE_NAME': 'Hidden', 'STATE_ABBR': 'Hidden', 'STATE_FIPS': 'Hidden', 'COUNTY_FIP': 'Hidden', 'FIPS': 'Hidden', 'POPULATION': 'Hidden', 'POP_SQMI': 'Hidden', 'SQMI': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', });
lyr_PWC_CattleOps_3.set('fieldImages', {'Farm Name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Attributes': 'TextEdit', });
lyr_Hay_Pasture_Parcels_5acres_4.set('fieldImages', {'OBJECTID': 'Hidden', 'GPIN': 'Hidden', 'TaxMapNumb': 'Hidden', 'LotNumber': 'Hidden', 'ParcelType': 'Range', 'DataSource': 'Hidden', 'ParcelReco': 'Hidden', 'Acreage': 'Hidden', 'StreetNumb': 'Range', 'StreetName': 'TextEdit', 'StreetType': 'TextEdit', 'UnitNumber': 'TextEdit', 'City': 'TextEdit', 'ZipCode': 'TextEdit', 'GSIN': 'TextEdit', 'Subdivisio': 'Hidden', 'Subdivis_1': 'Hidden', 'Subdivis_2': 'Hidden', 'Subdivis_3': 'Hidden', 'Subdivis_4': 'Hidden', 'DeedInstru': 'Hidden', 'DeedBook': 'Hidden', 'DeedPage': 'Hidden', 'RecordedDa': 'Hidden', 'CreateUser': 'Hidden', 'CreateDate': 'Hidden', 'LastEditUs': 'Hidden', 'LastEditDa': 'Hidden', 'GlobalID': 'Hidden', 'ShapeSTAre': 'Hidden', 'ShapeSTLen': 'Hidden', 'DN': 'Hidden', 'Acres': 'TextEdit', });
lyr_PWC_Competition_1.set('fieldLabels', {'County': 'inline label - visible with data', 'Entity_Nam': 'inline label - visible with data', 'Project_Na': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'COD': 'inline label - visible with data', 'Size_MW': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'Notes': 'inline label - visible with data', });
lyr_Prince_William_County_2.set('fieldLabels', {});
lyr_PWC_CattleOps_3.set('fieldLabels', {'Farm Name': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'City': 'inline label - visible with data', 'State': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Attributes': 'inline label - visible with data', });
lyr_Hay_Pasture_Parcels_5acres_4.set('fieldLabels', {'ParcelType': 'inline label - visible with data', 'StreetNumb': 'inline label - visible with data', 'StreetName': 'inline label - visible with data', 'StreetType': 'inline label - visible with data', 'UnitNumber': 'inline label - visible with data', 'City': 'inline label - visible with data', 'ZipCode': 'inline label - visible with data', 'GSIN': 'inline label - visible with data', 'Acres': 'inline label - visible with data', });
lyr_Hay_Pasture_Parcels_5acres_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});