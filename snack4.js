// Create an array of objects with the team names, points and fouls.
const serieBTeams = [
  { name: "AC Monza", pointsScored: 0, foulsConceded: 0 },
  { name: "Ascoli Picchio FC 1898", pointsScored: 0, foulsConceded: 0 },
  { name: "Brescia Calcio", pointsScored: 0, foulsConceded: 0 },
  { name: "Cesena FC", pointsScored: 0, foulsConceded: 0 },
  { name: "Cittadella", pointsScored: 0, foulsConceded: 0 },
  { name: "Cremonese", pointsScored: 0, foulsConceded: 0 },
  { name: "Crotone", pointsScored: 0, foulsConceded: 0 },
  { name: "Empoli FC", pointsScored: 0, foulsConceded: 0 },
  { name: "Frosinone Calcio", pointsScored: 0, foulsConceded: 0 },
  { name: "LR Vicenza Virtus", pointsScored: 0, foulsConceded: 0 },
  { name: "US Lecce", pointsScored: 0, foulsConceded: 0 },
  { name: "Modena FC", pointsScored: 0, foulsConceded: 0 },
  { name: "Pisa Calcio", pointsScored: 0, foulsConceded: 0 },
  { name: "Pordenone Calcio", pointsScored: 0, foulsConceded: 0 },
  { name: "Reggiana", pointsScored: 0, foulsConceded: 0 },
  { name: "SPAL 2013", pointsScored: 0, foulsConceded: 0 },
  { name: "Salernitana", pointsScored: 0, foulsConceded: 0 },
  { name: "Ternana Calcio", pointsScored: 0, foulsConceded: 0 },
  { name: "US Alessandria Calcio 1912", pointsScored: 0, foulsConceded: 0 },
  { name: "Venezia FC", pointsScored: 0, foulsConceded: 0 },
];

// Use a `.forEach` loop to iterate between every team
serieBTeams.forEach((team) => {
  // create a `Math.random` function for each `pointScored` and `foulsConceded`
  team.pointsScored = Math.floor(Math.random() * 81);
  team.foulsConceded = Math.floor(Math.random() * 81);
});

console.log(serieBTeams);

// create a `Math.random` function for each `pointScored` and `foulsConceded`
const namesAndFouls = serieBTeams.map(({ name, foulsConceded }) => ({
  name,
  foulsConceded,
}));
console.log(namesAndFouls);

// Print namesAndFouls on the page
const outputElement = document.getElementById("output");
let outputHTML = "";

namesAndFouls.forEach((team) => {
  outputHTML += `<p>${team.name}</p>`;
  outputHTML += `<p>Fouls Conceded: ${team.foulsConceded}</p>`;
});

outputElement.innerHTML = outputHTML;
