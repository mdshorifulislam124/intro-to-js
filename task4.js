// Example 1
var a = isNaN('11'); 
// '11' একটি string, কিন্তু JavaScript এটাকে number (11) বানাতে পারে
// তাই এটি number → isNaN return করবে false

console.log(a); // Output: false



// Example 2
var b = isNaN(2 - 10);
// আগে calculation হবে → 2 - 10 = -8
// -8 একটি number
// তাই isNaN return করবে false

console.log(b); // Output: false


// ak kothay number hole false nambur na hole true