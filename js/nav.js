const burger = document.querySelector(".burger");
const uid = document.querySelector(".uid");
const bid = document.querySelectorAll(".b-li");

burger.addEventListener('click',()=>{
    uid.classList.toggle('transform');
    for (let index = 0; index < bid.length; index++) {
        bid[0].classList.toggle('r');
        burger.classList.toggle('t');
        bid[1].classList.toggle('r-t');
        bid[2].classList.toggle('d-n');
    }
})

