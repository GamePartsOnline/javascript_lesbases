// Dictionnaire de correspondance codons -> acides aminés
const geneticCode = {
  UCU: "Sérine", UCC: "Sérine", UCA: "Sérine", UCG: "Sérine", AGU: "Sérine", AGC: "Sérine",
  CCU: "Proline", CCC: "Proline", CCA: "Proline", CCG: "Proline",
  UUA: "Leucine", UUG: "Leucine",
  UUU: "Phénylalanine", UUC: "Phénylalanine",
  CGU: "Arginine", CGC: "Arginine", CGA: "Arginine", CGG: "Arginine", AGA: "Arginine", AGG: "Arginine",
  UAU: "Tyrosine", UAC: "Tyrosine"
};

function translateRNA(rna) {
  let proteins = [];
  
  // On découpe la chaîne d'ARN par paquets de 3 lettres (codons)
  for (let i = 0; i < rna.length; i += 3) {
    let codon = rna.slice(i, i + 3);
    if (geneticCode[codon]) {
      proteins.push(geneticCode[codon]);
    }
  }
  
  // On joint les acides aminés avec un tiret
  return proteins.join("-");
}

// Tests avec les ARN demandés
const rna1 = "CCGUCGUUGCGCUACAGC";
const rna2 = "CCUCGCCGGUACUUCUCG";

console.log(`ARN 1 (${rna1}) => ${translateRNA(rna1)}`);
console.log(`ARN 2 (${rna2}) => ${translateRNA(rna2)}`);