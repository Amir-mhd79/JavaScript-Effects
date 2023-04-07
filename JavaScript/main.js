let divFirst=document.querySelectorAll("div.first")
divFirst.forEach((elem)=>{
    elem.addEventListener("click",function(e){
        e.target.parentElement.style.backgroundColor="green"
        e.target.parentElement.style.transition="300ms"
        e.target.parentElement.style.color="white"
        console.log(e);
    })
})
let divSecond=document.querySelectorAll("div.second")
divSecond.forEach((elem)=>{
    elem.addEventListener("click",function(e){
        if (e.target.nextElementSibling){
            e.target.nextElementSibling.style.backgroundColor="crimson"
            e.target.nextElementSibling.style.transition="300ms"
            e.target.nextElementSibling.style.color="white"
            console.log(e);
        }
    })
})
let divThird=document.querySelectorAll("div.third")
divThird.forEach((elem)=>{
    elem.addEventListener("click",function(e){
        if (e.target.previousElementSibling){
            e.target.previousElementSibling.style.backgroundColor="lightBlue"
            e.target.previousElementSibling.style.transition="300ms"
            console.log(e);
        }
    })
})
let divFourth=document.querySelectorAll("div.fourth")
divFourth.forEach((elem)=>{
    elem.addEventListener("click",function(e){
        if (e.target.firstElementChild){
            e.target.firstElementChild.style.backgroundColor="orange"
            e.target.firstElementChild.style.transition="300ms"
            e.target.firstElementChild.style.borderRadius="10px"
            console.log(e);
        }
    })
})
let divFifth=document.querySelectorAll("div.fifth")
divFifth.forEach((elem)=>{
    elem.addEventListener("click",function(e){
        if (e.target.lastElementChild){
            e.target.lastElementChild.style.backgroundColor="teal"
            e.target.lastElementChild.style.transition="300ms"
            e.target.lastElementChild.style.borderRadius="10px"
            console.log(e);
        }
    })
})