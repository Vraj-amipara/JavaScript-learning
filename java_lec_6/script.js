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

let headden_prag = document.querySelector(".hidden_p"); 
// type = headden_prag
// ans = <p class=​"hidden_p">​Lorem, ipsum dolor.one​</p>​
// headden_prag.innerHTML
// 'Lorem, ipsum dolor.one'
// headden_prag.innerte
// undefined


// Qs. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS.

let h2 = document.querySelector("h2");
// console.dir(h2.innerText); // hello JavaScript
h2.innerText = h2.innerText + " from TC students";
// h2.innerText
// ' hello JavaScript from Apna College students'
// h2.innerHTML
// ' hello JavaScript from Apna College students'

// Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.

let divs = document.getElementsByClassName("box");
console.log(divs); // HTMLCollection(3) [div.box, div.box, div.box]

let ind = 1
for (div of divs) {
    // console.log(div.innerText);
    // console.log(div);

    div.innerText = `new unique text ${ind}`;
    ind ++;

    // bigginar try  

    divs[0] = "new unique text 1";//not used
    divs[1] = "new unique text 2";//not used
    divs[2] = "new unique text 3";//not used
}

// dom  part 2  -----------------------------------------------------------------------------