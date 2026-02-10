const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");


main.addEventListener("mousemove", function(e){
    // console.log(e);
    cursor.style.left = `${e.x}px`
    cursor.style.top = `${e.y}px`
})