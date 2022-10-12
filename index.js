//function to generate the random background color and change the page bg color

let generateBtn = document.getElementById("generate-btn");
let outputCode = document.getElementById("output-code");
let outputColor = document.getElementById("output-color");

let hexString = "0123456789abcdef";

outputCode.value=' ';
outputColor.value=' ';

let randomColor = () => {
    let hexCode = "#";
    for( i=0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

let generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = Math.floor(Math.random() * 360);
    document.body.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
    outputCode.value = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`;
    outputColor.value = `Color 1 : ${colorOne} , Color 2 : ${colorTwo}`;
}

copyBtn.addEventListener("click", () => {
    outputCode.select();
    document.execCommand("copy");
});

generateBtn.addEventListener("click", generateGrad);
window.onload = generateGrad;
