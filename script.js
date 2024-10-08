const containerElement = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerElement = document.createElement("div");
    colorContainerElement.classList.add("color-container");
    containerElement.appendChild(colorContainerElement);
}

const colorContainerElements = document.querySelectorAll(".color-container");

function generateColors(){
    colorContainerElements.forEach((colorContainerElement) => {
    const newColorCode = randomColor();
    colorContainerElement.style.backgroundColor = "#" + newColorCode;
    colorContainerElement.innerText = "#" + newColorCode;
    });
}

generateColors();

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}