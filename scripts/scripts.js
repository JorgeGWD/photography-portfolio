const fetchPhotos = () => {
    const API_URL = 'https://api.unsplash.com/'
    const API_KEY = 'b1-Q2sdry5X8DLVH2zN5BOr5gLmk1lXZlY4_GvzlwK4'

    fetch(API_URL+ 'photos/?client_id=' + API_KEY)
    .then(response => {
        return response.json()
    })
    .then(data => {
        // console.log(data)

        data.forEach(photo => {
            const result = photo.urls.small
            
            document.getElementById('img').append(result)

            console.log(result)
        });
    })
    .catch(error => alert(error))
}

fetchPhotos()