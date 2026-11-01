let list=document.querySelector("#list")

function addItem(){
    let newItem=document.createElement("li")
    newItem.textContent="kaxda"
   list.appendChild(newItem)


}

function removeItem(){
    if(list.lastChild){
         list.removeChild(list.lastChild);

    }else{
        console.log("xogta wey dhamaatey")
    }
   

}