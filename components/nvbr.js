function nvbr() {
  return `<nav>
    <div class="navbar">
      <!-- //1st -->
      <div id="thisIsHome" class="logo-container">
        <img class="logo" src="./images/logo.PNG" alt="logo" />
        <span id="carbsManager">Carb Manager<sup>&reg;</sup></span>
      </div>
      <!-- //2nd// -->
      <ul class="menu">
        <li><a href="./features.html">Features</a></li>
        <li><a href="premium1.html">Premium</a></li>
        <li><a href="recipe.html">Recipes</a></li>
        <li><a href="#articles">Articles</a></li>
        <li><a href="#cookbook">Cookbook</a></li>
        <li><a href="support.html">Support</a></li>
        <div class="cancel-btn"><i class="fas fa-times"></i></div>
      </ul>
      <!-- 3rd -->
      <div id="nav" class="access-btn">
          <span><a id="log" href="login.html">Log In</a></span>
          <div id="logout">
            <p>logout</p>
          </div>
          <span><a href="signup.html" id="join">Join For Free</a></span>
        </div>
    </div>
    <!-- menu btn -->
    <div class="menu-btn" onclick="showMenu()">
      <i class="fas fa-bars"></i>
    </div>
  </nav>

  <div class="mobile-menu">
    <ul class="menu">
      <li><a href="features.html">Features</a></li>
      <li><a href="premium1.html">Premium</a></li>
      <li><a href="recipe.html">Recipes</a></li>
      <li><a href="#articles">Articles</a></li>
      <li><a href="#cookbook">Cookbook</a></li>
      <li><a href="support.html">Support</a></li>
      <div class="cancel-btn"><i class="fas fa-times"></i></div>
    </ul>
    <!-- 3rd -->
    <div class="access-btn mobile-access-btn">
    </div>
  </div>`;
}
export default nvbr;
