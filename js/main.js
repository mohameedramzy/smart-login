
const userName = localStorage.getItem("loggedInUser");
const logout = document.getElementById('logout'); 

logout.addEventListener('click', function () {
    localStorage.removeItem("loggedInUser");
    window.location.replace("index.html");
   })


if (userName) {
    const welcomeMessage = document.querySelector(".welcome");
    const name = document.querySelector(".name");

    if (welcomeMessage && name) {
        welcomeMessage.innerHTML = `Welcome, ${userName}`;
        name.innerHTML = `${userName}`;
    }
} 







