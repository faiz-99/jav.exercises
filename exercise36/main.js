 const colorSelected = document.querySelector("#colorSelected");
        const colorBox = document.querySelector("#colorBox");
        const colorCode = document.querySelector("#colorCode");
       

        
        colorSelected.addEventListener("input", function() {

            let color = colorSelected.value;

            colorBox.style.backgroundColor = color;

            colorCode.textContent = color;

        });
