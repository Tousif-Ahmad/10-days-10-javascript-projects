const storiyan = document.querySelector(".storiyan");
let fullscreen = document.querySelector("#fullscreen");
let stories = [
  {
    dp: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1621086893822-ca4d5a70bf36?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1621086893822-ca4d5a70bf36?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp : "https://images.unsplash.com/photo-1604681630513-69474a4e253f?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story : "https://images.unsplash.com/photo-1604681630513-69474a4e253f?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
  }
];

// let clutter = "";

stories.forEach((elem, idx) => {
//   clutter =
//     clutter +
//     `<div class="story">
//           <img id="${idx}"
//             src="${elem.dp}"
//             alt=""
//           />
//         </div>`;
    let storyDiv = document.createElement("div");
    let storyImg = document.createElement("img");
    storyDiv.classList.add("story");
    storyImg.id = idx;
    storyImg.src = elem.dp;
    storyImg.alt = `story ${idx + 1}`

    storyDiv.append(storyImg);
    storiyan.append(storyDiv)
    
});


storiyan.addEventListener("click", function(e){

    fullscreen.style.display = "block";
    fullscreen.style.backgroundImage = `url(${stories[e.target.id].story})`

    setTimeout(() => {
        fullscreen.style.display = "none";
    }, 2000);
})
