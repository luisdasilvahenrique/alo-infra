const map = L.map('map').setView([-5.7385, -39.6265], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let marker;

map.on('click', function (e) {
    if (marker) {
        map.removeLayer(marker);
    }
    marker = L.marker(e.latlng, {
        icon: L.icon({
            iconUrl: '../image/pin.png',
            iconSize: [64, 64],
            iconAnchor: [32, 64],
        })
    }).addTo(map);
});