// fetching Data

async function FetchingDta(){
    console.log("fetching Data")

    let response= await fetch("https://jsonplaceholder.typicode.com/albums");

    let Data= await response.json();
    console.log("response :",Data)
};

FetchingDta();