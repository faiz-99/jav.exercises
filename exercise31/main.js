async function fetchUserData(){
    try{
        let response= await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error(`HTTP request failed ${response.status}`);
        }
        console.log("before json ",response)

        let data= await response.json()
        console.log(data)

    }catch(error){
        console.log(error)
        
    }
    
}
fetchUserData()