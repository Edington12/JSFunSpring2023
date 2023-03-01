let fullName = "Joe Washington"; // e.g.
let newLastName = "Fernandez"; // e.g.

/**
 * A person just got married and they need their last name replaced. You will change the value of "fullName" below. Replace the last name in "fullName" with "newLastName".
 *
 * @example
 * let fullName = "Emily Rose";
 * let newLastName = "Smith";
 * The new value for "fullName" should result in "Emily Smith".
 *
 * @example
 * let fullName = "Joe Washington";
 * let newLastName = "Fernandez";
 * The new value for "fullName" should result in "Joe Fernandez".
 */

// WRITE YOUR ANSWER BELOW THIS LINE
//let index = fullName.indexOf("");
//const newLastName = (`${index} &{indexOf(fullName.index -)});
//console.log(`${index} ${indexOf(fullName.indexOf -1)});


let lastNameDetect = fullName.indexOf(" ");// In the 4th spot
let lastName = fullName.substring(lastNameDetect + 1);// Start after the space -
//console.log(lastName);
let newFirstName = fullName.substring(0, lastNameDetect); /* Start with the 1st character, stop before the 4th spot*/
//console.log(newFirstName); 
newLastName = lastName.replace(lastName, "Fernandez");
fullName = `${newFirstName} ${newLastName}`;
//console.log(`"${fullName}"`);


/*const index = fullName.indexOf(" ");
const oldLastName = fullName.substring(index + 1);
console.log(oldLastName);
fullName = fullName.replace(oldLastName, newLastName);
console.log(fullName);*/



