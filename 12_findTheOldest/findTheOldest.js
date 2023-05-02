// const findTheOldest = function(people) {
//     let maxAge = null; 
//     let oldestPerson = null; 

//     for (let i = 0; i < people.length; i++) {
//         let age = findAge(people[i]); 
//         console.log(age); 
//         if (maxAge == undefined || age > maxAge) {
//             maxAge = age; 
//             oldestPerson = people[i];  
          
//         }
//     }

//     return oldestPerson; 
// };

const findTheOldest = function(people) {
   return people.reduce((max, person) => findAge(person) > findAge(max) ? person : max, people[0]); 
}

let findAge = function(person){
    if (!person.yearOfDeath) {
        let currentYear = new Date().getFullYear(); 
        return currentYear - person.yearOfBirth; 
    }
    return person.yearOfDeath - person.yearOfBirth; 
}


// Do not edit below this line
module.exports = findTheOldest;
