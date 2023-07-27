// selectionner mes elements html
const perso = document.querySelector(".perso");
const obstacle = document.querySelector(".obstacle");
const button = document.querySelector("button");
const scoreJeu = document.getElementById("scoreJeu");

// declaration du variable pour le score
let score = 0;

// fonction pour declencher le saut du personnage
button.addEventListener("click", sauter);

// foncton pour faire sauter le personnage
function sauter() {
  // verifier si la class animation
  if (perso.classList != "animation") {
    perso.classList.add("animation");
  }

  setTimeout(function () {
    perso.classList.remove("animation");
  }, 500);
}

// Verifier si le personnage touche l'obstacle
const verification = setInterval(function () {
  const persoTop = parseInt(
    window.getComputedStyle(perso).getPropertyValue("top")
  );

  const obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  // condition pour verifier si l'obstacle est toucher
  if (obstacleLeft < 20 && obstacleLeft > 0 && persoTop >= 130) {
    obstacle.style.animation = "none";
    alert("Vous avez perdu ");
    scoreJeu.textContent = `Votre score est de ${score}, cliquer sur jouer pour recommencer`;

    // renitialiser l'score
    score = 0;
  } else {
    // les points obtenu
    const pointObtenu = Math.floor(Math.random() * 5) + 1;
    score += pointObtenu;
  }
}, 1000);

