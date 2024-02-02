let rows = 100;
let cols = 26;


let addressColCont = document.querySelector(".address-col-cont");

let addressRowCont = document.querySelector(".address-row-cont");

let cellsCont = document.querySelector(".cells-cont");

let addressBar = document.querySelector(".address-bar");

for(let i = 0 ; i < rows ; i++)
{
    let addCol= ducument.createElement("div");
    addCol.setAttribute("class","address-col");
    addCol.innerText = i+1;
    addressColCont.appendChild(addCol);
}

for(let i = 0 ; i < cols ; i++)

{
    let addressRow= ducument.createElement("div");
    addressRow.setAttribute("class","address-row");
    addressRow.innerText =  String.fromCharCode(65+i);
    addressRowCont.appendChild(addressRow);
}

// for(let i=0;i<rows;i++)
// {
//     let rowCont = document.createElement("div");
//     rowCont.setAttribute("class","row-cont");
//     for(let j=0;j<cols;j++)
//     {
//         let cell = document.createElement("div");
//         cell.setAttribute("class","cell");
//         cell.setAttribute("contenteditable","true");
//         cell.setAttribute("spellcheak","false");

//         cell.setAttribute("rid",i);
//         cell.setAttribute("cid",j);
//         rowCont.appendChild(cell);
//         addListnerForAddressBarDisplay(cell,i,j);

//     }

//     cellsCont.appendChild(rowCont);
// }

// function addListnerForAddressBarDisplay(cell,i,j)
// {
//     cell.addEventListner("click" ,(e) => {
//         let rowID = i+1;
//         let colID = String.fromCharCode(65+j);
//         addressBar.nodeValue = '${colID}${rowID}';
//     })
// }











