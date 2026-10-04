let people =[
    {name:  "Alice",age: 25, city: "Wonderland"},
    {name:  "Bob",age: 30, city: "Builderland"},
    {name:  "Charlie",age: 35, city: "Chocolate factory"},

];


for(let person of people){
    for(let key in person){
        console.log(key +":"+ person[key])

    }
    console.log("---------------")
};

    
