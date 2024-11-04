var map = L.map('map').setView([46.459235, -0.797778], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([46.459235, -0.797778]).addTo(map)
    .bindPopup('Centre AFPA de Fontenay-le-comte')
    .openPopup();

