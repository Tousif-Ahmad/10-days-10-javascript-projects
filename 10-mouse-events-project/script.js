const elems = document.querySelectorAll(".elem");
console.log(elems);

elems.forEach((elem)=>{
    // console.log(elem);
    // console.log(elem.childNodes);
    elem.addEventListener("mousemove", function(e){
        elem.childNodes[3].style.left = e.x + "px";
        elem.childNodes[3].style.top = e.y + "px";
    })
    elem.addEventListener("mouseenter", function(){
        elem.childNodes[3].style.opacity = "1";
    })
    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].style.opacity = "0";
    })
})

// elem1.addEventListener("mousemove", function(e){
//     img.style.left = e.x + "px";
//     img.style.top = e.y + "px";
// })
// elem1.addEventListener("mouseenter", function(e){
//     img.style.opacity = "1"
// })
// elem1.addEventListener("mouseleave", function(e){
//     img.style.opacity = "0"
// })