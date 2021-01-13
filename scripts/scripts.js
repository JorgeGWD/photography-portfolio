const fetchPhotos = async () => {

    const API_URL = 'https://api.unsplash.com/'

    const API_KEY = 'b1-Q2sdry5X8DLVH2zN5BOr5gLmk1lXZlY4_GvzlwK4'

    let response = await fetch(API_URL+ `photos?&per_page=10&client_id=` + API_KEY)
    
    let jsonResponse = await response.json()

    let imagesList = await jsonResponse

    const createImages = (imagesList) => {

        for(let i = 0 ; i < imagesList.length ; i++ ) {

            newDiv = document.createElement('div')

            image = document.createElement('img')

            image.src = imagesList[i].urls.regular

            title = document.createElement('h4')

            title.innerHTML = imagesList[i].alt_description

            newDiv.className = 'displayImg__container'

            newDiv.appendChild(image)

            newDiv.appendChild(title)

            document.getElementById('displayImg__content').appendChild(newDiv)

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

const displayGrid = () => {
    const menu = document.getElementById('displayImg__content')

    if(menu.className === 'displayImg__content') {
        menu.className += ' displayImg__content__grid'
    } else {
        menu.className = 'displayImg__content__grid'
    }
}

const displayColumn = () => {
    const menu = document.getElementById('displayImg__content')

    if(menu.className === 'displayImg__content') {
        menu.className += ' displayImg__content__columns'
    } else {
        menu.className = 'displayImg__content__columns'
    }
}