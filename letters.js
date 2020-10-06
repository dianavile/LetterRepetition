/*jshint esversion: 6 */

//Fase 1 Array, For Loop
const firstName = ["d", "i", "a", "n", "a"];

for (let i = 0; i < firstName.length; i++) {
  //Fase 2- If-Else conditionals- vowel, consonant, number
  if (
    firstName[i] == "a" ||
    firstName[i] == "e" ||
    firstName[i] == "i" ||
    firstName[i] == "o" ||
    firstName[i] == "u"
  ) {
    console.log("I found the VOWEL:  " + firstName[i]);
  } else if (
    firstName[i] == "b" ||
    firstName[i] == "c" ||
    firstName[i] == "d" ||
    firstName[i] == "f" ||
    firstName[i] == "g" ||
    firstName[i] == "h" ||
    firstName[i] == "j" ||
    firstName[i] == "k" ||
    firstName[i] == "l" ||
    firstName[i] == "m" ||
    firstName[i] == "n" ||
    firstName[i] == "p" ||
    firstName[i] == "q" ||
    firstName[i] == "r" ||
    firstName[i] == "s" ||
    firstName[i] == "t" ||
    firstName[i] == "v" ||
    firstName[i] == "w" ||
    firstName[i] == "x" ||
    firstName[i] == "y" ||
    firstName[i] == "x"
  ) {
    console.log("I found the CONSONANT:  " + firstName[i]);
  } else if (
    firstName[i] == 0 ||
    firstName[i] == 1 ||
    firstName[i] == 2 ||
    firstName[i] == 3 ||
    firstName[i] == 4 ||
    firstName[i] == 5 ||
    firstName[i] == 6 ||
    firstName[i] == 7 ||
    firstName[i] == 8 ||
    firstName[i] == 9
  ) {
    console.log("People names do not contain the number: " + firstName[i]);
  } else {
    console.log("This is an error");
  }
}

//Fase 3:store on a map both the letters in the list(or array) and the number of times they appear

const returnObject = {};

let letters = firstName.map(function (firstName) {
  for (let i = 0; i < firstName.length; i++) {
    if (returnObject.hasOwnProperty(firstName)) {
      returnObject[firstName[i]] += 1;
    } else {
      returnObject[firstName[i]] = 1;
    }
  }
});

console.log(returnObject);

//Fase 4- Concate firstName and lastName to fullName
const lastName = ["v", "i", "l", "e"];
const fullName = firstName.concat(" ").concat(lastName);

console.log(fullName);
