const fibonacci = function(num) {
   if (num < 0) {
    return "OOPS"; 
   }

    num = +num; 
  
   let fib = [1]; 

   let j = 0; 
   for (let i = 1; i < num; i++) {
    if ( i == 1) {
         fib.push(i); 
    } else { 
        fib.push(fib[j] + fib[j +1]); 
        j +=1; 
    }
    
   }

   return fib[fib.length - 1]; 
};


// Do not edit below this line
module.exports = fibonacci;
