// Fonction pour calculer la factorielle
function factorielle(n) {
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

// Demande à l'utilisateur
let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
let resultatFinal = factorielle(Number(nombre));

console.log(`Le résultat est : ${resultatFinal}`);