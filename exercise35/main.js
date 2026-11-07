
let image = document.querySelector("#image");

function ChangeImage() {

    let imageChange = prompt("Enter image URL");
    let imageBorder = prompt("Enter image border");
    let imagePadding= prompt("Enter image padding")
    let imageWidth = prompt("Enter image width");
    let imageHeight = prompt("Enter image height");

   
    image.setAttribute("src", imageChange);
    image.style.border = imageBorder;
    image.style.padding=imagePadding;
    image.style.width = imageWidth;
    image.style.height = imageHeight;

}
