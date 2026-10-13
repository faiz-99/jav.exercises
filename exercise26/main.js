

// blocking 

function info(){
    alert("Do you want to show this info?")  
       
    return info={
        name: "kalid",age:25,
    };
  
};
let display=info();
console.log(display)

console.log("Don't show this message until confirm fetch")

// non blocking

function test(callback){
    setTimeout(() => {
        let info={
            name: "Mohamed", age: 22
        };
        callback(info)
        
        
    }, 2000);
}
console.log(" Show it after 2 sec")


test(function(info){
    console.log(info)
}
    
)