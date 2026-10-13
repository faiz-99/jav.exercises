function showAcces(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let acces=true;
            if(acces) {
                console.log("Allowed to Acces")

            } else {
                console.log("Denied to Acces")
            }
            
        }, 2000);

    });

};


async function displayData() {
    let user= await showAcces();
    try{
        console.log(user)
    } catch{
        console.log(error)
    }
    
}
displayData();