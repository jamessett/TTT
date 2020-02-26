let player = "X";

let createTable = function () {

    document.getElementById("findtable").innerHTML=" "

    let cell1 = document.createElement("TD");
    cell1.onclick = function(){placeToken(this)};
    cell1.onmouseover = function(){hoverToken(this)};
    cell1.onmouseout = function(){unhoverToken(this)};
    let cell2 = document.createElement("TD");
    cell2.onclick = function(){placeToken(this)};
    cell2.onmouseover = function(){hoverToken(this)};
    cell2.onmouseout = function(){unhoverToken(this)};
    cell2.classList.add("leftRight");
    let cell3 = document.createElement("TD");
    cell3.onclick = function(){placeToken(this)};
    cell3.onmouseover = function(){hoverToken(this)};
    cell3.onmouseout = function(){unhoverToken(this)};
    let cell4 = document.createElement("TD");
    cell4.onclick = function(){placeToken(this)};
    cell4.onmouseover = function(){hoverToken(this)};
    cell4.onmouseout = function(){unhoverToken(this)};
    cell4.classList.add("topBottom")
    let cell5 = document.createElement("TD");
    cell5.onclick = function(){placeToken(this)};
    cell5.onmouseover = function(){hoverToken(this)};
    cell5.onmouseout = function(){unhoverToken(this)};
    cell5.classList.add("leftRight");
    cell5.classList.add("topBottom");
    let cell6 = document.createElement("TD");
    cell6.onclick = function(){placeToken(this)};
    cell6.onmouseover = function(){hoverToken(this)};
    cell6.onmouseout = function(){unhoverToken(this)};
    cell6.classList.add("topBottom");
    let cell7 = document.createElement("TD");
    cell7.onclick = function(){placeToken(this)};
    cell7.onmouseover = function(){hoverToken(this)};
    cell7.onmouseout = function(){unhoverToken(this)};
    let cell8 = document.createElement("TD");
    cell8.onclick = function(){placeToken(this)};
    cell8.onmouseover = function(){hoverToken(this)};
    cell8.onmouseout = function(){unhoverToken(this)};
    cell8.classList.add("leftRight");
    let cell9 = document.createElement("TD");
    cell9.onclick = function(){placeToken(this)};
    cell9.onmouseover = function(){hoverToken(this)};
    cell9.onmouseout = function(){unhoverToken(this)};

    cell1.innerText = "";
    cell2.innerText = "";
    cell3.innerText = "";
    cell4.innerText = "";
    cell5.innerText = "";
    cell6.innerText = "";
    cell7.innerText = "";
    cell8.innerText = "";
    cell9.innerText = "";

    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");

    let table = document.createElement("TABLE");

    let john = document.getElementById("findtable");

    row1.appendChild(cell1);
    row1.appendChild(cell2);
    row1.appendChild(cell3);

    row2.appendChild(cell4);
    row2.appendChild(cell5);
    row2.appendChild(cell6);

    row3.appendChild(cell7);
    row3.appendChild(cell8);
    row3.appendChild(cell9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);

    john.appendChild(table);
};
let hoverToken = function(id){
    if(player === "X"){
        id.innerText = "X";
    }else{
        id.innerText = "O";
    }
};

let unhoverToken = function(id){
    id.innerText = ""
};

let placeToken = function(clickelement){

    if(player === "X"){
        clickelement.innerText = "X";
        clickelement.onmouseover = "";
        clickelement.onmouseout = "";
        clickelement.onclick = "";
        clickelement.classList.add("color1");
        player = "O";
    }else{
        clickelement.innerText = "O";
        clickelement.onmouseover = "";
        clickelement.onmouseout = "";
        clickelement.onclick = "";
        clickelement.classList.add("color2")
        player = "X";
    }
};