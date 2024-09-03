function col() {

let hexAr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let colorP = [];

for (let i = 0; i < 6; i++) {
    colorP.push(hexAr[Math.floor(Math.random() * hexAr.length)]);
}

let final = `#${colorP.join("")}`;

document.body.style.backgroundColor = final;
}

window.onload = col;
document.querySelector(".c").onclick = col;
document.body.onclick = col;
