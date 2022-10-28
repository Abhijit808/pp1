const links = document.querySelectorAll(".product-anchor"); 
const content = document.querySelectorAll("[data-article]");
// const subnav = document.querySelectorAll(".pro")
// const href = window.location.href;
// subnav.forEach(nav=>{
//     nav.addEventListener('click',()=>{
    
//     })    
// })

links.forEach(link =>{
    // const haslink = link.classList.contains("active");
    link.addEventListener('click',(e)=>{
        const target = e.target;
        target.classList.add("active");
        links.forEach(l=>{
            if(l!==link){
                l.classList.remove("active");
            }
        })
       content.forEach(cont=>{
        if (target.classList[1] === cont.classList[0]) {
            cont.classList.remove("none");
        }
        else{
            cont.classList.add("none")
        }
       })
    })
})