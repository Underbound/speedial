

let mytext = document.getElementById("mytext");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let erase = document.getElementById("erase");
let paste = document.getElementsByClassName("paste");
let count = 1;


//to reset counter:
//localStorage.setItem("count",0); 
count = Number(localStorage.getItem("count"));

/*trying to make delete button:
idea is instead of memos stored individ, store as a list, and memo n displays the nth entry in the list
press delete on memo k
the last memo block deletes and the kth entry of the list deletes, so the others all shift up, reload the memo contents 
side note: have load memo contents as separate function to load memo blocks
*/

//trying to add new memos

newMemo = function(i){
    console.log(`newMemo #${i}`);
    let section = document.createElement("section");
    let label = document.createElement("label");
    let button = document.createElement("button");
    let para = document.createElement("p");

    section.setAttribute("class","flow");
    para.setAttribute("id",`memo${i}`);
    label.setAttribute("class", "memoH");
    button.setAttribute("id",`btn${i}`);
    button.setAttribute(`class`,`paste`);

    document.body.insertBefore(section,plus);
    label.textContent = `memo#${i} ~ `;
    section.appendChild(label);
    section.appendChild(button);
    section.appendChild(para);
    
}

function load(){
let i;
for(let i = 1; i <= count; ++i) {
    console.log(`oldMemo #${i}`);
    let section = document.createElement("section");
    let label = document.createElement("label");
    let button = document.createElement("button");
    let para = document.createElement("p");

    section.setAttribute("class","flow");
    para.setAttribute("id",`memo${i}`);
    label.setAttribute("class", "memoH");
    button.setAttribute("id",`btn${i}`);
    button.setAttribute("class", "paste");
    button.setAttribute("onclick",`display(${i})`)

    document.body.insertBefore(section,plus);
    label.textContent = `memo#${i} ~ `;
    section.appendChild(label);
    section.appendChild(button);
    section.appendChild(para);
    document.getElementById(`memo${i}`).textContent = localStorage.getItem(`memo${i}`);
}
}
load()


plus.onclick = function(){
    count += 1
    localStorage.setItem("count",count)
    newMemo(paste.length + 1)
    console.log(`new count = ${count}`)
}
erase.onclick = function(){
    console.log("erase")
    for(let k=1;k<=count;k++) {
        localStorage.setItem(`memo${k}`,"");
        document.getElementById(`memo${k}`).textContent = "";
    }
}

function display(n){
    console.log(n)
    localStorage.setItem(`memo${n}`,mytext.value);
    document.getElementById(`memo${n}`).textContent = localStorage.getItem(`memo${n}`);
}

console.log(`no of memos is ${paste.length}`)
console.log(`initial count = ${count}`)