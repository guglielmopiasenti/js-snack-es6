# Snack Array Methods

## SNACKS 1

The Great Gatsby asked us to create place cards for the guests' table at his mega VIP party. He left us the name of the table ("VIP Table") and the guest list in order of seating:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
But the typography to print everything wants us to send it a list of guests in which each guest is a javascript object which has as attributes: table name, guest name and seat occupied.
We generate and print the placeholder list in the console.

# PROCEDURE

1. I create the array with names.
2. I create the `const` variable "VIP Table".
3. I use the `.map` array method to add information about the seatings.
4. I print it with `console.log` on the console.

## SNACKS 2

We have a list of students of a faculty, identified by id, name and total sum of their exam marks...
To prepare the classroom for a new course, we have to carry out a series of operations

1. We need to create a list of all students who have a total grade above 70
   2.We need to create a list of all students who have total grades above 70 and ids above 120
2. we have to print the plates with the students' names: create a list containing their name in capital letters ES (Marco della Rovere => MARCO DELLA ROVERE);
   This is the list of students:

   Id | Name | Grades
   213 | Marco della Rovere | 78
   110 | Paola Cortellessa | 96
   250 | Andrea Mantegna | 48
   145 | Gaia Borromini | 74
   196 | Luigi Grimaldello | 68
   102 | Piero della Francesca | 50
   120 | Francesca da Polenta | 84

# Procedure

1. I create an array of objects with the given info.
2. I use a `.filter` array method to create a list of all students who have a total grade above 70.
3. I use a `.filter` array method to create a list of all students who have a total grade above 70 and ids above 120.
4. I use a `.map` method to capitalize letters names in the array

## SNACKS 3

Create an array of objects:
Each object will describe a racing bike with the following properties: name and weight.
Print the bike with the least weight in the console using destructuring

# PROCEDURE

1. Create an array of objects with the bikes' name.
2. Define the `lightestBike` variable and assign it the result of the `.find` method using an arrow function as the callback function for the `.find` method. This function will be called for each element in the bikes array
3. Within the callback function, define the condition to find the lightest bike by comparing the weight property:
4. Use the `Math.min` function along with the spread operator (...) to find the minimum weight among all the bikes in the array:
5. Use the `.map` arrow function along the `Math.min` to finish calculating the weight.
6. target element in the DOM
7. `innerText` to print the result

## SNACKS 4

Create an array of soccer team objects.
Each team will have different properties: name, points scored, fouls conceded.
name will be the only property to fill in, the others will all be set to 0.
Generate random numbers instead of 0s in the properties points made and fouls suffered.
Finally, using destructuring, we create a new array whose elements contain only names and fouls and print everything in the console.

### BONUS

Print on page as well as console!

# PROCEDURE

1. Create an array of objects with the team names, points and fouls.
2. Use a `.forEach` loop to iterate between every team
3. create a `Math.random` function for each `pointScored` and `foulsConceded` then print to console.
4. Print the pointsScored and foulsConceded values of each team to the console.
   4b. create a `Math.random` function for each `pointScored` and `foulsConceded`
   4c. Use destructuring to extract the name and foulsConceded properties from each team object.
5. Print namesAndFouls on the page
