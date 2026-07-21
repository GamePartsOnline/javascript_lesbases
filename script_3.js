let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
etages = Number(etages);

for (let i = 1; i <= etages; i++) {
  // Crée les espaces (etages - i) et les dièses (i)
  let espaces = " ".repeat(etages - i);
  let dieses = "#".repeat(i);
  console.log(espaces + dieses);
}