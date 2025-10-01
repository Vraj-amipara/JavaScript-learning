console.log("hello world");
window.console.log("hello world from window");
// window.alert("hello world alert");
// window.prompt("hello world prompt");

console.dir(window)
console.dir(window.document)
console.dir(window.document.body)
console.dir(window.document.head)

document.body.style.backgroundColor = "lightblue";
document.body.childNodes[5].innerText = "hello world from javascript"; //p tag text change


let myid = document.getElementById("doc_id"); // id only one element
console.dir(myid);
console.log(myid);

myid.style.color = "red";
myid.style.backgroundColor = "black";
myid.style.textAlign = "center";
myid.style.padding = "20px";
myid.style.border = "2px solid green";

let my_class = document.getElementsByClassName("my_class");
console.dir(my_class);
console.log(my_class);

let frEl = document.querySelector("p"); // first element
console.log(frEl);

let allEl = document.querySelectorAll("p") // all element
console.log(allEl);

