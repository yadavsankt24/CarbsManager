function auth(){
    let user = JSON.parse(localStorage.getItem("loggedin"));
    let log = document.getElementById("log")
    let logout = document.getElementById("logout");
    let premium = document.querySelector("#join");
    let navbar = document.querySelector("#nav");
    if (user != null) {
      document.getElementById("log").textContent = user.username;
      document.getElementById("log").href = "#";
      navbar.style.flexDirection="column"
      if (user.pm == true) {
        premium.textContent = "Premium User";
        
        premium.href="#";
      } else {
        premium.style.display = "none";
      }
      navbar.addEventListener("mouseover", () => {
        logout.style.display = "block";
      });
      navbar.addEventListener("mouseout", () => {
        logout.style.display = "none";
      });
    }else{
      navbar.style.display="block"
    }
    logout.addEventListener("click", () => {
      localStorage.setItem("loggedin", null);
      window.location.href = "home.html";
    });  
}

export default auth;
