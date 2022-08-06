const round = document.querySelectorAll(".round");
const slides =document.querySelectorAll(".slide");
const active = document.querySelector('.s-active');
const section = document.querySelector('.section-hero');
let counter = 1
round.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        if(e.target.classList[1]==='prev'){
            counter--;
            if(counter<slides.length){
                counter=0;

            }
            console.log(counter+1);
            section.style.backgroundImage="url('../public/images/herosection.jpg')"; 
            console.log(slides[counter+1]);
            
            slides[0].classList.add('s-active');  
            slides[1].classList.remove('s-active');  
            round[0].classList.add('c-active');  
            round[1].classList.remove('c-active');
        }
        if (e.target.classList[1] === 'next') {
            counter++;
            if(counter>1){
                counter=1;
            }
            console.log(e.target);
            slides[1].classList.add('s-active');  
            slides[0].classList.remove('s-active');
            section.style.backgroundImage="url('../public/images/herosection1.jpg')"; 
            round[1].classList.add('c-active');  
            round[0].classList.remove('c-active');            
        }
    })

})
const timer = setInterval(() => {
     if(round[0].classList[1]==='prev'){
            console.log(counter);
            section.style.backgroundImage="url('../public/images/herosection.jpg')"; 
            slides[0].classList.add('s-active');  
            slides[1].classList.remove('s-active');  
            round[0].classList.add('c-active');  
            round[1].classList.remove('c-active');
        }
        
        
},5000);
const timer1 = setInterval(() => {
    if(round[1].classList[1] === 'next'){
        console.log("hey!here");
        slides[1].classList.add('s-active');  
        slides[0].classList.remove('s-active');
        section.style.backgroundImage="url('../public/images/herosection1.jpg')"; 
        round[1].classList.add('c-active');  
        round[0].classList.remove('c-active');          
    }
        
},10000);


