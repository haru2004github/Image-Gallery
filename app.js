let container = document.querySelector('.container');
let modal = document.querySelector('.modal');
let overLay = document.querySelector('.overLay');
let closeBtn = document.querySelector('.closeBtn');
let modalImage = document.querySelector('.modalImg');
let nextBtn = document.querySelector('.nextBtn');
let preBtn = document.querySelector('.preBtn');
let downloadBtn = document.querySelector('.downloadBtn');


let currentImage =''
container.addEventListener('click' ,()=>{
    const target = event.target;
    if(target.tagName == 'IMG'){
        currentImage = target;
        modalImage.src = target.src
        container.style.zIndex = '-1'
        modal.style.display = "block"
        modal.style.zIndex = "4"
        overLay.style.display = "block"
       

    }
   
})
//validation pre and next btn
modalImage.addEventListener('load' ,()=>{

    if(currentImage.previousElementSibling === null){
        preBtn.style.opacity = "0"
    }else{
        preBtn.style.opacity = "1"

    }
    
    if(currentImage.nextElementSibling === null){
        nextBtn.style.opacity = "0"
    }else{
        nextBtn.style.opacity = "1"

    }
})

//preBtn click
preBtn.addEventListener('click' ,()=>{
    modalImage.src = currentImage.previousElementSibling.src
    currentImage = currentImage.previousElementSibling
})

//nextBtn click
nextBtn.addEventListener('click' ,()=>{
    modalImage.src = currentImage.nextElementSibling.src
    currentImage = currentImage.nextElementSibling
})

//downLoad btn
downloadBtn.addEventListener('click', ()=>{
    downloadBtn.href = currentImage.src
  })

//background blur
overLay.addEventListener('click' ,()=>{
    overLay.style.display = "none"
    modal.style.display = "none"
    container.style.zIndex = '3'
})

//close btn
closeBtn.addEventListener('click' ,()=>{
    overLay.style.display = "none"
    modal.style.display = "none"
    container.style.zIndex = '3'
})

