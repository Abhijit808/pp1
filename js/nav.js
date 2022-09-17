const burger = document.querySelector(".burger");
const uid = document.querySelector(".uid");
const bid = document.querySelectorAll(".b-li");
const about = document.querySelector(".about");
const body =document.body
burger.addEventListener('click',()=>{
    uid.classList.toggle('transform');
    for (let index = 0; index < bid.length; index++) {
        bid[0].classList.toggle('r');
        burger.classList.toggle('t');
        bid[1].classList.toggle('r-t');
        bid[2].classList.toggle('d-n');
    }
})
// window.addEventListener('scroll',(e)=>{
//     // console.log(window.pageYOffset);
//     const scrolloffset = window.pageYOffset;
//     if(scrolloffset > 201) {
//         body.style.transition="all 400ms ease-in-out ";
//         body.style.backgroundColor = "#212121"
//         about.classList.remove("s-opacity-0")
//     }
//     else {
//         body.style.backgroundColor = "#f5f5f5"
//     }
    
// })

