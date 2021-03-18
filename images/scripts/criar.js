//crate map
const map = L.map('mapid').setView([-16.6881006,-49.2579324], 12);

//create and add tileLyear
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon= L.icon(
{iconUrl:"/map-marker.svg",
iconSize: [58,56],
iconAnchor:[29,68],

})
 
let marker;
map.on('click', event =>{
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng

    document.querySelector('[name=lat]').value=latitude;
    document.querySelector('[name=lng]').value=longitude;

    marker && map.removeLayer(marker)

    marker = L.marker([latitude, longitude], {icon})
    .addTo(map)
})


//upload de fotos
function addPhotoField(){
   const imagem = document.querySelector('#images')
   const newImages = document.querySelectorAll('.new-upload')

   const cloned = newImages[newImages.length -1].cloneNode(true)

    const input = cloned.children[0]
    if(input.value == ""){
        return
    }
   input.value = ""

   imagem.appendChild(cloned)
}

function remover(event){
    const span = event.currentTarget
    const fieldContainer = document.querySelectorAll('.new-upload')
    const quantidade = fieldContainer.length

    if(quantidade < 2){
        span.parentNode.children[0].value =""
        return
    }

    span.parentNode.remove()
}

function selecionar(event){
   document.querySelectorAll('.select-button button')
   .forEach( button => button.classList.remove('active'))
   
   const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="fim-de-semana"]')
    input.value = button.dataset.value
}

function validet(event){
    const lat= document.querySelector('input[name:lat]')
    const lng = document.querySelector('input[name: lng]')
    if(lat && lng == ""){
    event.preventDefault()
    alert("escolha um ponto no mapa")
    }
}