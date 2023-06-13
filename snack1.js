console.log("JS OK");

// adding vip table variable
const tableName = "VIP Table";

// adding guestlist array
const guestList = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

// .map array method to add info about seatings
const placeCards = guestList.map((guest, index) => {
  return {
    tableName: tableName,
    guestName: guest,
    seatOccupied: index + 1,
  };
});

console.log(placeCards);
