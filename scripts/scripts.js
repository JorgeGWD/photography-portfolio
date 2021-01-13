const fetchPhotos = async () => {

    const API_URL = 'https://api.unsplash.com/'

    const API_KEY = 'b1-Q2sdry5X8DLVH2zN5BOr5gLmk1lXZlY4_GvzlwK4'

    let response = await fetch(API_URL+ 'photos/?client_id=' + API_KEY)
    
    let jsonResponse = await response.json()

    let imagesList = await jsonResponse

    console.log(imagesList)

    const createImages = (imagesList) => {

        for(let i = 0 ; i < imagesList.length ; i++ ) {

        const image = document.createElement('img');

        image.src = imagesList[i].urls.thumb;

        document.body.appendChild(image);

        }
    }

    createImages(imagesList)
    
}

fetchPhotos()