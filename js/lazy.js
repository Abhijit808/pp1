const overObserver = document.querySelectorAll(".over-observer");
const Observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("opacity-1",entry.isIntersecting);
    })
})
overObserver.forEach(ele=>{
    Observer.observe(ele);
})