//  creating array of objects
const data = [
  {
    id: 213,
    name: "Marco della Rovere",
    grades: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    grades: 96,
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    grades: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    grades: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    grades: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    grades: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    grades: 84,
  },
];

console.log(data);

// .filter array to create lists

const bestStudents = data.filter((student) => student.grades >= 70);

console.log(bestStudents);

const bestStudentsHighId = data.filter(
  (student) => student.grades >= 70 && student.id >= 120
);

console.log(bestStudentsHighId);

// `.map` method to capitalize letters names in the array
const capitalizedNames = data.map((student) => {
  return {
    ...student,
    name: student.name.toUpperCase(),
  };
});

console.log(capitalizedNames);
