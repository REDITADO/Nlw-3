const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWeelZoom:false,
    zoomControl:false
}
const spanl = document.querySelector('span[data-lat]').dataset.lat
const spant = document.querySelector('span[data-lng]').dataset.lng
//crate map
const map = L.map('mapid', options).setView([spanl,spant], 12);

//create and add tileLyear
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon= L.icon(
{iconUrl:"/map-marker.svg",
iconSize: [58,56],
iconAnchor:[29,68],
popupAnchor:[170,2]
})


//create and add maker
L.marker([spanl,spant], {icon}).addTo(map)
    .bindPopup(popup)
   
    //image galery
    function galery(event) {
        const button = event.currentTarget
        const buttons = document.querySelectorAll(".images button")
        buttons.forEach( removerActive)
        function removerActive(button){
             button.classList.remove("active")

        }
        button.classList.add("active")
        const imagem = button.children[0]
        const imagmcontainer = document.querySelector(".orphanege-details > img")
        imagmcontainer.src = imagem.src
    }
   