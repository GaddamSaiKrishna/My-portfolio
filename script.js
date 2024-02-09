const slides=document.querySelectorAll(".slides");
var counter=0;
slides.forEach(
    (slide,index)=>{
        console.log(slide.innerText);
        slide.style.left=`${index * 100}%`;
    }
)
const goNext=()=>{
    if(counter===slides.length-1){
        counter=0;
        slideImage(); 
    }
    else{
        counter++;
        slideImage();
    }
}
const goPrev=()=>{
    if(counter===0){
        counter=slides.length-1;
        slideImage();
    }
    else{
        counter--;
    slideImage();
    }
}
// const goBack=()=>{
//     slides.forEach(
//         (slide)=>{
//             slide.style.transform=`translateX-${0}%`;
//         }
//     )
// }
const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`;
        }
    )
}
let prev=document.querySelector("#prev");
let next=document.querySelector("#next");
prev.addEventListener("click",goPrev);
next.addEventListener("click",goNext);

let edu=document.querySelector(".edu");
let eduInfo=document.querySelector(".edu-info");
let exp=document.querySelector(".exp");
let expInfo=document.querySelector(".exp-info");
exp.addEventListener("click",()=>{
    eduInfo.classList.add("hidden");
    expInfo.classList.remove("hidden");
    exp.style.textDecoration="underline";
    exp.style.textDecorationColor=" #50e2c0";
    exp.style.textDecorationThickness="3px"
    edu.style.textDecoration="none";
})
edu.addEventListener("click",()=>{
    eduInfo.classList.remove("hidden");
    expInfo.classList.add("hidden");
    edu.style.textDecoration="underline";
    edu.style.textDecorationColor=" #50e2c0";
    edu.style.textDecorationThickness="3px"
    exp.style.textDecoration="none";
});
let loader=document.querySelector(".pre-loader");
window.addEventListener("load",()=>{
    loader.style.display="none";
})
let theme="light";
let mode=document.querySelector(".mode")
mode.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme")
})
mode.addEventListener("click",()=>{
    if(theme==="light"){
        mode.src="./images/sun.png";
        theme="dark"
    }
    else{
        mode.src="./images/moon.png";
        theme="light";
    }

});
let menuBtn=document.querySelector(".menu-btn i");
let sideBar="open";
menuBtn.addEventListener("click",()=>{
    if(sideBar==="open"){
        console.log("clicked")
        menuBtn.classList.remove("fa-solid fa-bars");
        menuBtn.classList.add("fa-solid fa-xmark")
        sideBar="close";
    }
    else{
        menuBtn.classList.add("fa-solid fa-bars");
        menuBtn.classList.remove("fa-solid fa-xmark")
        sideBar="close";
    }

})