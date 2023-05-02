const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR"; 
    }
    let startNum = Math.min(num1, num2); 
    let endNum = Math.max(num1, num2); 

    let finalSum = 0; 
    for (let i = startNum; i <= endNum; i++) {
        finalSum += i; 
    }

    return finalSum; 
};

// Do not edit below this line
module.exports = sumAll;
