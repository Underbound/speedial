let mytext = document.getElementById("mytext");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let erase = document.getElementById("erase");
let paste = document.getElementsByClassName("paste");
let memoList = [];


function reset(){
    memoList = []
    storeMemo()
}
//reset()
console.log(accessMemo());
console.log(memoList);
if (accessMemo()!=null){
    memoList = accessMemo();
}
console.log(memoList);

function storeMemo(){
    localStorage.setItem("memoList",JSON.stringify(memoList));
}
function accessMemo(){
    return JSON.parse(localStorage.getItem("memoList"));
}

//trying to add new memos

function createMemo(i){
    //create elements
    let section = document.createElement("section");
    let label = document.createElement("label");
    let button = document.createElement("button");
    let para = document.createElement("p");
    let minus = document.createElement("button");
    //set attributes
    section.setAttribute("id",`section${i}`)
    section.setAttribute("class","flow");
    para.setAttribute("id",`memo${i}`);
    label.setAttribute("class", "memoH");
    button.setAttribute("id",`btn${i}`);
    button.setAttribute(`class`,`paste`);
    button.setAttribute("onclick",`display(${i})`)
    label.textContent = `memo#${i} ~ `;
    minus.textContent = "x"
    minus.setAttribute("class","minus")
    minus.setAttribute("onclick",`minusMemo(${i})`)
    //assemble
    document.body.insertBefore(section,plus);
    section.appendChild(minus)
    section.appendChild(label);
    section.appendChild(button);
    section.appendChild(para);
}

newMemo = function(i){
    console.log(`load newMemo #${i}`);
    createMemo(i);
    memoList.push("");
    storeMemo();
    console.log(memoList);
    
}

function load(){
let i;
for(let i = 1; i <= memoList.length; ++i) {
    console.log(`load oldMemo #${i}`);
    createMemo(i);
    document.getElementById(`memo${i}`).textContent = accessMemo()[i-1];
}
}
load()


function loadMemos(){
    for(let k=0; k<memoList.length; k++) {
        document.getElementById(`memo${k+1}`).textContent = memoList[k]
    }
}

plus.onclick = function(){
    newMemo(paste.length + 1)
    console.log("plus clicked")
}
erase.onclick = function(){
    console.log("erase")
    for(let k=0; k<memoList.length; k++) {
        memoList[k] = ""
        document.getElementById(`memo${k+1}`).textContent = memoList[k]
    }
    storeMemo()
}

function minusMemo(i){
    document.getElementById(`section${memoList.length}`).remove();
    let front = memoList.slice(0,i-1);
    let end = memoList.slice(i,memoList.length);
    console.log(i);
    console.log(front);
    console.log(end);
    memoList = front.concat(end);
    console.log(memoList)
    storeMemo();
    loadMemos();

}

function display(n){
    console.log(`paste on memo#${n}`);
    memoList[n-1] = mytext.value;
    storeMemo();
    document.getElementById(`memo${n}`).textContent = memoList[n-1]
    console.log(memoList)
}

console.log(`no of memos = ${memoList.length}`)
