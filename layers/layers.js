var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_literasiyangbaruPakeini_1 = new ol.format.GeoJSON();
var features_literasiyangbaruPakeini_1 = format_literasiyangbaruPakeini_1.readFeatures(json_literasiyangbaruPakeini_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_literasiyangbaruPakeini_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_literasiyangbaruPakeini_1.addFeatures(features_literasiyangbaruPakeini_1);
var lyr_literasiyangbaruPakeini_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_literasiyangbaruPakeini_1, 
                style: style_literasiyangbaruPakeini_1,
                popuplayertitle: 'literasi yang baru Pake ini',
                interactive: true,
                title: '<img src="styles/legend/literasiyangbaruPakeini_1.png" /> literasi yang baru Pake ini'
            });

lyr_OSMStandard_0.setVisible(true);lyr_literasiyangbaruPakeini_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_literasiyangbaruPakeini_1];
lyr_literasiyangbaruPakeini_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kategori': 'Kategori', 'Deskripsi': 'Deskripsi', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', 'Kode Pos': 'Kode Pos', 'No Telp': 'No Telp', 'Instagram': 'Instagram', 'Jam Ops': 'Jam Ops', 'Website': 'Website', 'Status': 'Status', 'Lat': 'Lat', 'Long': 'Long', });
lyr_literasiyangbaruPakeini_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Kategori': 'TextEdit', 'Deskripsi': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', 'Kode Pos': 'TextEdit', 'No Telp': 'TextEdit', 'Instagram': 'TextEdit', 'Jam Ops': 'TextEdit', 'Website': 'TextEdit', 'Status': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_literasiyangbaruPakeini_1.set('fieldLabels', {'id': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Kategori': 'inline label - visible with data', 'Deskripsi': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kota': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kode Pos': 'inline label - always visible', 'No Telp': 'inline label - always visible', 'Instagram': 'inline label - always visible', 'Jam Ops': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Status': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Long': 'inline label - always visible', });
lyr_literasiyangbaruPakeini_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});