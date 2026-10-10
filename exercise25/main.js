// Spread operator

let numbers=[1,2,3];
 let newNumbers=[...numbers,4,5,6]
 console.log(newNumbers)

// Output: [1,2,3,4,5,6,]

// Rest opreator

 function multiplay(...numbers) {
     return numbers.reduce((product,num)=> product * num ,1)
    
 },
 console.log(multiplay(25,4))

// Output: 100
