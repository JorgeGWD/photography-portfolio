const fetchPhotos = async () => {

    const API_URL = 'https://api.unsplash.com/'

    const API_KEY = 'b1-Q2sdry5X8DLVH2zN5BOr5gLmk1lXZlY4_GvzlwK4'

    let response = await fetch(API_URL+ 'photos/?client_id=' + API_KEY)
    
    let jsonResponse = await response.json()

    let imagesList = await jsonResponse

    console.log(imagesList)

    const createImages = (imagesList) => {

        for(let i = 0 ; i < imagesList.length ; i++ ) {

        const image = document.createElement('img')

        image.src = imagesList[i].urls.regular

        document.getElementById('displayImg__content').appendChild(image)

        }
    }

    createImages(imagesList)

}

fetchPhotos()

const displayMenu = () => {
    const menu = document.getElementById('menu')

    if(menu.className === 'topNavMenu') {
        menu.className += ' responsive'
    } else {
        menu.className = 'topNavMenu'
    }
}

const displayBodyMenu = () => {
    const menu = document.getElementById('bodyMenu')

    if(menu.className === 'bodyNavMenu') {
        menu.className += ' responsive'
    } else {
        menu.className = 'bodyNavMenu'
    }
}