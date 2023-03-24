const galleryNavBtn = document.getElementById('galleryBtn')

const gallery = document.getElementById('galleryDiv')
const containerDiv = document.getElementById('container')



galleryNavBtn.addEventListener('click', (event) =>{    
    if(gallery.classList.contains('hide')){
        openGallery(event)
        return
    }
    closeGallery(event)
    return
})



const openGallery = (event) =>{
    event.preventDefault(); 
    gallery.classList.remove('hide')
    gallery.classList.add('flex')
    containerDiv.classList.add('blur')
    
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    gallery.style.overflowY = 'auto';

    console.log('hi', containerDiv.classList)
    
}

const closeGallery = (event) => {
    event.preventDefault(); 
    gallery.classList.add('hide')
    gallery.classList.remove('flex')
    containerDiv.classList.remove('blur')
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    console.log('bye')
    
}



console.log(gallery.classList)


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// const displayPhoneOrTxt = () =>{
//     const phoneNumberLink = document.getElementById('phoneNumber')
//     let topElement = document.getElementById('topest')
//     console.log(window.innerWidth)
//     if (window.innerWidth < 800) {
//         phoneNumberLink.innerText = 'Book Today'
//         topElement.classList.remove = 'sticky'
//         return
//       } else {
//         phoneNumberLink.innerText = '253-691-2252'
//         phoneNumberLink.style.outline = 'none'
//         return
//       }
// }

  
document.onload = gallery.classList.add('hide');
// document.onload = displayPhoneOrTxt();

window.onscroll = function() {scrollFunction()};
let topBtn = document.getElementById('topBtn')
topBtn.classList.add('displayNone')
function scrollFunction() {
   
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

    topBtn.classList.remove('displayNone')
    topBtn.classList.add('flex')
    
  } else {
    topBtn.classList.remove('flex')
    topBtn.classList.add("displayNone");
    
  }
}
