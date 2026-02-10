const statusElement = document.querySelector(".status");
const toggleBtn = document.querySelector(".toggle-friend-btn");

let isFriend = false;

toggleBtn.addEventListener("click", function () {
  isFriend = !isFriend;

  if (isFriend) {
    statusElement.textContent = "Friends";
    statusElement.classList.remove("stranger");
    statusElement.classList.add("friend");
    toggleBtn.textContent = "Remove Friend";
  } else {
    statusElement.textContent = "Stranger";
    statusElement.classList.remove("friend");
    statusElement.classList.add("stranger");
    toggleBtn.textContent = "Add Friend";
  }
});