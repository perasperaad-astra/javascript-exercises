const removeFromArray = function(arr, ...elementsToRemove) {
    let removed = []; 

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]; 
        let elExistsInArray = elementsToRemove.indexOf(el); 
        if (elExistsInArray == -1) {
            removed.push(el); 
        }
        }
    

    return removed; 
};

// Do not edit below this line
module.exports = removeFromArray;
