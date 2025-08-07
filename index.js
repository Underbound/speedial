

let mykey = document.getElementById("mykey");
let myinput = document.getElementById("myinput");
let mybtn = document.getElementById("mybtn");
let memo1 = document.getElementById("memo1");
let key1 = document.getElementById("key1");
let btn1 = document.getElementById("btn1");
let ctrlv = document.getElementById("ctrlv")
let mytext = document.getElementById("mytext")
let btn2 = document.getElementById("btn2")
let memo2 = document.getElementById("memo2")

mybtn.onclick = function(){
    localStorage.setItem(mykey.value,myinput.value);
}

btn1.onclick = function(){
    memo1.textContent = localStorage.getItem(key1.value);
}

ctrlv.onclick = function(){
    localStorage.setItem("key",mytext.value)
}

btn2.onclick = function(){
    memo2.textContent = localStorage.getItem("key")
}
