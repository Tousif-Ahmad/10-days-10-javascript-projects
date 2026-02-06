function updateClock() {
  let clock = document.querySelector("#clock");
  let date = document.querySelector("#date");

  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  let fullTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  clock.textContent = fullTime;

  let day = currentTime.getDay();
  let CurrentDate = currentTime.getDate();
  let month = currentTime.getMonth();
  let year = currentTime.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  date.textContent = `${days[day]}, ${CurrentDate} ${months[month]} ${year}`;
}

// Call setInterval ONCE, outside the function
updateClock(); // Initial call
setInterval(updateClock, 1000); // Update every second