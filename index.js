
var platform = new H.service.Platform({
  apikey: "-FewRD8ilZccyoZS4NcDGVZ0xdupGKhtVDTsGFhrJf0"
});

var defaultLayers = platform.createDefaultLayers();
var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
  center: { lat: 0, lng: 0 },
  zoom: 2
});
var ui = H.ui.UI.createDefault(map, defaultLayers);



document.getElementById('buscarBtn').addEventListener('click', buscarEnMapa);


function buscarEnMapa() {
  let lat = parseFloat(document.getElementById('lat').value);
  let lng = parseFloat(document.getElementById('lng').value);

  if (lat && lng) {
    map.setCenter({ lat, lng });
    map.setZoom(14);
  } 
}
