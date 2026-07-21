let userInput = prompt("Dis quelque chose à l'Acné-Bot :");

if (userInput === null || userInput.trim() === "") {
  // Si le message est vide ou annulé
  console.log("t'es en PLS ?");
} else if (userInput.endsWith("?")) {
  // Si la phrase finit par un point d'interrogation
  console.log("Ouais Ouais...");
} else if (userInput === userInput.toUpperCase() && /[A-Z]/.test(userInput)) {
  // Si la phrase est 100% en majuscules (et contient au moins une lettre)
  console.log("Pwa, calme-toi...");
} else if (userInput.includes("Fortnite")) {
  // Si la phrase contient le mot "Fortnite"
  console.log("on s' fait une partie soum-soum ?");
} else {
  // Pour toute autre phrase
  console.log("balek.");
}