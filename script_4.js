const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("--- 1. Entrepreneurs nés dans les années 70 ---");
const seventies = entrepreneurs.filter(ent => ent.year >= 1970 && ent.year < 1980);
console.log(seventies);

console.log("--- 2. Array contenant le prénom et le nom ---");
const namesArray = entrepreneurs.map(ent => ({ first: ent.first, last: ent.last }));
console.log(namesArray);

console.log("--- 3. Quel âge aurait chaque inventeur aujourd'hui ? ---");
const currentYear = new Date().getFullYear();
const agesArray = entrepreneurs.map(ent => ({
  name: `${ent.first} ${ent.last}`,
  age: currentYear - ent.year
}));
console.log(agesArray);

console.log("--- 4. Tri des entrepreneurs par ordre alphabétique du nom de famille ---");
// On utilise .slice() pour éviter de modifier le tableau d'origine directement
const sortedEntrepreneurs = entrepreneurs.slice().sort((a, b) => {
  if (a.last < b.last) return -1;
  if (a.last > b.last) return 1;
  return 0;
});
console.log(sortedEntrepreneurs);