ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([1300396.968523, 9142410.069374, 1370329.025870, 9162559.984203]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Jalan_Mojokerto_OSM_Cut_3 = new ol.format.GeoJSON();
var features_Jalan_Mojokerto_OSM_Cut_3 = format_Jalan_Mojokerto_OSM_Cut_3.readFeatures(json_Jalan_Mojokerto_OSM_Cut_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Jalan_Mojokerto_OSM_Cut_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Mojokerto_OSM_Cut_3.addFeatures(features_Jalan_Mojokerto_OSM_Cut_3);
var lyr_Jalan_Mojokerto_OSM_Cut_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Mojokerto_OSM_Cut_3, 
                style: style_Jalan_Mojokerto_OSM_Cut_3,
                popuplayertitle: 'Jalan_Mojokerto_OSM_Cut',
                interactive: false,
    title: 'Jalan_Mojokerto_OSM_Cut<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_1.png" /> Jalan Akses<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_2.png" /> Jalan Bentang Alam<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_3.png" /> Jalan Lingkungan<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_4.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_5.png" /> Jalan setapak<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_6.png" /> Jalan Tol<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_7.png" /> Jalur perjalan kaki<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_8.png" /> Kolektor Primer<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_9.png" /> Kolektor Sekunder<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_10.png" /> Link Tol<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_3_11.png" /> <br />' });
var format_GiaGustaman_Revisi_Mojokerto_4 = new ol.format.GeoJSON();
var features_GiaGustaman_Revisi_Mojokerto_4 = format_GiaGustaman_Revisi_Mojokerto_4.readFeatures(json_GiaGustaman_Revisi_Mojokerto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_GiaGustaman_Revisi_Mojokerto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiaGustaman_Revisi_Mojokerto_4.addFeatures(features_GiaGustaman_Revisi_Mojokerto_4);
var lyr_GiaGustaman_Revisi_Mojokerto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiaGustaman_Revisi_Mojokerto_4, 
                style: style_GiaGustaman_Revisi_Mojokerto_4,
                popuplayertitle: 'Gia Gustaman_Revisi_Mojokerto',
                interactive: true,
    title: 'Gia Gustaman_Revisi_Mojokerto<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_0.png" /> 1<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_1.png" /> 2<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_2.png" /> 3<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_3.png" /> 4<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_4.png" /> 5<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_5.png" /> 6<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_6.png" /> 7<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_7.png" /> 8<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_8.png" /> 9<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_9.png" /> 10<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_10.png" /> 11<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_11.png" /> 12<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_12.png" /> 13<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_13.png" /> 14<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_14.png" /> 15<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_15.png" /> 16<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_16.png" /> 17<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_17.png" /> 18<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_18.png" /> 19<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_19.png" /> 20<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_20.png" /> 21<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_21.png" /> 22<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_22.png" /> 23<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_23.png" /> 24<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_24.png" /> 25<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_25.png" /> 26<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_26.png" /> 27<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_27.png" /> 28<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_28.png" /> 29<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_29.png" /> 30<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_30.png" /> 31<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_31.png" /> 32<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_32.png" /> 33<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_33.png" /> 34<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_34.png" /> 35<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_35.png" /> 36<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_36.png" /> 37<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_37.png" /> 38<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_38.png" /> 39<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_39.png" /> 40<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_40.png" /> 41<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_41.png" /> 42<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_42.png" /> 43<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_43.png" /> 44<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_44.png" /> 45<br />\
    <img src="styles/legend/GiaGustaman_Revisi_Mojokerto_4_45.png" /> 46<br />' });
var format_Kecamatan_jawa_Timur_5 = new ol.format.GeoJSON();
var features_Kecamatan_jawa_Timur_5 = format_Kecamatan_jawa_Timur_5.readFeatures(json_Kecamatan_jawa_Timur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Kecamatan_jawa_Timur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_jawa_Timur_5.addFeatures(features_Kecamatan_jawa_Timur_5);
var lyr_Kecamatan_jawa_Timur_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_jawa_Timur_5, 
                style: style_Kecamatan_jawa_Timur_5,
                popuplayertitle: 'Kecamatan_jawa_Timur',
                interactive: false,
                title: '<img src="styles/legend/Kecamatan_jawa_Timur_5.png" /> Kecamatan_jawa_Timur'
            });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleSatellite_2,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Jalan_Mojokerto_OSM_Cut_3.setVisible(true);lyr_GiaGustaman_Revisi_Mojokerto_4.setVisible(true);lyr_Kecamatan_jawa_Timur_5.setVisible(true);
var layersList = [group_Basemap,lyr_Jalan_Mojokerto_OSM_Cut_3,lyr_GiaGustaman_Revisi_Mojokerto_4,lyr_Kecamatan_jawa_Timur_5];
lyr_Jalan_Mojokerto_OSM_Cut_3.set('fieldAliases', {'code': 'code', 'fclass': 'fclass', 'name': 'name', 'oneway': 'oneway', 'bridge': 'bridge', 'tunnel': 'tunnel', 'EditBy': 'EditBy', });
lyr_GiaGustaman_Revisi_Mojokerto_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'SKALA': 'SKALA', 'THNNILAI': 'THNNILAI', 'cluster': 'cluster', 'NOZN': 'NOZN', 'JNSZN': 'JNSZN', 'PENGGUNAAN': 'PENGGUNAAN', 'HISTZONE': 'HISTZONE', 'JMLSMPL': 'JMLSMPL', 'JENISSAMPE': 'JENISSAMPE', 'BEDA_ZONA': 'BEDA_ZONA', 'NILMIN': 'NILMIN', 'NILMAKS': 'NILMAKS', 'JMLNILAI': 'JMLNILAI', 'SMPBKREL': 'SMPBKREL', 'SMPBAKU': 'SMPBAKU', 'NILAIZN': 'NILAIZN', 'NILBULAT': 'NILBULAT', 'Luas_M2': 'Luas_M2', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Surveyor': 'Surveyor', 'Note': 'Note', 'Kode Zona': 'Kode Zona', });
lyr_Kecamatan_jawa_Timur_5.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Operator': 'Operator', });
lyr_Jalan_Mojokerto_OSM_Cut_3.set('fieldImages', {'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'EditBy': 'TextEdit', });
lyr_GiaGustaman_Revisi_Mojokerto_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'SKALA': 'TextEdit', 'THNNILAI': 'TextEdit', 'cluster': 'TextEdit', 'NOZN': 'TextEdit', 'JNSZN': 'Range', 'PENGGUNAAN': 'TextEdit', 'HISTZONE': 'TextEdit', 'JMLSMPL': 'TextEdit', 'JENISSAMPE': 'TextEdit', 'BEDA_ZONA': 'TextEdit', 'NILMIN': 'TextEdit', 'NILMAKS': 'TextEdit', 'JMLNILAI': 'TextEdit', 'SMPBKREL': 'TextEdit', 'SMPBAKU': 'TextEdit', 'NILAIZN': 'TextEdit', 'NILBULAT': 'TextEdit', 'Luas_M2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Surveyor': 'TextEdit', 'Note': 'TextEdit', 'Kode Zona': 'TextEdit', });
lyr_Kecamatan_jawa_Timur_5.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Operator': 'TextEdit', });
lyr_Jalan_Mojokerto_OSM_Cut_3.set('fieldLabels', {'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'EditBy': 'no label', });
lyr_GiaGustaman_Revisi_Mojokerto_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'WADMPR': 'inline label - always visible', 'WADMKK': 'hidden field', 'SKALA': 'hidden field', 'THNNILAI': 'hidden field', 'cluster': 'hidden field', 'NOZN': 'inline label - always visible', 'JNSZN': 'inline label - always visible', 'PENGGUNAAN': 'inline label - always visible', 'HISTZONE': 'hidden field', 'JMLSMPL': 'hidden field', 'JENISSAMPE': 'hidden field', 'BEDA_ZONA': 'hidden field', 'NILMIN': 'hidden field', 'NILMAKS': 'hidden field', 'JMLNILAI': 'hidden field', 'SMPBKREL': 'hidden field', 'SMPBAKU': 'hidden field', 'NILAIZN': 'hidden field', 'NILBULAT': 'hidden field', 'Luas_M2': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', 'Surveyor': 'inline label - always visible', 'Note': 'no label', 'Kode Zona': 'no label', });
lyr_Kecamatan_jawa_Timur_5.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Operator': 'no label', });
lyr_Kecamatan_jawa_Timur_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});