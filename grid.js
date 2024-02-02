let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");


for(let i=0 ; i<rows ; i++)

{
    let addressCol= ducument.createElement("div");
    addressCol.innerText = i+1;
    addressColCont.appendChild(addressCol);
}