let statBar = document.querySelector(".skills");
let skillspan = document.querySelectorAll(".skills span");
let imageMove =document.querySelector('.image')
let designSection = document.querySelector('.design')
let statSection =document.querySelector('.stats');
let numIncrease=document.querySelectorAll('.number')
let execute= false

window.onscroll= function() {
if (window.scrollY >= statBar.offsetTop - 200) {
    skillspan.forEach((span)=>{
        span.style.width=span.dataset.progress;
    });

};
if(window.scrollY >= designSection.offsetTop - 200) {
imageMove.style.left='60px'
}

if(window.scrollY >= statSection.offsetTop -200 ) {
    if(!execute){
        numIncrease.forEach((num)=> startCount(num))
    }
    execute = true
}
};

let startCount =(el)=>{
 let theGoal = el.dataset.goal
 let theCount = setInterval(()=>{
    el.textContent++
    if(el.textContent == theGoal) {
        clearInterval(theCount)
    }
 }, 1000 / theGoal)
}




let theShuffle = document.querySelectorAll(".shuffle li");
let thephotos = document.querySelectorAll(".imgs-container div");


theShuffle.forEach((li)=>{
    li.addEventListener("click", filter);
    li.addEventListener("click", removeImg);

})

function filter () {
    theShuffle.forEach((li) =>{
        li.classList.remove("active");
        this.classList.add("active");
    })
    
}


function removeImg () {
    thephotos.forEach((img)=>{
        img.style.display="none";
    }
    )
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
    el.style.display="block";
    }
    )
};


let sliderMover = document.querySelector('.image-slider:first-child')
let sliderButtons1 =document.querySelector('.bullets .btn1')
let sliderButtons2 =document.querySelector('.bullets .btn2')
let sliderButtons3 =document.querySelector('.bullets .btn3')
let allsliderButtons=document.querySelectorAll('.bullets a')



window.onload=()=>{
    sliderMover.style.marginLeft='0'
    sliderButtons1.classList.add('theactive')
}


sliderButtons1.onclick=()=>{
    sliderMover.style.marginLeft='0'
    allsliderButtons.forEach((a)=>a.classList.remove('theactive'))
    sliderButtons1.classList.add('theactive')
}

sliderButtons2.onclick=()=>{
    sliderMover.style.marginLeft='-100%'
    allsliderButtons.forEach((a)=>a.classList.remove('theactive'))
    sliderButtons2.classList.add('theactive')
}

sliderButtons3.onclick=()=>{
    sliderMover.style.marginLeft='-200%'
    allsliderButtons.forEach((a)=>a.classList.remove('theactive'))
    sliderButtons3.classList.add('theactive')
}





