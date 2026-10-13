// promise

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

showAcces()
    .then((verify)=> console.log(verify))
    .catch((eror)=> console.log(error))

    