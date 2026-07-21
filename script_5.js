const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("--- 1. Est-ce que tous les livres ont été au moins empruntés une fois ? ---");
const allRentedAtLeastOnce = books.every(book => book.rented > 0);
console.log(allRentedAtLeastOnce ? "Oui, tous les livres ont été empruntés au moins une fois." : "Non, certains livres n'ont jamais été empruntés.");

console.log("--- 2. Quel est le livre le plus emprunté ? ---");
// On trie par ordre décroissant du nombre d'emprunts et on prend le premier
const mostRentedBook = books.slice().sort((a, b) => b.rented - a.rented)[0];
console.log(mostRentedBook);

console.log("--- 3. Quel est le livre le moins emprunté ? ---");
// On trie par ordre croissant du nombre d'emprunts et on prend le premier
const leastRentedBook = books.slice().sort((a, b) => a.rented - b.rented)[0];
console.log(leastRentedBook);

console.log("--- 4. Trouve le livre avec l'ID: 873495 ---");
const bookWithId = books.find(book => book.id === 873495);
console.log(bookWithId);

console.log("--- 5. Supprime le livre avec l'ID: 133712 ---");
const indexToDelete = books.findIndex(book => book.id === 133712);
if (indexToDelete !== -1) {
  books.splice(indexToDelete, 1);
}
console.log("Livre supprimé. Tableau mis à jour :", books);

console.log("--- 6. Trie les livres par ordre alphabétique (sans celui avec l'ID 133712) ---");
const sortedBooks = books.slice().sort((a, b) => {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
});
console.log(sortedBooks);