const ACCESS_KEY = 'T3dSLCK9o7sJpAqnnQGnjW6UH59BCTmuvTVigFL6asQ';
const imageContainer = document.getElementById('image-container');

function setPhotos(photos){
    return photos.map(photo => {
        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title',photo.alt_description);
        return imageContainer.appendChild(img);
    });
}

async function getPhotos(){
    let count = 10;
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=${count}`;
    try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        const photosArray = result;
        count = 0;
        setPhotos(photosArray) ;
    } catch (err) {
        console.error(err.message);
    }    
}

window.addEventListener('scroll',() => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
        getPhotos();
    }
})

getPhotos();