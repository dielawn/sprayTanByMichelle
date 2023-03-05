const galleryNavBtn = document.getElementById('galleryBtn')
const gallery = document.getElementById('galleryDiv')
const containerDiv = document.getElementById('container')

galleryNavBtn.addEventListener('click', (event) =>{
    
    if(gallery.classList.contains('hide')){
        event.preventDefault(); 
        gallery.classList.remove('hide')
        gallery.classList.add('flex')
        containerDiv.classList.add('blur')
        console.log('hi')
        return
    }
    event.preventDefault(); 
    gallery.classList.add('hide')
    gallery.classList.remove('flex')
    containerDiv.classList.remove('blur')
    console.log('bye')
    return
})
console.log(gallery.classList)