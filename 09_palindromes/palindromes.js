const palindromes = function (str) {
    //remove punctuation and make lowercase 
    let removedPunctuation = removePunctuation(str); 
    let lowercase = removedPunctuation.toLowerCase(); 

    if (lowercase.length % 2 == 0) {
        let parallelIdx = lowercase.length -1; 
        let midPoint = lowercase.length / 2; 

        for (let i = 0; i < midPoint.length; i++) {
            let currentEl = lowercase[i]; 
            console.log("what is currentEl? ", currentEl);
            console.log("what is parallelIdx? ", lowercase[parallelIdx]); 
            if (currentEl !== lowercase[parallelIdx]) {
                return false; 
            }
            parallelIdx -= 1; 
        }
        return true; 
    } else { 
        let midPoint = (Math.floor(lowercase.length / 2)) - 1; 
        let parallelIdx = lowercase.length -1; 

        for (let j = 0; j < midPoint; j++) {
            let currentEl = lowercase[j]; 
            if (currentEl !== lowercase[parallelIdx]) {
                return false; 
            }
            parallelIdx -= 1; 
        }
        return true; 
    }
};



const removePunctuation = function(str) {
    let punctuation = ["?", "!", ".", ","]; 
    let cleanedString = ""; 
    for (let i = 0; i < str.length; i++) {
        let el = str[i]; 
        if (punctuation.indexOf(el) == -1 && el !== " ") {
            cleanedString += el; 
        }
    }
    return cleanedString; 
}

// console.log(palindromes("Racecar!"))
console.log(palindromes("'ZZZZ car, a man, a maracaz.'")); 
// Do not edit below this line
module.exports = palindromes;
