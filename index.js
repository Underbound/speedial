

let mytext = document.getElementById("mytext")
let btn2 = document.getElementById("btn2")
let memo2 = document.getElementById("memo2")
let btn1 = document.getElementById("btn1")
let memo1 = document.getElementById("memo1")
let plus = document.getElementById("plus")
let count = 1;

//to reset counter:
//localStorage.setItem("count",0); 
count = Number(localStorage.getItem("count"));


btn1.onclick = function(){
    localStorage.setItem("memo1", mytext.value);
    memo1.textContent = localStorage.getItem("memo1");
    console.log(localStorage.getItem("memo1"));
}

btn2.onclick = function(){
    localStorage.setItem("memo2", mytext.value);
    memo2.textContent = localStorage.getItem("memo2");
    console.log(localStorage.getItem("memo2"));
}


plus.onclick = function(){
    console.log("hello we up run this city yuh")
    count += 1
    console.log(count)
    localStorage.setItem("count",count)
    newMemo()
}

memo2.textContent = localStorage.getItem("memo2");
memo1.textContent = localStorage.getItem("memo1");


//trying to add new memos
let label = document.createElement("label");
let btn = document.createElement("button");

label.setAttribute("class","memoH");
btn.setAttribute("class", "paste");


newMemo = function(){
    console.log("neha waz here")
    let para = document.createElement("p");
    console.log(para);
    let section = document.createElement("section");
    section.setAttribute("id",`section${count+2}`);
    para.setAttribute("id",`memo${count+2}`);
    console.log(para)
    let newsection = document.getElementById(`section${count+2}`);
    let newpara = document.getElementById(`memo${count+2}`);
    newpara.textContent(`memo${count+2}`);
    document.body.insertBefore(section,plus);
    newsection.appendChild(para);
}

newMemo();


//for(let i = 1; i <= count; ++i)
//    newmemo();




console.log(count)