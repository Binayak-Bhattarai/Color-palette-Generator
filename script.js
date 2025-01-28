function randomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateBox(){
const num = parseInt(document.getElementById('num').value);
const format=document.getElementById("format").value;
const boxContainer= document.getElementById("boxcontainer");

if (isNaN(num) || num < 1) {
    alert("Please enter a valid number of colors.");
    return;
}
boxContainer.innerHTML = "";


for (let i = 0; i < num; i++) {
    let color = format === "HEX" ? randomHexColor() : randomRgbColor();
    let box = document.createElement("div");
    box.className = "box";
    boxContainer.appendChild(box);
    box.addEventListener("click", clipboard);// call clipboard function and eventlistner also added
    box.style.backgroundColor = color;

    let input = document.createElement("input");
    input.type="text";
    input.id= "clrcode";
    box.appendChild(input);
    input.value = color;
    

  
}

}
function clearBox() {
    document.getElementById("boxcontainer").innerHTML = "";
}

function clipboard(){
let color = event.currentTarget.querySelector("input").value; // event defines current target which targets the box which is clicked 
    navigator.clipboard.writeText(color); // Copy color code to clipboard
    alert("Copied: " + color);
    
} 

