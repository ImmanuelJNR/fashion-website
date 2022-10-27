const body = document.querySelector('body')
const hambuger = document.getElementById("harmbuger")
const exit_btn =  document.getElementById("exit")
const list_btn  = document.getElementById("list-menu")
const mobileScreenNav = document.getElementById('mobile-navigation')

const carousel = document.getElementById("carousel")
const carousel_2 = document.getElementById("carousel-2")
const carousel_container_2 = document.getElementById("carousel-content-container-2")

// =================speech-speaking modal functionality================
let speechBox = document.querySelector(".speech-box")
let allSections = document.querySelectorAll("section")
window.addEventListener("load", speech)


function speech(){
  speechBox.style.display = "flex"
  body.classList.add("stop-scroll")


    speechSynthesis.speak(new
      SpeechSynthesisUtterance("I'm Elijah Emmanuel, a junior frontend developer. This site is a work in progress site. Please be patient, other functionalities will be added shortly. Thank you")
    ) 
}


// =======================hide modal with button==================
let remove = document.querySelector(".xmark")
remove.addEventListener("click", takeAware)

function takeAware() {
  body.classList.remove("stop-scroll")

  speechBox.style.display = "none"
  
}





/* =======================network-detecting functionality============================= */
// const networkMessage = document.querySelector('p[id="message"] span')
const network_detector = document.querySelector("#network-detector")
const networkMessage = document.querySelector("#message")
if (window.navigator.onLine){
  setOnline()

} else{
  setOffline()
}

window.addEventListener("online", ()=>{
  setOnline()
})
window.addEventListener("offline", ()=>{
  setOffline()
})

function setOnline(){
    network_detector.style.display = "none"  
    networkMessage.textContent = "Back Online"
    networkMessage.style.color ="green"
  
}
function setOffline(){
  network_detector.style.display = "block"
  networkMessage.textContent = "No internet connection!"
  networkMessage.style.color ="red"
}

// =================function that brings out the mobile navigation=========//
hambuger.addEventListener("click", showMenu)
function showMenu(){
    mobileScreenNav.style.display = "block"  
  }
  
  // =================function that closes the mobile navigation=========//
  exit_btn.addEventListener("click", hideMenu)
  function hideMenu(){
    mobileScreenNav.style.display = "none"
  }
  
  
  
  // ==============carousel-section-code================
  const hScroll = document.querySelector("#second-section")
  const sCount = document.querySelector("#carousel-content-container")

  let currentScrollPosition = 0
  let scrollAmount = 320

  let maxScroll = sCount.offsetWidth + hScroll.offsetWidth

  function scrollhorizontally(val){
    currentScrollPosition += (val * scrollAmount)
    // console.log(currentScrollPosition)

    if(currentScrollPosition > 0){
        currentScrollPosition = 0
    }

    if(currentScrollPosition < maxScroll){
        currentScrollPosition = maxScroll
    }

    sCount.style.left = currentScrollPosition + "px"

    // alert("you")
  }







// adding image to the second carousel
let images = [...document.querySelectorAll(".fashion-display")]
images.forEach((image, idx) => {
    image.style.backgroundImage = `url(img/second-carousel-images/${idx+1}.jpg)`
})




// SHOP BY CATEGORY first-functionality
// for-men and for-women btn that changes the sub-buttons
const btns = document.querySelectorAll(".btn")
const categories = document.querySelectorAll(".category")

btns.forEach((btn) =>{
  btn.addEventListener("click", ()=>{
    btns.forEach((btn) => btn.classList.remove("active"))
    categories.forEach(category => category.classList.remove("active"))
    btn.classList.add("active")
    document.querySelector(btn.dataset.target).classList.add("active")
  })
})




// SHOP BY CATEGORY second-functionality
// the sub-buttons the changes each of the products 
const items = document.querySelectorAll(".card")
const allBtns = document.querySelectorAll(".category-btn")

// window.addEventListener('DOMContentLoaded', () => {
//   allBtns[0].classList.add('active-btn')
// })

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showfilteredContent(btn)
  })
})

function showfilteredContent(btn){
  items.forEach((item) => {
    if(item.classList.contains(btn.id)){
      resetActiveBtn()
      btn.classList.add("active-btn")
      item.style.display = "block"
    } else{
      item.style.display = "none"
    }
  })

}

function resetActiveBtn(){
  allBtns.forEach((btn) => {
    btn.classList.remove('active-btn')
  })
}

// ################--seventh-section- which is the outlet section-########
const sliderImages = document.querySelectorAll(".slide")
const leftArrow = document.querySelector(".fa-chevron-left")
const rightArrow = document.querySelector(".fa-chevron-right")
current = 0

// clear all images
function reset(){
  for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none'
  }
}


// init slider
function startSlide(){
  reset()
  sliderImages[0].style.display = "block"
}

// show prev
function slideLeft(){
  reset()
  sliderImages[current - 1].style.display = "block"
  current--
}

// show next
function slideRight(){
  reset()
  sliderImages[current + 1].style.display = "block"
  current++
}

// left arrow click
leftArrow.addEventListener("click", function(){
  if(current === 0){
      current = sliderImages.length
  }

  slideLeft()
})

// Right arrow click
rightArrow.addEventListener("click", function(){
  if(current === sliderImages.length - 1){
      current = -1
  }

  slideRight()
})

startSlide()









