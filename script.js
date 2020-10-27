const imageContainer = document.getElementById("image-container")
const loader = document.getElementById("loader")

let photosArray = []

//Unsplas Api
const count = 10
const apiKey = 'PzIy6_VHLjKBvBOeWiAy2LDZz1LdkEoASEKQWLqX6Sg'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Helper function for setting attribute
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Create elements for links and photos
function displayPhotos () {
    photosArray.forEach((photo) => {
        const item = document.createElement('a')
        setAttributes(item, {
            href: photo.links.html, 
            target: '_blank'
        })

        const img = document.createElement('img')
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}

// Get photos from unspash
async function getPhotos () {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
    } catch(error) {
        console.log(error)
    }
}

// check to see if scrolling near the bottom of the page and load more photos
window.addEventListener('scroll', () => {
    console.log('scrolled')
})

// ON Load
getPhotos()