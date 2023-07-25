const perso = document.querySelector(".perso");
const obstacle = document.querySelector(".obstacle");
const button = document.querySelector("button");
button.addEventListener("click", sauter);
function sauter() {
  // foncton pour faire sauter le personnage
  if (perso.classList != "animation") {
    perso.classList.add('animation');
  }
  setTimeout(function () {
    personalbar.classList.remove('animation');
  },500);
}
// Verifier si le personnage touche l'obstacle
const verification = setInterval(function(){
  var persoTop = parseInt(
    window.getComputedStyle(perso).getPropertyValue("top")
  );
  var obstacleLeft = parseInt (window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  if (obstacleLeft<20 && obstacleLeft>0 && persoTop>= 140) {
    obstacle.style.animation = "none";
      alert("Vous avez perdu!");
  }
},1);

