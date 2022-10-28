const footer = document.querySelector(".mainfooter");
const height = footer.getBoundingClientRect().top;
const window_height = window.innerHeight;
console.log(height);
console.log(window_height);
window.addEventListener('scroll',(event)=>{
    if(height<=window_height){
        footer.style.backgroundColor="yellow";
        footer.style.transition ="all 200ms ease";
    }

})