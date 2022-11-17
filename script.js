const baseURL = 'https://api.pexels.com/v1/'


async function getAllPhotos() {

    const selectElement = document.getElementById('pages-number')
    const numberPages = selectElement.value

    const response = await fetch(`${baseURL}curated?page=1&per_page=${numberPages}`, {
        headers: {
            Authorization: "563492ad6f917000010000011d8171a3462a46ec81aa32dae4126541"
          },
    })
    const data = await response.json()

    console.log(data)

    const results = data.photos
    createPhotos(results)

}

function createPhotos(results) {
    const divPai = document.getElementById('photos')
    divPai.innerHTML=''
    
    for(const item of results) {
        const photo = item.src.small


        

        const image = document.createElement('img') // cria <img>
        image.setAttribute('src', photo) // coloca atributo src => <img src="url">
        image.setAttribute('class', 'photo-menu') // coloca atributo src => <img src="url">

        const imageContainer = document.createElement('div')
        imageContainer.setAttribute('class', 'image-container')
      //  divPai.appendChild(image) // coloca <img src="..."> dentro da div pai

        imageContainer.appendChild(image)
        divPai.appendChild(imageContainer)
        
    }


}

async function getPhotos() {

    const selectElement = document.getElementById('pages-number')
    const numberPages = selectElement.value

    const inputElement = document.getElementById('inputSearch')
    const inputText = inputElement.value 

    const response = await fetch(`${baseURL}search?query=${inputText}&page=1&per_page=${numberPages}`, {
        headers: {
            Authorization: "563492ad6f917000010000011d8171a3462a46ec81aa32dae4126541"
          },
    })
    const data = await response.json()

    console.log(data)

    const results = data.photos
    createPhotos(results)

}

function handleChangesPagesNumber () {


    const inputElement = document.getElementById('inputSearch')
    const inputText = inputElement.value 

    if (inputText){

        getPhotos()
    } else {

        getAllPhotos()
    }


}

getAllPhotos()
