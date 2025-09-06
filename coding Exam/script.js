const allLinks=document.querySelectorAll("a");
allLinks.forEach((link)=>{
    link.addEventListener("click",(Event)=>{
        if(!document.startViewTransition){
        setActiveitem(Event.target);
        return;
    }
    document.startViewTransition(()=>setActiveitem(Event.target));
 });
})
function setActiveitem(element){
    allLinks.forEach((link)=>link.classList.remove("active"))
    element.classList.add("active");
}
