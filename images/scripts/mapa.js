//crate map
const map = L.map('mapid').setView([-16.6881006,-49.2579324], 12);

//create and add tileLyear
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon= L.icon(
{iconUrl:"/map-marker.svg",
iconSize: [58,56],
iconAnchor:[29,68],
popupAnchor:[170,2]
})

function addMaker({id, name, lat, lng}) {
    const popup = L.popup({
        closeButton: false,
        className:'map-popup',
        minWidth:240,
        minHeight:240
    }).setContent(`${name} <a href="/orphanege?id=${id}" class ="choose-orfanage"> <img src="/arrow-white.svg"> </a>`)
    
    //create and add maker
    L.marker([lat,lng], {icon}).addTo(map)
        .bindPopup(popup)
}
 const of = document.querySelectorAll('.orphaneges span')
of.forEach(span => {
    const orfanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMaker(orfanage)
})
   
    